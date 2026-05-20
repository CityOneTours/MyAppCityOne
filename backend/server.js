import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

const PAYTABS_PROFILE_ID  = Number(process.env.PAYTABS_PROFILE_ID);
const PAYTABS_SERVER_KEY  = process.env.PAYTABS_SERVER_KEY?.trim();
const PAYTABS_BASE_URL    = (process.env.PAYTABS_BASE_URL || "https://secure.paytabs.com").replace(/\/+$/, "");

const SITE_RETURN_URL   = process.env.SITE_RETURN_URL?.trim();
const SITE_CALLBACK_URL = process.env.SITE_CALLBACK_URL?.trim();
const SITE_SUCCESS_URL  = process.env.SITE_SUCCESS_URL?.trim();
const SITE_FAIL_URL     = process.env.SITE_FAIL_URL?.trim();

// ── GMAIL / EMAIL CONFIG ──────────────────────────────────────────────────────
const GMAIL_USER       = process.env.GMAIL_USER?.trim();
const GMAIL_APP_PASS   = process.env.GMAIL_APP_PASSWORD?.trim();
const ADMIN_EMAIL      = "visa@cityonetours.ae"; // ← always notify this address

// ── WHATSAPP (optional) ───────────────────────────────────────────────────────
const CALLMEBOT_PHONE  = process.env.CALLMEBOT_PHONE?.trim();
const CALLMEBOT_APIKEY = process.env.CALLMEBOT_APIKEY?.trim();
const WHATSAPP_ENABLED = !!(CALLMEBOT_PHONE && CALLMEBOT_APIKEY);

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
  if (!GMAIL_USER)          missing.push("GMAIL_USER");
  if (!GMAIL_APP_PASS)      missing.push("GMAIL_APP_PASSWORD");
  if (missing.length) throw new Error(`Missing environment variables: ${missing.join(", ")}`);
}
validateEnv();

function isValidUrl(v) {
  try { new URL(v); return true; } catch { return false; }
}

// ── NODEMAILER TRANSPORTER ────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_APP_PASS,
  },
});

