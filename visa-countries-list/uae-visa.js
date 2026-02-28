
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