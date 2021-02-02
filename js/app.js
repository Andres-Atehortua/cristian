// let blocks = document.querySelectorAll('.blocks');

const banner = document.querySelector('.banner');
const blocks = document.getElementsByClassName('blocks');

for (let i = 0; i < 100; i++) {
  banner.innerHTML += '<div class="blocks"></div>';
  const duration = Math.random() * 5;
  blocks[i].style.animationDuration = duration + 's';
}

// blocks.forEach((elm) => {
//   return (elm.style.animationDuration = Math.random() * 5 + 's');
// });