// ── EMAIL: ADMIN NOTIFICATION (sent to visa@cityonetours.ae) ──────────────────
async function sendAdminEmail(payload, isSuccess) {
  const pr = payload?.payment_result || {};
  const cd = payload?.customer_details || {};
  const ud = payload?.user_defined || {};

  const appId         = payload?.cart_id || ud?.ud1 || "N/A";
  const visaType      = ud?.ud2 || "N/A";
  const customerEmail = ud?.ud3 || cd?.email || "N/A";
  const customerName  = ud?.ud5 || cd?.name  || "N/A";
  const customerPhone = ud?.ud4 || cd?.phone || "N/A";
  const amount        = payload?.cart_amount ? `AED ${payload.cart_amount}.00` : "N/A";
  const tranRef       = payload?.tran_ref || "N/A";
  const statusText    = isSuccess ? "✅ PAYMENT SUCCESSFUL" : `❌ PAYMENT FAILED — ${pr?.response_message || "Unknown"}`;
  const statusColor   = isSuccess ? "#1b7e34" : "#c0392b";
  const statusBg      = isSuccess ? "#e8f5e9" : "#fdecea";
  const now           = new Date().toLocaleString("en-AE", { timeZone: "Asia/Dubai" });

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>New UAE Visa Application</title> 
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:30px 0;">
    <tr>
      <td align="center">
        <table width="620" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.10);">

          <!-- HEADER -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a0000 0%,#7b0000 60%,#c0392b 100%);padding:32px 40px;text-align:center;">
              <div style="font-size:36px;margin-bottom:8px;">🇦🇪</div>
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:0.5px;">City One Tourism &amp; Travel</h1>
              <p style="margin:6px 0 0;color:rgba(255,255,255,0.75);font-size:13px;">UAE Visa Application — New Submission</p>
            </td>
          </tr>

          <!-- STATUS BADGE -->
          <tr>
            <td style="padding:24px 40px 0;">
              <div style="background:${statusBg};border:1.5px solid ${statusColor};border-radius:8px;padding:14px 20px;text-align:center;">
                <span style="font-size:16px;font-weight:700;color:${statusColor};">${statusText}</span>
              </div>
            </td>
          </tr>

          <!-- APPLICATION DETAILS -->
          <tr>
            <td style="padding:24px 40px 0;">
              <h2 style="margin:0 0 14px;font-size:15px;font-weight:700;color:#1a1a1a;border-bottom:2px solid #f0f0f0;padding-bottom:8px;">📋 Application Details</h2>
              <table width="100%" cellpadding="0" cellspacing="0">
                ${row("Reference No.", appId, "#d32f2f")}
                ${row("Transaction Ref", tranRef)}
                ${row("Visa Type", visaType)}
                ${row("Amount Paid", amount, "#1b7e34")}
                ${row("Payment Time", now)}
              </table>
            </td>
          </tr>

          <!-- CUSTOMER DETAILS -->
          <tr>
            <td style="padding:24px 40px 0;">
              <h2 style="margin:0 0 14px;font-size:15px;font-weight:700;color:#1a1a1a;border-bottom:2px solid #f0f0f0;padding-bottom:8px;">👤 Customer Details</h2>
              <table width="100%" cellpadding="0" cellspacing="0">
                ${row("Full Name", customerName)}
                ${row("Email", customerEmail)}
                ${row("Phone", customerPhone)}
              </table>
            </td>
          </tr>

          <!-- ACTION BUTTONS -->
          <tr>
            <td style="padding:28px 40px 0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-bottom:10px;">
                    <a href="https://console.firebase.google.com/project/cityonetours-uaevisa/firestore"
                       style="display:inline-block;background:#1565c0;color:#ffffff;text-decoration:none;padding:12px 28px;border-radius:7px;font-size:13px;font-weight:700;">
                      📂 View Documents in Firebase
                    </a>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <a href="https://wa.me/${customerPhone?.replace(/\D/g,'')}"
                       style="display:inline-block;background:#25d366;color:#ffffff;text-decoration:none;padding:12px 28px;border-radius:7px;font-size:13px;font-weight:700;">
                      💬 WhatsApp Customer
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- REMINDER -->
          <tr>
            <td style="padding:24px 40px 0;">
              <div style="background:#fff8e1;border:1px solid #ffe082;border-radius:8px;padding:14px 18px;">
                <p style="margin:0;font-size:12px;color:#5d4037;line-height:1.7;">
                  <strong>⚡ Action Required:</strong> Please log in to Firebase, verify the uploaded documents, 
                  and begin processing the visa application for <strong>${customerName}</strong>. 
                  Target processing time: <strong>24–48 business hours</strong>.
                </p>
              </div>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="padding:28px 40px 32px;text-align:center;border-top:1px solid #f0f0f0;margin-top:24px;">
              <p style="margin:0;font-size:11px;color:#aaa;line-height:1.8;">
                City One Tourism &amp; Travel L.L.C. &nbsp;|&nbsp; +971 4 392 2959 &nbsp;|&nbsp; visa@cityonetours.ae<br/>
                This is an automated notification. Do not reply to this email.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = `
NEW UAE VISA APPLICATION
========================
Status    : ${isSuccess ? "PAYMENT SUCCESSFUL" : "PAYMENT FAILED"}
Ref No.   : ${appId}
Tran Ref  : ${tranRef}
Visa Type : ${visaType}
Amount    : ${amount}
Time      : ${now}

CUSTOMER
--------
Name  : ${customerName}
Email : ${customerEmail}
Phone : ${customerPhone}

Firebase: https://console.firebase.google.com/project/cityonetours-uaevisa/firestore
  `.trim();

  const subject = isSuccess
    ? `✅ New Visa Application — ${customerName} | Ref: ${appId} | ${amount}`
    : `❌ Failed Payment — ${customerName} | Ref: ${appId}`;

  try {
    const info = await transporter.sendMail({
      from:    `"City One Visa System" <${GMAIL_USER}>`,
      to:      ADMIN_EMAIL,
      replyTo: customerEmail !== "N/A" ? customerEmail : undefined,
      subject,
      text,
      html,
    });
    console.log(`[Email] Admin notification sent → ${ADMIN_EMAIL} | MessageId: ${info.messageId}`);
  } catch (err) {
    console.error("[Email] Failed to send admin notification:", err.message);
  }
}

