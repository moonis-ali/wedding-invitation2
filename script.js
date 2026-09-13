const shell=document.getElementById('shell'),cover=document.getElementById('cover'),seal=document.getElementById('sealBtn'),invite=document.getElementById('invitation');
const audio=document.getElementById('music'),musicBtn=document.getElementById('musicBtn');

// Guard against mobile browsers auto-scrolling the page down while the
// cover is still showing (e.g. when a late-loading image shifts layout).
// As long as the invitation hasn't been opened yet, snap straight back
// to the top of the envelope screen.
function pinToCover(){
  if(!shell.classList.contains('open')){
    window.scrollTo(0,0);
  }
}
window.addEventListener('load',pinToCover);
window.addEventListener('scroll',pinToCover,{passive:true});
document.addEventListener('DOMContentLoaded',pinToCover);
pinToCover();

seal.addEventListener('click',()=>{
  if(shell.classList.contains('open'))return;
  cover.classList.add('open');

  // Start the music the moment the seal is tapped — this click is a
  // genuine user gesture, so browsers will allow audio to start here.
  audio.volume=0.85;
  audio.play().then(()=>{
    musicBtn.textContent='❚❚';
    musicBtn.classList.add('playing');
  }).catch(()=>{
    // Autoplay was blocked (rare) — the ♫ button still lets guests start it manually.
  });

  setTimeout(()=>{
    shell.classList.add('open');
    invite.setAttribute('aria-hidden','false');
    invite.scrollTop=0;
    observe();
  },1050);
});

musicBtn.addEventListener('click',async()=>{
  if(audio.paused){
    try{
      await audio.play();
      musicBtn.textContent='❚❚';
      musicBtn.classList.add('playing');
    }catch(e){
      alert('Add assets/music.mp3 to enable music.');
    }
  }else{
    audio.pause();
    musicBtn.textContent='♫';
    musicBtn.classList.remove('playing');
  }
});

const menuBtn=document.getElementById('menuBtn'),menu=document.getElementById('menu');
menuBtn.addEventListener('click',()=>menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));

const target=new Date('2026-12-07T00:00:00+05:30').getTime();
function tick(){
  let d=Math.max(0,target-Date.now());
  const vals=[Math.floor(d/86400000),Math.floor(d%86400000/3600000),Math.floor(d%3600000/60000),Math.floor(d%60000/1000)];
  ['days','hours','mins','secs'].forEach((id,i)=>{
    const el=document.getElementById(id);
    const next=String(vals[i]).padStart(2,'0');
    if(el.textContent!==next){
      el.textContent=next;
      el.classList.remove('tick');
      void el.offsetWidth; // restart the pulse animation
      el.classList.add('tick');
    }
  });
}
tick();
setInterval(tick,1000);

const yes=document.getElementById('yesBtn'),no=document.getElementById('noBtn'),msg=document.getElementById('rsvpMsg');
yes.onclick=()=>msg.textContent="Thank you — we can't wait to celebrate with you! ♥";
no.onclick=()=>msg.textContent="Thank you for letting us know. You will be missed. ♥";

function observe(){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(x=>io.observe(x));
}
observe();
