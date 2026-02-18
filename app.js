const $ = (sel) => document.querySelector(sel);

function toast(msg){
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(window.__t);
  window.__t = setTimeout(()=> el.classList.remove("show"), 1400);
}

function copyText(text){
  navigator.clipboard.writeText(text).then(()=>toast("คัดลอกแล้ว ✅")).catch(()=>toast("คัดลอกไม่สำเร็จ"));
}

window.addEventListener("DOMContentLoaded", ()=>{
  const btn = $("#copyDriveLink");
  if(btn){
    btn.addEventListener("click", ()=> copyText(btn.dataset.url));
  }
});