// ── EMAIL: CUSTOMER CONFIRMATION ──────────────────────────────────────────────
async function sendCustomerEmail(payload) {
  const cd = payload?.customer_details || {};
  const ud = payload?.user_defined || {};

  const appId         = payload?.cart_id || ud?.ud1 || "N/A";
  const visaType      = ud?.ud2 || "N/A";
  const customerEmail = ud?.ud3 || cd?.email;
  const customerName  = ud?.ud5 || cd?.name || "Applicant";
  const amount        = payload?.cart_amount ? `AED ${payload.cart_amount}.00` : "N/A";
  const firstName     = customerName.split(" ")[0];

  if (!customerEmail || customerEmail === "N/A") {
    console.log("[Email] No customer email — skipping customer confirmation");
    return;
  }

  const html = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:30px 0;">
    <tr>
      <td align="center">
        <table width="580" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.10);">

          <!-- HEADER -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a0000 0%,#7b0000 60%,#c0392b 100%);padding:32px 36px;text-align:center;">
              <div style="font-size:40px;margin-bottom:8px;">✅</div>
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">Application Confirmed!</h1>
              <p style="margin:6px 0 0;color:rgba(255,255,255,0.75);font-size:13px;">City One Tourism &amp; Travel — UAE Visa Services</p>
            </td>
          </tr>

          <!-- GREETING -->
          <tr>
            <td style="padding:28px 36px 0;">
              <p style="margin:0;font-size:15px;color:#1a1a1a;line-height:1.7;">
                Dear <strong>${firstName}</strong>,<br/><br/>
                Thank you for applying for your UAE visa through <strong>City One Tourism &amp; Travel</strong>. 
                Your payment has been received and your application is now being reviewed by our visa team.
              </p>
            </td>
          </tr>

          <!-- REF BOX -->
          <tr>
            <td style="padding:20px 36px 0;">
              <div style="background:#fff5f5;border:1.5px solid #ffcdd2;border-radius:8px;padding:18px 22px;text-align:center;">
                <p style="margin:0 0 4px;font-size:11px;color:#888;letter-spacing:1.5px;text-transform:uppercase;">Your Application Reference</p>
                <p style="margin:0;font-size:26px;font-weight:700;color:#d32f2f;letter-spacing:1px;">${appId}</p>
                <p style="margin:4px 0 0;font-size:11px;color:#aaa;">Please keep this for your records</p>
              </div>
            </td>
          </tr>

          <!-- SUMMARY TABLE -->
          <tr>
            <td style="padding:20px 36px 0;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9f9f9;border-radius:8px;overflow:hidden;">
                <tr>
                  <td colspan="2" style="padding:12px 16px;font-size:12px;font-weight:700;color:#888;letter-spacing:1px;text-transform:uppercase;background:#f0f0f0;">
                    Application Summary
                  </td>
                </tr>
                ${summaryRow("Visa Type", visaType)}
                ${summaryRow("Amount Paid", amount)}
                ${summaryRow("Processing Time", "24–48 Business Hours")}
                ${summaryRow("Delivery Method", "Email &amp; WhatsApp")}
              </table>
            </td>
          </tr>

          <!-- WHAT HAPPENS NEXT -->
          <tr>
            <td style="padding:24px 36px 0;">
              <h2 style="margin:0 0 14px;font-size:14px;font-weight:700;color:#1a1a1a;">📌 What Happens Next?</h2>
              ${nextStep("1", "#d32f2f", "Document Review", "Our team will verify all your uploaded documents within a few hours.")}
              ${nextStep("2", "#1565c0", "Submission to UAE Immigration", "Your application is submitted to UAE Immigration authorities for approval.")}
              ${nextStep("3", "#2e7d32", "Visa Delivery", "Once approved, your visa will be delivered to your email and WhatsApp number.")}
            </td>
          </tr>

          <!-- CONTACT -->
          <tr>
            <td style="padding:20px 36px 0;">
              <div style="background:#e3f2fd;border-radius:8px;padding:14px 18px;">
                <p style="margin:0;font-size:12px;color:#1565c0;line-height:1.8;">
                  <strong>📞 Need Help?</strong><br/>
                  Phone: <a href="tel:+97143922959" style="color:#1565c0;">+971 4 392 2959</a> &nbsp;|&nbsp;
                  WhatsApp: <a href="https://wa.me/97143922959" style="color:#1565c0;">+971 4 392 2959</a><br/>
                  Email: <a href="mailto:visa@cityonetours.ae" style="color:#1565c0;">visa@cityonetours.ae</a>
                </p>
              </div>
            </td>
          </tr>

          <!-- DISCLAIMER -->
          <tr>
            <td style="padding:16px 36px 0;">
              <p style="margin:0;font-size:11px;color:#aaa;line-height:1.7;font-style:italic;">
                Visa approval is at the sole discretion of UAE Immigration Officials. 
                City One Tourism &amp; Travel cannot guarantee approval. 
                Application fees are non-refundable once submitted.
              </p>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="padding:24px 36px 28px;text-align:center;border-top:1px solid #f0f0f0;margin-top:20px;">
              <div style="font-size:28px;margin-bottom:8px;">🇦🇪</div>
              <p style="margin:0;font-size:12px;font-weight:700;color:#1a1a1a;">City One Tourism &amp; Travel L.L.C.</p>
              <p style="margin:4px 0 0;font-size:11px;color:#aaa;">Dubai, UAE &nbsp;|&nbsp; visa@cityonetours.ae &nbsp;|&nbsp; +971 4 392 2959</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  try {
    const info = await transporter.sendMail({
      from:    `"City One Tourism - UAE Visa" <${GMAIL_USER}>`,
      to:      customerEmail,
      replyTo: ADMIN_EMAIL,
      subject: `✅ Your UAE Visa Application is Confirmed — Ref: ${appId}`,
      html,
      text: `Dear ${firstName},\n\nYour UAE visa application has been received.\nReference: ${appId}\nVisa Type: ${visaType}\nAmount: ${amount}\n\nOur team will contact you within 24-48 hours.\n\nCity One Tourism & Travel\nvisa@cityonetours.ae | +971 4 392 2959`,
    });
    console.log(`[Email] Customer confirmation sent → ${customerEmail} | MessageId: ${info.messageId}`);
  } catch (err) {
    console.error("[Email] Failed to send customer confirmation:", err.message);
  }
}

