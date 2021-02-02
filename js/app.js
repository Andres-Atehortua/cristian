const banner = document.querySelector('.banner');
const blocks = document.getElementsByClassName('blocks');

for (let i = 0; i < 100; i++) {
  banner.innerHTML += '<div class="blocks"></div>';
  const duration = Math.random() * 5;
  blocks[i].style.animationDuration = duration + 's';
}

const mierdaAu = new Audio('../assets/puta-mierda.mp3');
const plomoAu = new Audio('../assets/plomo.mp3');
const guapoAu = new Audio('../assets/guapo.mp3');
const deduccionAu = new Audio('../assets/deduccion.mp3');
const brendaAu = new Audio('../assets/brenda.mp3');
const andresAu = new Audio('../assets/andres.mp3');

const mierda = document.querySelector('.mierda');
const defensa = document.querySelector('.defensa');
const guapo = document.querySelector('.guapo');
const deduccion = document.querySelector('.deduccion');
const brenda = document.querySelector('.brenda');
const andres = document.querySelector('.andres');

mierda.onclick = () => mierdaAu.play();
defensa.onclick = () => plomoAu.play();
mierda.onclick = () => mierdaAu.play();
guapo.onclick = () => guapoAu.play();
deduccion.onclick = () => deduccionAu.play();
andres.onclick = () => andresAu.play();
brenda.onclick = () => brendaAu.play();

gsap.registerPlugin(ScrollTrigger);

// let fadeout = gsap.to('#one', {
//   scrollTrigger: {
//     scrub: true,
//     trigger: '#one',
//     toggleActions: 'play none none reverse',
//     pin: true,
//   },
//   autoAlpha: 0,
// });
// ACTIVITIES SIX

const fadein = gsap.from('#two', { autoAlpha: 0 });
const img1in = gsap.from('#img1', { x: -200, opacity: 0 });
const img2n = gsap.from('#img2', { x: 200, opacity: 0 });
const text1in = gsap.from('#text1', { y: -200, opacity: 0 });
gsap
  .timeline({
    scrollTrigger: {
      scrub: true,
      trigger: '#two',
      toggleActions: 'play none none reverse',
      pin: true,

      pinSpacing: true,
    },
  })
  .add(fadein)
  .add(img1in)
  .add(img2n, '<')
  .add(text1in, '<');

const fadein2 = gsap.from('.sec2', { autoAlpha: 0 });
const img3in = gsap.from('#img3', { x: 200, opacity: 0 });
const img4n = gsap.from('#img4', { x: -200, opacity: 0 });
const text2in = gsap.from('#text2', { y: 200, opacity: 0 });
gsap
  .timeline({
    scrollTrigger: {
      scrub: true,
      trigger: '.sec2',
      toggleActions: 'play none none reverse',
      pin: true,

      pinSpacing: true,
    },
  })
  .add(fadein2)
  .add(img3in)
  .add(img4n, '<')
  .add(text2in, '<');

const fadein3 = gsap.from('.sec3', { autoAlpha: 0 });
const img4in = gsap.from('#img5', { y: 200, opacity: 0 });
const img5n = gsap.from('#img6', { y: -200, opacity: 0 });
const text3in = gsap.from('#text3', { opacity: 0 });
gsap
  .timeline({
    scrollTrigger: {
      scrub: true,
      trigger: '.sec3',
      toggleActions: 'play none none reverse',
      pin: true,

      pinSpacing: true,
    },
  })
  .add(fadein3)
  .add(img4in)
  .add(img5n, '<')
  .add(text3in, '<');

const fadein4 = gsap.from('.sec4', { autoAlpha: 0 });
const allin = gsap.from('.pics div', { y: -100 });
const text4in = gsap.from('#text4', { x: -400, stagger: 0.7 });

gsap
  .timeline({
    scrollTrigger: {
      scrub: true,
      trigger: '.sec4',
      toggleActions: 'play none none reverse',
      pin: true,

      pinSpacing: true,
    },
  })
  .add(fadein4)
  .add(text4in)
  .add(allin);
