import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // PayTabs may POST form data to callback

const PORT = process.env.PORT || 3000;

const PAYTABS_PROFILE_ID = Number(process.env.PAYTABS_PROFILE_ID);
const PAYTABS_SERVER_KEY = process.env.PAYTABS_SERVER_KEY?.trim();
const PAYTABS_BASE_URL = (process.env.PAYTABS_BASE_URL || "https://secure.paytabs.com").replace(/\/+$/, "");

// ── URL SETTINGS ──────────────────────────────────────────────────────────────
// SITE_RETURN_URL  = the page PayTabs sends the BROWSER back to after payment
//                   e.g. https://cityonetours.com/apply  (no .html if that 404s)
// SITE_CALLBACK_URL = backend URL PayTabs POSTs the result to (server-to-server)
// SITE_SUCCESS_URL  = where YOUR backend redirects the browser on success
// SITE_FAIL_URL     = where YOUR backend redirects the browser on failure
// ─────────────────────────────────────────────────────────────────────────────
const SITE_RETURN_URL    = process.env.SITE_RETURN_URL?.trim();
const SITE_CALLBACK_URL  = process.env.SITE_CALLBACK_URL?.trim();
const SITE_SUCCESS_URL   = process.env.SITE_SUCCESS_URL?.trim();
const SITE_FAIL_URL      = process.env.SITE_FAIL_URL?.trim();

// ── WHATSAPP SETTINGS (CallMeBot — free personal WhatsApp API) ────────────────
// 1. Send "I allow callmebot to send me messages" to +34 644 66 00 05 on WhatsApp
// 2. You will receive your API key via WhatsApp
// 3. Add to .env:  CALLMEBOT_PHONE=8309881421  CALLMEBOT_APIKEY=your_key_here
// ─────────────────────────────────────────────────────────────────────────────
const CALLMEBOT_PHONE  = process.env.CALLMEBOT_PHONE?.trim();   // 8309881421
const CALLMEBOT_APIKEY = process.env.CALLMEBOT_APIKEY?.trim();  // from CallMeBot
const WHATSAPP_ENABLED = !!(CALLMEBOT_PHONE && CALLMEBOT_APIKEY);

// ── OPTIONAL: UltraMsg (supports sending files/docs over WhatsApp) ────────────
// Sign up free at ultramsg.com, create an instance, connect your WhatsApp number
// Add to .env:  ULTRAMSG_INSTANCE=instance12345  ULTRAMSG_TOKEN=your_token
// ─────────────────────────────────────────────────────────────────────────────
const ULTRAMSG_INSTANCE = process.env.ULTRAMSG_INSTANCE?.trim();
const ULTRAMSG_TOKEN    = process.env.ULTRAMSG_TOKEN?.trim();
const ULTRAMSG_ENABLED  = !!(ULTRAMSG_INSTANCE && ULTRAMSG_TOKEN);

// ── ENV VALIDATION ────────────────────────────────────────────────────────────
function validateEnv() {
  const missing = [];
  if (!PAYTABS_PROFILE_ID || Number.isNaN(PAYTABS_PROFILE_ID)) missing.push("PAYTABS_PROFILE_ID");
  if (!PAYTABS_SERVER_KEY)  missing.push("PAYTABS_SERVER_KEY");
  if (!SITE_RETURN_URL)     missing.push("SITE_RETURN_URL");
  if (!SITE_CALLBACK_URL)   missing.push("SITE_CALLBACK_URL");
  if (!SITE_SUCCESS_URL)    missing.push("SITE_SUCCESS_URL");
  if (!SITE_FAIL_URL)       missing.push("SITE_FAIL_URL");
  if (missing.length) throw new Error(`Missing environment variables: ${missing.join(", ")}`);
}
validateEnv();

function isValidUrl(value) {
  try { new URL(value); return true; } catch { return false; }
}

// ── WHATSAPP HELPERS ──────────────────────────────────────────────────────────

/**
 * Send a WhatsApp message via CallMeBot (free, personal numbers only).
 * You must register your number first — see instructions in .env comments above.
 */
async function sendWhatsAppCallMeBot(message) {
  if (!WHATSAPP_ENABLED) {
    console.log("[WhatsApp] CallMeBot not configured — skipping notification");
    return;
  }
  try {
    const encoded = encodeURIComponent(message);
    const url = `https://api.callmebot.com/whatsapp.php?phone=${CALLMEBOT_PHONE}&text=${encoded}&apikey=${CALLMEBOT_APIKEY}`;
    const res = await fetch(url);
    const text = await res.text();
    console.log("[WhatsApp CallMeBot] Response:", text.substring(0, 200));
  } catch (err) {
    console.error("[WhatsApp CallMeBot] Error:", err.message);
  }
}

/**
 * Send a WhatsApp message via UltraMsg (supports richer messages & attachments).
 * Optional fallback / alternative to CallMeBot.
 */
