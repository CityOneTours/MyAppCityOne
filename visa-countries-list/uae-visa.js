function switchVisa(t,btn){
  document.querySelectorAll('.tbtn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tc').style.display=t==='tourist'?'grid':'none';
  document.getElementById('trc').style.display=t==='transit'?'grid':'none';
}
function selChip(el,gid){
  document.querySelectorAll('#'+gid+' .chip').forEach(c=>c.classList.remove('sel'));
  el.classList.add('sel');
}
function applyNow(label){
  document.getElementById('enquiry').scrollIntoView({behavior:'smooth'});
  const rs=document.querySelectorAll('input[name="dur"]');
  rs.forEach(r=>{
    if(label.includes('30')&&label.includes('Single')&&r.value==='30 Days Single')r.checked=true;
    if(label.includes('30')&&label.includes('Multiple')&&r.value==='30 Days Multiple')r.checked=true;
    if(label.includes('60')&&label.includes('Single')&&r.value==='60 Days Single')r.checked=true;
    if(label.includes('60')&&label.includes('Multiple')&&r.value==='60 Days Multiple')r.checked=true;
    if(label.includes('90')&&label.includes('Single')&&r.value==='90 Days Single')r.checked=true;
    if(label.includes('90')&&label.includes('Multiple')&&r.value==='90 Days Multiple')r.checked=true;
  });
  if(label.includes('Transit')){const cs=document.querySelectorAll('#vc .chip');cs.forEach((c,i)=>c.classList.toggle('sel',i===1));}
}
function toggleFaq(btn){
  const it=btn.parentElement,isO=it.classList.contains('open');
  document.querySelectorAll('.faqitem').forEach(i=>i.classList.remove('open'));
  if(!isO)it.classList.add('open');
}
function handleSubmit(e){
  e.preventDefault();
  const ref='DV'+Date.now().toString().slice(-6);
  document.getElementById('smref').innerHTML='📋 Reference ID: <strong style="color:var(--gold)">#'+ref+'</strong><br>⏱ Expected response: <strong>Within 30 minutes</strong>';
  document.getElementById('sov').classList.add('show');
  const t=document.getElementById('toast');t.classList.add('show');setTimeout(()=>t.classList.remove('show'),4500);
}
function closeSuccess(){
  document.getElementById('sov').classList.remove('show');
  document.getElementById('eform').reset();
  document.querySelectorAll('#vc .chip').forEach((c,i)=>c.classList.toggle('sel',i===0));
  document.querySelectorAll('#sc .chip').forEach((c,i)=>c.classList.toggle('sel',i===1));
  document.getElementById('d60s').checked=true;
}
window.addEventListener('scroll',()=>document.getElementById('btt').classList.toggle('show',window.scrollY>400));
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.style.animationPlayState='running';});},{threshold:.1});
document.querySelectorAll('.anim').forEach(el=>{el.style.animationPlayState='paused';obs.observe(el);});


function goToVisaSection(type) {

    // Check if already on uae-visa.html
    if (window.location.pathname.includes("uae-visa.html")) {

        // Scroll smoothly
        const section = document.getElementById("visa-section");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }

        // Select visa type
        const select = document.getElementById("visaTypeSelect");
        if (select) {
            select.value = type;
        }

    } else {
        // Redirect if on different page
        window.location.href = "uae-visa.html?type=" + type + "#visa-section";
    }
}



document.addEventListener("DOMContentLoaded", function () {

    const params = new URLSearchParams(window.location.search);
    const visaType = params.get("type");

    if (visaType) {
        const select = document.getElementById("visaTypeSelect");
        if (select) {
            select.value = visaType;
        }
    }

});





/* ─────────────────────────────────────────────────────────
   ⚙️  CONFIGURATION — UPDATE THESE VALUES
   ───────────────────────────────────────────────────────── */

// Your PayTabs backend URL (server.js / Netlify function / PHP file)
// After deploying server.js or paytabs-php.php, paste the URL here:
const BACKEND_URL = 'http://localhost:3000/create-payment';

// PayTabs Profile ID (safe to keep in frontend)
const PAYTABS_PROFILE_ID = '48159';

// Your site base URL for payment return/callback pages
const SITE_URL = 'https://cityonetours.com';

