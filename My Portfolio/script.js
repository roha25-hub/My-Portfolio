// small interactive functions for the portfolio

// init AOS (already called inline, but safe to init again)
if (window.AOS) AOS.init({ duration: 900, once: true });

// smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(!href || href.length === 1) return;
    const target = document.querySelector(href);
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// copy contact info to clipboard
function copyContacts(){
  const text = `Rohan Rahangdale\nPhone: 8856857091\nEmail: rahangdalerohan25@gmail.com\nLinkedIn: https://www.linkedin.com/in/Rohan-Rahangdale`;
  navigator.clipboard?.writeText(text).then(()=>{
    alert('Contact info copied to clipboard ✅');
  }).catch(()=>{
    alert('Copy failed — open the contact card and copy manually.');
  });
}

// simple "send" action — opens mail client with prefilled content
function sendMail(){
  const name = document.getElementById('cf-name').value || 'Friend';
  const email = document.getElementById('cf-email').value || 'no-reply';
  const msg = document.getElementById('cf-msg').value || '';
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
  // open mail client
  window.location.href = `mailto:rahangdalerohan25@gmail.com?subject=${subject}&body=${body}`;
  return false; // prevent actual form submit
}