async function sendWhatsAppUltraMsg(toPhone, message) {
  if (!ULTRAMSG_ENABLED) return;
  try {
    const url = `https://api.ultramsg.com/${ULTRAMSG_INSTANCE}/messages/chat`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: ULTRAMSG_TOKEN,
        to:    toPhone.startsWith("+") ? toPhone : `+${toPhone}`,
        body:  message
      })
    });
    const data = await res.json();
    console.log("[WhatsApp UltraMsg] Response:", data);
  } catch (err) {
    console.error("[WhatsApp UltraMsg] Error:", err.message);
  }
}

/**
 * Build and send the admin WhatsApp notification after a successful payment.
 * Tries UltraMsg first (richer), then falls back to CallMeBot.
 */
async function notifyAdminWhatsApp(payload) {
  const pr = payload?.payment_result || {};
  const cd = payload?.customer_details || {};
  const ud = payload?.user_defined || {};

  const appId       = payload?.cart_id || ud?.ud1 || "N/A";
  const visaType    = ud?.ud2 || "N/A";
  const customerEmail = ud?.ud3 || cd?.email || "N/A";
  const customerName  = cd?.name || "N/A";
  const customerPhone = cd?.phone || "N/A";
  const amount      = payload?.cart_amount ? `AED ${payload.cart_amount}` : "N/A";
  const tranRef     = payload?.tran_ref || "N/A";
  const status      = pr?.response_status === "A" ? "✅ PAID" : `❌ ${pr?.response_message || "Unknown"}`;
  const now         = new Date().toLocaleString("en-AE", { timeZone: "Asia/Dubai" });

  const message =
`🇦🇪 *NEW UAE VISA APPLICATION* 🇦🇪

💳 *Payment:* ${status}
📋 *Ref No:* ${appId}
🔖 *Tran Ref:* ${tranRef}
🛂 *Visa Type:* ${visaType}
💰 *Amount:* ${amount}

👤 *Customer Details:*
• Name:  ${customerName}
• Email: ${customerEmail}
• Phone: ${customerPhone}

🕐 *Time:* ${now}

📂 View documents in Firebase:
https://console.firebase.google.com/project/cityonetours-uaevisa/firestore

Please process this application promptly!`;

  // Try UltraMsg first (better formatting), then CallMeBot
  if (ULTRAMSG_ENABLED) {
    await sendWhatsAppUltraMsg(`+${CALLMEBOT_PHONE || "8309881421"}`, message);
  } else {
    await sendWhatsAppCallMeBot(message);
  }
}

// ── ROUTES ────────────────────────────────────────────────────────────────────

app.get("/", (req, res) => {
  res.json({ ok: true, message: "City One PayTabs backend is running" });
});

app.get("/health", (req, res) => {
  res.json({
    ok: true,
    profileLoaded:      !!PAYTABS_PROFILE_ID,
    serverKeyLoaded:    !!PAYTABS_SERVER_KEY,
    baseUrl:            PAYTABS_BASE_URL,
    returnUrlValid:     isValidUrl(SITE_RETURN_URL),
    callbackUrlValid:   isValidUrl(SITE_CALLBACK_URL),
    whatsappCallMeBot:  WHATSAPP_ENABLED,
    whatsappUltraMsg:   ULTRAMSG_ENABLED,
  });
});