/* ─────────────────────────────────────────────────────────
   APPLICATION STATE
   ───────────────────────────────────────────────────────── */
const APP = {
  applicant: {},
  docs: {},       // { key: { file, name, url } }
  appId: null,    // Firestore document ID
  amount: 0,
  visaLabel: '',
  payMethod: 'card'
};

const REQUIRED_DOCS = ['passport','photo','emiratesid','residencevisa','bankstmt'];

const DOC_LABELS = {
  passport:     'Passport Copy',
  photo:        'Passport Photo',
  emiratesid:   'Emirates ID Copy',
  residencevisa:'UAE Residence Visa',
  bankstmt:     'Bank Statement',
  noc:          'Employer NOC'
};

const VISA_PRICES = {
  '30 Days Single':   400,
  '30 Days Multiple': 975,
  '60 Days Single':   975,
  '60 Days Multiple': 1300
};

/* ─────────────────────────────────────────────────────────
   FIREBASE READY CHECK
   ───────────────────────────────────────────────────────── */
let fbOK = false;

function checkFB(){
  if(window.__fbReady && window.__fb){
    fbOK = true;
  }
}

document.addEventListener('fbReady', ()=>{
  fbOK = true;
  document.getElementById('setupBanner').classList.remove('show');
});

// Check on load (firebase might load before DOMContentLoaded)
window.addEventListener('load', checkFB);

/* ─────────────────────────────────────────────────────────
   STEPPER NAVIGATION
   ───────────────────────────────────────────────────────── */
function goPage(n){
  for(let i=1;i<=5;i++){
    document.getElementById('page'+i).className = 'page' + (i===n?' show':'');
    const s = document.getElementById('s'+i);
    s.className = 'step' + (i<n?' done':i===n?' active':'');
    if(i<n) s.querySelector('.step-dot').textContent = '✓';
    else if(i===n) s.querySelector('.step-dot').textContent = i;
  }
  window.scrollTo({top:0,behavior:'smooth'});
}

/* ─────────────────────────────────────────────────────────
   PAGE 1 — VALIDATE & SAVE
   ───────────────────────────────────────────────────────── */
const P1_FIELDS = [
  ['p1_fname','First Name'],['p1_lname','Last Name'],
  ['p1_email','Email'],['p1_phone','Mobile Number'],
  ['p1_nat','Nationality'],['p1_pp','Passport Number'],
  ['p1_ppexp','Passport Expiry'],['p1_dob','Date of Birth'],
  ['p1_visa','Visa Type'],['p1_travel','Travel Date']
];

function step1Next(){
  const errEl = document.getElementById('p1_err');
  errEl.className='alert alert-err';

  for(const [id,lbl] of P1_FIELDS){
    if(!document.getElementById(id).value.trim()){
      showErr(errEl, '⚠️ Please fill in: '+lbl); return;
    }
  }

  const visaRaw = document.getElementById('p1_visa').value; // "60 Days Single|975"
  const [visaLabel, price] = visaRaw.split('|');

  APP.applicant = {
    firstName:    document.getElementById('p1_fname').value.trim(),
    lastName:     document.getElementById('p1_lname').value.trim(),
    email:        document.getElementById('p1_email').value.trim(),
    phone:        document.getElementById('p1_phone').value.trim(),
    nationality:  document.getElementById('p1_nat').value.trim(),
    passportNo:   document.getElementById('p1_pp').value.trim(),
    passportExpiry: document.getElementById('p1_ppexp').value,
    dob:          document.getElementById('p1_dob').value,
    visaType:     visaLabel,
    travelDate:   document.getElementById('p1_travel').value
  };
  APP.amount    = parseInt(price);
  APP.visaLabel = visaLabel;

  goPage(2);
}

/* ─────────────────────────────────────────────────────────
   PAGE 2 — FILE PICKER
   ───────────────────────────────────────────────────────── */
function triggerFile(id){
  document.getElementById(id).click();
}