// ── HTML EMAIL HELPERS ────────────────────────────────────────────────────────
function row(label, value, color = "#1a1a1a") {
  return `
    <tr>
      <td style="padding:7px 0;font-size:12px;color:#888;width:140px;vertical-align:top;">${label}</td>
      <td style="padding:7px 0;font-size:13px;font-weight:600;color:${color};">${value}</td>
    </tr>`;
}

function summaryRow(label, value) {
  return `
    <tr style="border-bottom:1px solid #e8e8e8;">
      <td style="padding:9px 16px;font-size:12px;color:#888;width:160px;">${label}</td>
      <td style="padding:9px 16px;font-size:13px;font-weight:600;color:#1a1a1a;">${value}</td>
    </tr>`;
}

function nextStep(num, color, title, desc) {
  return `
    <div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:12px;">
      <div style="min-width:28px;height:28px;background:${color};border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;font-weight:700;flex-shrink:0;text-align:center;line-height:28px;">${num}</div>
      <div>
        <p style="margin:0;font-size:13px;font-weight:700;color:#1a1a1a;">${title}</p>
        <p style="margin:2px 0 0;font-size:12px;color:#666;line-height:1.5;">${desc}</p>
      </div>
    </div>`;
}

// ── WHATSAPP HELPERS ──────────────────────────────────────────────────────────
async function sendWhatsAppCallMeBot(message) {
  if (!WHATSAPP_ENABLED) return;
  try {
    const url = `https://api.callmebot.com/whatsapp.php?phone=${CALLMEBOT_PHONE}&text=${encodeURIComponent(message)}&apikey=${CALLMEBOT_APIKEY}`;
    const res = await fetch(url);
    console.log("[WhatsApp CallMeBot]", (await res.text()).substring(0, 200));
  } catch (err) {
    console.error("[WhatsApp CallMeBot] Error:", err.message);
  }
}

