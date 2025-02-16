const fn = () => {
  gsap.registerPlugin(ScrollTrigger);

  const title_first = document.querySelector(".first");
  let first = Splitting({ target: title_first, by: 'words' });

  gsap.timeline({ scrollTrigger:{ scrub:1 },onComplete:()=>{document.querySelector('#notloaded').classList.remove("not-loaded");} })
  //.to('.downArrow ', {attr:{r:0}, duration:0.05}, 0)
  .to('.downArrow', {opacity:0, duration:0.6, ease:'sine.inOut'}, 0)
  .to('.text-only', {duration:1, y:'70vh', ease:'power2.in'})
  .from('.text-only', {opacity:0, duration:0.5, ease:'sine.inOut'})
  .to(first[0].words, { color: '#079097', duration: 0.1, stagger: 1 });

  gsap.to("#notloaded", {
    scrollTrigger: {
      trigger: "#notloaded",  // Elemento que actúa como referencia
      start: "bottom center",  // Cuando la parte superior del .trigger llegue al centro de la pantalla
      onEnter: () => document.querySelector("#notloaded").classList.remove("not-loaded"),
    }
  });
  
  let downArrow = document.querySelector('.downArrow');
  downArrow.onclick = () => gsap.to(window, { duration: 4, scrollTo: innerHeight * 2, ease: 'sine.in' });
  downArrow.onmouseover = () => gsap.to(downArrow, { ease: 'expo', attr: { stroke: '#002e2e' } });
  downArrow.onmouseout = () => gsap.to(downArrow, { ease: 'power1.inOut', attr: { stroke: '#cacbaf' } });

}

onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

document.addEventListener("DOMContentLoaded", fn);