function pickDoc(input, key){
  const file = input.files[0];
  if(!file) return;

  if(file.size > 5*1024*1024){
    alert('File too large! Maximum size is 5 MB.');
    input.value=''; return;
  }
  const allowed = ['image/jpeg','image/png','image/jpg','application/pdf'];
  if(!allowed.includes(file.type)){
    alert('Invalid file type. Please upload JPG, PNG, or PDF.');
    input.value=''; return;
  }

  APP.docs[key] = { file, name: file.name, url: null };
  document.getElementById('box_'+key).classList.add('ready');
  document.getElementById('ok_'+key).textContent = '✓ ' + (file.name.length>22 ? file.name.substring(0,22)+'…' : file.name);
  document.getElementById('ok_'+key).style.display = 'block';
}

/* ─────────────────────────────────────────────────────────
   PAGE 2 — UPLOAD TO FIREBASE
   ───────────────────────────────────────────────────────── */
async function step2Upload(){
  const errEl  = document.getElementById('p2_err');
  const warnEl = document.getElementById('p2_fbwarn');
  errEl.className  = 'alert alert-err';
  warnEl.className = 'alert alert-warn';

  // Check required docs
  for(const key of REQUIRED_DOCS){
    if(!APP.docs[key]){
      showErr(errEl,'⚠️ Please attach: '+DOC_LABELS[key]); return;
    }
  }

  const btn = document.getElementById('p2_btn');
  btn.disabled = true;
  btn.innerHTML = '<span class="spin"></span> Uploading Documents…';

  const prog = document.getElementById('uploadProgress');
  prog.style.display = 'block';

  try {
    /* ─────────────────────────────────────────────────────
       STEP 1 — Create Firestore application record
       (Firestore is FREE on Spark plan — no upgrade needed)
       ───────────────────────────────────────────────────── */
    let appId = 'COT-' + Date.now();
    if(fbOK && window.__fb){
      const { db, collection, addDoc } = window.__fb;
      const docRef = await addDoc(collection(db,'visa_applications'),{
        ...APP.applicant,
        amount:    APP.amount,
        status:    'documents_pending',
        createdAt: new Date().toISOString(),
        documents: {}
      });
      appId = docRef.id;
    }
    APP.appId = appId;
    console.log('✅ Application record created:', APP.appId);

    /* ─────────────────────────────────────────────────────
       STEP 2 — Upload files to Cloudinary (FREE, no card)
       ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
       HOW TO SET UP CLOUDINARY (5 minutes, 100% free):
         1. Go to https://cloudinary.com → Sign Up Free
         2. No credit card required
         3. After signup, go to Dashboard
         4. Copy your "Cloud Name" (e.g. "dxyz123abc")
         5. Go to Settings → Upload → scroll to
            "Upload presets" → click "Add upload preset"
         6. Set:  Preset name = "visa_docs_unsigned"
                  Signing mode = Unsigned
         7. Click Save
         8. Replace CLOUDINARY_CLOUD_NAME and CLOUDINARY_UPLOAD_PRESET below
       ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    */
    const CLOUDINARY_CLOUD_NAME   = 'deqfjemsw';       // ← Replace this
    const CLOUDINARY_UPLOAD_PRESET = 'visa-docs-unsigned';    // ← Replace this

    const docKeys  = Object.keys(APP.docs);
    const fileList = document.getElementById('upFileList');
    fileList.innerHTML = '';

    // Build file status rows
    docKeys.forEach(key=>{
      const row = document.createElement('div');
      row.className = 'up-file-row';
      row.innerHTML = `<span class="up-file-name">${DOC_LABELS[key]||key}: ${APP.docs[key].name}</span>
                       <span class="up-file-status wait" id="fstat_${key}">Waiting…</span>`;
      fileList.appendChild(row);
    });

    const urlMap = {};
    let totalDone = 0;

    for(const key of docKeys){
      const statEl = document.getElementById('fstat_'+key);
      statEl.textContent = 'Uploading…';
      statEl.className   = 'up-file-status uploading';

      const formData = new FormData();
      formData.append('file',          APP.docs[key].file);
      formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
      formData.append('folder',        `visa_applications/${APP.appId}`);
      formData.append('public_id',     `${key}_${Date.now()}`);

      // Upload to Cloudinary with XHR for real progress
      const url = await new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open('POST', `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`);

        xhr.upload.onprogress = (e)=>{
          if(e.lengthComputable){
            const pct = (totalDone + e.loaded/e.total) / docKeys.length * 100;
            document.getElementById('upFill').style.width = Math.round(pct)+'%';
            document.getElementById('upPct').textContent  = Math.round(pct)+'%';
          }
        };

        xhr.onload = ()=>{
          if(xhr.status === 200){
            const res = JSON.parse(xhr.responseText);
            resolve(res.secure_url);
          } else {
            reject(new Error('Cloudinary upload failed ('+xhr.status+'). Check your Cloud Name & Upload Preset.'));
          }
        };
        xhr.onerror = ()=> reject(new Error('Network error during upload.'));
        xhr.send(formData);
      });

      APP.docs[key].url = url;
      urlMap[key] = { url, name: APP.docs[key].name };
      totalDone++;
      statEl.textContent = '✓ Uploaded';
      statEl.className   = 'up-file-status done';
      console.log('✅ Uploaded', key, '→', url);
    }

    /* ─────────────────────────────────────────────────────
       STEP 3 — Save Cloudinary URLs to Firestore
       ───────────────────────────────────────────────────── */
    if(fbOK && window.__fb && APP.appId && !APP.appId.startsWith('COT-')){
      const { db, doc, updateDoc } = window.__fb;
      await updateDoc(doc(db,'visa_applications',APP.appId),{
        documents: urlMap,
        status:    'documents_uploaded'
      });
      console.log('✅ URLs saved to Firestore');
    }

    buildReview();
    goPage(3);

  } catch(err){
    console.error('Upload error:', err);
    showErr(errEl, '❌ '+err.message);
    btn.disabled = false;
    btn.innerHTML = 'Save Documents & Continue →';
    prog.style.display = 'none';
  }
}