async function sendWhatsAppUltraMsg(toPhone, message) {
  if (!ULTRAMSG_ENABLED) return;
  try {
    const res = await fetch(`https://api.ultramsg.com/${ULTRAMSG_INSTANCE}/messages/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: ULTRAMSG_TOKEN, to: toPhone.startsWith("+") ? toPhone : `+${toPhone}`, body: message })
    });
    console.log("[WhatsApp UltraMsg]", await res.json());
  } catch (err) {
    console.error("[WhatsApp UltraMsg] Error:", err.message);
  }
}

async function notifyAdminWhatsApp(payload) {
  const pr = payload?.payment_result || {};
  const cd = payload?.customer_details || {};
  const ud = payload?.user_defined || {};
  const appId         = payload?.cart_id || ud?.ud1 || "N/A";
  const visaType      = ud?.ud2 || "N/A";
  const customerEmail = ud?.ud3 || cd?.email || "N/A";
  const customerName  = ud?.ud5 || cd?.name  || "N/A";
  const customerPhone = ud?.ud4 || cd?.phone || "N/A";
  const amount        = payload?.cart_amount ? `AED ${payload.cart_amount}` : "N/A";
  const tranRef       = payload?.tran_ref || "N/A";
  const now           = new Date().toLocaleString("en-AE", { timeZone: "Asia/Dubai" });

  const message =
`🇦🇪 *NEW UAE VISA APPLICATION* 🇦🇪

✅ *Payment Successful*
📋 *Ref No:* ${appId}
🔖 *Tran Ref:* ${tranRef}
🛂 *Visa Type:* ${visaType}
💰 *Amount:* ${amount}

👤 *Customer:*
• Name:  ${customerName}
• Email: ${customerEmail}
• Phone: ${customerPhone}

🕐 *Time:* ${now}

📂 Firebase Console:
https://console.firebase.google.com/project/cityonetours-uaevisa/firestore

Please process this application promptly!`;

  if (ULTRAMSG_ENABLED) {
    await sendWhatsAppUltraMsg(`+${CALLMEBOT_PHONE || ""}`, message);
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
    profileLoaded:    !!PAYTABS_PROFILE_ID,
    serverKeyLoaded:  !!PAYTABS_SERVER_KEY,
    baseUrl:          PAYTABS_BASE_URL,
    adminEmail:       ADMIN_EMAIL,
    gmailUser:        GMAIL_USER ? GMAIL_USER.replace(/(.{3}).*(@.*)/, "$1***$2") : "not set",
    emailEnabled:     !!(GMAIL_USER && GMAIL_APP_PASS),
    whatsappCallMeBot: WHATSAPP_ENABLED,
    whatsappUltraMsg:  ULTRAMSG_ENABLED,
    returnUrlValid:   isValidUrl(SITE_RETURN_URL),
    callbackUrlValid: isValidUrl(SITE_CALLBACK_URL),
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
    if (!isValidUrl(SITE_RETURN_URL))   return res.status(500).json({ error: "SITE_RETURN_URL is invalid" });
    if (!isValidUrl(SITE_CALLBACK_URL)) return res.status(500).json({ error: "SITE_CALLBACK_URL is invalid" });

    const finalCartId = applicationId || cartId;
    const returnUrl   = new URL(SITE_RETURN_URL);
    returnUrl.searchParams.set("appId", finalCartId);

    const payload = {
      profile_id:       PAYTABS_PROFILE_ID,
      tran_type:        "sale",
      tran_class:       "ecom",
      cart_id:          String(finalCartId),
      cart_description: `UAE Visa Application - ${visaType || "Visa Service"}`,
      cart_currency:    "AED",
      cart_amount:      numericAmount,
      return:           returnUrl.toString(),
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
        ud2: visaType      || "",
        ud3: customerEmail || "",
        ud4: customerPhone || "",
        ud5: customerName  || "",
      }
    };

    console.log("----- PayTabs Create Payment -----");
    console.log("Return URL:", returnUrl.toString());
    console.log("Amount:", numericAmount, "AED | Cart ID:", finalCartId);

    const response = await fetch(`${PAYTABS_BASE_URL}/payment/request`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": PAYTABS_SERVER_KEY },
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
  console.log("JSON res data---",  data.redirect_url, '---',data.tran_ref,'---',finalCartId);
  return res.json({ success: true, redirect_url: data.redirect_url, tran_ref: data.tran_ref || null, cart_id: finalCartId });

  } catch (error) {
    console.error("create-payment error:", error);
    return res.status(500).json({ error: error.message || "Internal server error" });
  }
});

// ── PAYTABS CALLBACK (server-to-server POST) ──────────────────────────────────
app.post("/paytabs-callback", async (req, res) => {
  try {
    const payload        = req.body;
    const responseStatus = payload?.payment_result?.response_status || "";
    const isSuccess      = responseStatus === "A";
    const cartId         = payload?.cart_id || payload?.user_defined?.ud1 || "";
    const tranRef        = payload?.tran_ref || "";

    console.log("----- PayTabs Callback -----");
    console.log("Status:", isSuccess ? "PAID ✅" : "FAILED ❌", "| Cart:", cartId, "| TranRef:", tranRef);
    console.log(JSON.stringify(payload, null, 2));

    // ── Send emails (always on success; admin-only on failure) ────────────────
    if (isSuccess) {
      // Fire both in parallel — faster, neither blocks the other
      await Promise.allSettled([
        sendAdminEmail(payload, true),
        sendCustomerEmail(payload),
        notifyAdminWhatsApp(payload),
      ]);
    } else {
      // On failure, only notify admin
      await sendAdminEmail(payload, false);
    }

    return res.status(200).json({ received: true });

  } catch (error) {
    console.error("paytabs-callback error:", error);
    return res.status(500).json({ error: error.message });
  }
});
// ── PAYMENT RETURN (browser redirect after payment) ───────────────────────────
app.get("/payment-return", (req, res) => {
  try {
    const { appId, tran_ref, respStatus } = req.query;
    const isSuccess = respStatus === "A" || req.query.payment === "success";

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
  console.log(`\n🚀 City One PayTabs Backend — Port ${PORT}`);
  console.log(`   Admin email:   ${ADMIN_EMAIL}`);
  console.log(`   Gmail sender:  ${GMAIL_USER}`);
  console.log(`   Email:         ✅ enabled`);
  console.log(`   WhatsApp (CallMeBot): ${WHATSAPP_ENABLED ? "✅ enabled" : "⚠️  not configured"}`);
  console.log(`   WhatsApp (UltraMsg):  ${ULTRAMSG_ENABLED ? "✅ enabled" : "⚠️  not configured"}\n`);
}); 