// ── CREATE PAYMENT ────────────────────────────────────────────────────────────
app.post("/create-payment", async (req, res) => {
  try {
    const { cartId, amount, visaType, customerName, customerEmail, customerPhone, applicationId } = req.body;

    if (!cartId || !amount || !customerName || !customerEmail || !customerPhone) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const numericAmount = Number(amount);
    if (Number.isNaN(numericAmount) || numericAmount <= 0) {
      return res.status(400).json({ error: "Invalid amount" });
    }

    if (!isValidUrl(SITE_RETURN_URL))   return res.status(500).json({ error: "SITE_RETURN_URL is not a valid URL" });
    if (!isValidUrl(SITE_CALLBACK_URL)) return res.status(500).json({ error: "SITE_CALLBACK_URL is not a valid URL" });

    const finalCartId = applicationId || cartId;

    // ── KEY FIX: build the return URL correctly ──────────────────────────────
    // PayTabs will append its own query params to whatever return URL you give.
    // We pass the appId as a path-safe param so the frontend can read it back.
    const returnUrl = new URL(SITE_RETURN_URL);
    returnUrl.searchParams.set("appId", finalCartId);
    // ─────────────────────────────────────────────────────────────────────────

    const payload = {
      profile_id:       PAYTABS_PROFILE_ID,
      tran_type:        "sale",
      tran_class:       "ecom",
      cart_id:          String(finalCartId),
      cart_description: `UAE Visa Application - ${visaType || "Visa Service"}`,
      cart_currency:    "AED",
      cart_amount:      numericAmount,
      return:           returnUrl.toString(),  // ← clean URL, no double-? issues
      callback:         SITE_CALLBACK_URL,
      customer_details: {
        name:    customerName,
        email:   customerEmail,
        phone:   customerPhone,
        street1: "Dubai",
        city:    "Dubai",
        state:   "Dubai",
        country: "AE",
        zip:     "00000"
      },
      user_defined: {
        ud1: String(finalCartId),
        ud2: visaType || "",
        ud3: customerEmail || "",
        ud4: customerPhone || "",
        ud5: customerName  || "",
      }
    };

    console.log("----- PayTabs Create Payment -----");
    console.log("Return URL:", returnUrl.toString());
    console.log("Callback URL:", SITE_CALLBACK_URL);
    console.log("Amount:", numericAmount, "AED | Cart ID:", finalCartId);

    const response = await fetch(`${PAYTABS_BASE_URL}/payment/request`, {
      method: "POST",
      headers: {
        "Content-Type":  "application/json",
        "Authorization": PAYTABS_SERVER_KEY
      },
      body: JSON.stringify(payload)
    });

    const rawText = await response.text();
    let data;
    try   { data = JSON.parse(rawText); }
    catch { data = { raw: rawText };    }

    console.log("PayTabs status:", response.status);
    console.log("PayTabs response:", data);

    if (!response.ok) {
      return res.status(response.status).json({ error: data.message || data.error || "PayTabs request failed", details: data });
    }
    if (!data.redirect_url) {
      return res.status(500).json({ error: "PayTabs did not return redirect_url", details: data });
    }

    return res.json({ success: true, redirect_url: data.redirect_url, tran_ref: data.tran_ref || null, cart_id: finalCartId });

  } catch (error) {
    console.error("create-payment error:", error);
    return res.status(500).json({ error: error.message || "Internal server error" });
  }
});

// ── PAYTABS CALLBACK (server-to-server POST from PayTabs) ─────────────────────
app.post("/paytabs-callback", async (req, res) => {
  try {
    const payload = req.body;
    console.log("----- PayTabs Callback Received -----");
    console.log(JSON.stringify(payload, null, 2));

    const paymentResult  = payload?.payment_result || {};
    const responseStatus = paymentResult.response_status || "";
    const tranRef        = payload?.tran_ref || "";
    const cartId         = payload?.cart_id || payload?.user_defined?.ud1 || "";
    const isSuccess      = responseStatus === "A";

    console.log("Payment status:", isSuccess ? "PAID ✅" : "FAILED ❌");
    console.log("Cart ID:", cartId, "| Tran Ref:", tranRef);

    // ── Send WhatsApp notification to admin ───────────────────────────────────
    if (isSuccess) {
      await notifyAdminWhatsApp(payload);
    }

    // ── TODO: Update Firestore here if you want server-side confirmation ──────
    // You can add Firebase Admin SDK here for server-side Firestore writes.
    // For now the frontend handles Firestore updates on the success return page.

    return res.status(200).json({ received: true });

  } catch (error) {
    console.error("paytabs-callback error:", error);
    return res.status(500).json({ error: error.message || "Callback processing failed" });
  }
});

// ── PAYMENT RETURN (browser redirect from PayTabs after payment) ──────────────
// PayTabs sends the browser here. We forward to the correct frontend page.
// This endpoint must match SITE_RETURN_URL in your .env (if you use a backend relay).
//
// ⚠️  ALTERNATIVE (simpler, avoids 404):
//     Set SITE_RETURN_URL directly to your frontend page, e.g.:
//       SITE_RETURN_URL=https://cityonetours.com/apply
//     Then PayTabs sends the browser straight to your frontend — skip this route.
// ─────────────────────────────────────────────────────────────────────────────
app.get("/payment-return", (req, res) => {
  try {
    const { appId, tran_ref, respStatus } = req.query;

    // PayTabs sets respStatus: "A" = Authorised (success), anything else = fail
    const isSuccess = req.query.respStatus === "A" || req.query.payment === "success";

    if (isSuccess) {
      const target = new URL(SITE_SUCCESS_URL);
      if (appId)    target.searchParams.set("appId",    appId);
      if (tran_ref) target.searchParams.set("tran_ref", tran_ref);
      return res.redirect(target.toString());
    }

    const target = new URL(SITE_FAIL_URL);
    if (appId) target.searchParams.set("appId", appId);
    return res.redirect(target.toString());

  } catch (error) {
    console.error("payment-return error:", error);
    return res.status(500).send("Return handling failed");
  }
});

app.listen(PORT, () => {
  console.log(`\n🚀 Server running on port ${PORT}`);
  console.log(`   Health:  http://localhost:${PORT}/health`);
  console.log(`   WhatsApp (CallMeBot):  ${WHATSAPP_ENABLED ? "✅ enabled" : "⚠️  not configured"}`);
  console.log(`   WhatsApp (UltraMsg):   ${ULTRAMSG_ENABLED ? "✅ enabled" : "⚠️  not configured"}\n`);
});