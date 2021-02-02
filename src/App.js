import { useEffect } from 'react';
import './styles.css';
function App() {
  useEffect(() => {
    const banner = document.querySelector('.banner');
    const blocks = document.getElementsByClassName('blocks');

    for (let i = 0; i < 100; i++) {
      banner.innerHTML += '<div class="blocks"></div>';
      const duration = Math.random() * 5;
      blocks[i].style.animationDuration = duration + 's';
    }
  }, []);

  return (
    <>
      <section className='App'>
        <div className='banner'></div>
      </section>
    </>
  );
}

export default App;