/* ─────────────────────────────────────────────────────────
   PAGE 3 — BUILD REVIEW
   ───────────────────────────────────────────────────────── */
function buildReview(){
  const a = APP.applicant;
  document.getElementById('rv_name').textContent   = a.firstName+' '+a.lastName;
  document.getElementById('rv_email').textContent  = a.email;
  document.getElementById('rv_phone').textContent  = a.phone;
  document.getElementById('rv_nat').textContent    = a.nationality;
  document.getElementById('rv_pp').textContent     = a.passportNo;
  document.getElementById('rv_ppexp').textContent  = a.passportExpiry;
  document.getElementById('rv_dob').textContent    = a.dob;
  document.getElementById('rv_visa').textContent   = a.visaType + ' — AED ' + APP.amount;
  document.getElementById('rv_travel').textContent = a.travelDate;

  const ul = document.getElementById('rv_docs');
  ul.innerHTML = '';
  const allKeys = [...REQUIRED_DOCS,'noc'];
  allKeys.forEach(key=>{
    const has = !!APP.docs[key];
    const li  = document.createElement('li');
    li.innerHTML = `<span class="ck ${has?'ok':'no'}">${has?'✓':'✗'}</span>
                    <span>${DOC_LABELS[key]||key}
                      ${has?'<span style="color:var(--muted);font-size:12px;margin-left:6px;">'+APP.docs[key].name.substring(0,28)+'</span>':'<span style="color:#e53e3e;font-size:12px;"> — Not uploaded</span>'}
                    </span>`;
    ul.appendChild(li);
  });
}

function step3Next(){
  document.getElementById('pay_amount').textContent = APP.amount.toLocaleString()+'.00';
  document.getElementById('pay_type').textContent   = APP.visaLabel+' Entry Visa';
  goPage(4);
}

/* ─────────────────────────────────────────────────────────
   PAYMENT METHOD SELECTOR
   ───────────────────────────────────────────────────────── */
function selPay(el, method){
  document.querySelectorAll('.pay-opt').forEach(e=>e.classList.remove('sel'));
  el.classList.add('sel');
  APP.payMethod = method;
}

/* ─────────────────────────────────────────────────────────
   PAGE 4 — PAYTABS PAYMENT
   ───────────────────────────────────────────────────────── */
