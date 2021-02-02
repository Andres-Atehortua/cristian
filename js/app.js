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

const mierda = document.querySelector('.mierda');
const defensa = document.querySelector('.defensa');
const guapo = document.querySelector('.guapo');

mierda.onclick = () => mierdaAu.play();
defensa.onclick = () => plomoAu.play();
mierda.onclick = () => mierdaAu.play();
guapo.onclick = () => guapoAu.play();