async function doPayment(){
  const errEl = document.getElementById('p4_err');
  const btn   = document.getElementById('payBtn');
  errEl.className = 'alert alert-err';

  btn.disabled = true;
  btn.innerHTML = '<span class="spin"></span> Connecting to PayTabs…';

  try {
    /* Update Firestore status */
    if(fbOK && APP.appId){
      const { db, doc, updateDoc } = window.__fb;
      await updateDoc(doc(db,'visa_applications',APP.appId),{
        status:        'payment_initiated',
        paymentMethod: APP.payMethod,
        initiatedAt:   new Date().toISOString()
      });
    }

    /* ════════════════════════════════════════════════════════
       PAYTABS API CALL
       ════════════════════════════════════════════════════════

       Call your backend which calls PayTabs and returns a redirect_url.

       Your backend endpoint (see server.js or paytabs-php.php):
         POST BACKEND_URL
         Body: { cartId, amount, visaType, customerName, customerEmail, customerPhone, applicationId }

       The backend returns: { success: true, redirect_url: "https://..." }
       Then we redirect the user to that URL.

       ════════════════════════════════════════════════════════ */

    // Check if backend is configured
    if(BACKEND_URL === 'https://YOUR-BACKEND.com/create-payment'){
      // ⚠️ Backend not configured yet — show instructions
      showErr(errEl,`⚠️ PayTabs backend is not configured yet.\n\nPlease:\n1. Deploy server.js or paytabs-php.php to your server\n2. Update the BACKEND_URL variable in this file`);
      btn.disabled = false;
      btn.innerHTML = 'Pay Securely via PayTabs 🔐';
      return;
    }

    const res = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        cartId:        APP.appId || ('COT-'+Date.now()),
        amount:        APP.amount,
        visaType:      APP.visaLabel,
        customerName:  APP.applicant.firstName+' '+APP.applicant.lastName,
        customerEmail: APP.applicant.email,
        customerPhone: APP.applicant.phone,
        applicationId: APP.appId
      })
    });

    const data = await res.json();

    if(data.redirect_url){
      // ✅ Redirect to PayTabs hosted payment page
      window.location.href = data.redirect_url;
    } else {
      throw new Error(data.error || 'PayTabs did not return a redirect URL');
    }

  } catch(err){
    console.error('Payment error:', err);
    showErr(errEl,'❌ Payment error: '+err.message);
    btn.disabled = false;
    btn.innerHTML = 'Pay Securely via PayTabs 🔐';
  }
}

/* ─────────────────────────────────────────────────────────
   PAYMENT RETURN HANDLER
   (PayTabs redirects back to this page with ?payment=success or ?payment=fail)
   ───────────────────────────────────────────────────────── */
async function checkPaymentReturn(){
  const params = new URLSearchParams(window.location.search);
  const status = params.get('payment');
  const appId  = params.get('appId') || params.get('cart_id');

  if(status === 'success'){
    if(fbOK && appId){
      const { db, doc, updateDoc } = window.__fb;
      await updateDoc(doc(db,'visa_applications',appId),{
        status: 'paid',
        paidAt: new Date().toISOString(),
        tranRef: params.get('tran_ref') || ''
      }).catch(()=>{});
    }

    document.getElementById('suc_ref').textContent   = appId || ('COT-'+Date.now());
    document.getElementById('suc_email').textContent = params.get('email') || APP.applicant.email || '—';
    document.getElementById('suc_phone').textContent = APP.applicant.phone || '—';
    goPage(5);

  } else if(status === 'fail'){
    goPage(4);
    const errEl = document.getElementById('p4_err');
    showErr(errEl, '❌ Payment was declined or cancelled. Please try again.');
  }
}

/* ─────────────────────────────────────────────────────────
   HELPERS
   ───────────────────────────────────────────────────────── */
function showErr(el, msg){
  el.textContent = msg;
  el.className = 'alert alert-err show';
}
function showAlert(el, msg){
  el.textContent = msg;
  el.className   = el.className.replace('alert-err','alert-warn') + ' show';
}

/* ─────────────────────────────────────────────────────────
   ENTRY — run on page load
   ───────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', ()=>{
  checkPaymentReturn();

  // Pre-select visa type if coming from visa cards (e.g. ?type=60+Days+Single)
  const params  = new URLSearchParams(window.location.search);
  const visaParam = params.get('type');
  if(visaParam){
    const sel = document.getElementById('p1_visa');
    for(const opt of sel.options){
      if(opt.value.startsWith(visaParam)){ sel.value = opt.value; break; }
    }
  }
});