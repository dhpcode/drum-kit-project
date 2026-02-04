const buttons = document.querySelectorAll('button');
// console.log(buttons)

function isPressed(t) {

  const element = document.querySelector(`.${t}`);
  if (element) {
    element.classList.add('pressed');

    setTimeout(() => {
      element.classList.remove('pres`sed')
    }, 100);
  }



  switch (t) {
    case 'w':
      const w = new Audio('../sounds/tom-1.mp3');
      w.play(); break;
    case 'a':
      const a = new Audio('../sounds/tom-2.mp3');
      a.play(); break;
    case 's':
      const s = new Audio('../sounds/tom-3.mp3');
      s.play(); break;
    case 'd':
      const d = new Audio('../sounds/tom-4.mp3');
      d.play(); break;
    case 'j':
      const j = new Audio('../sounds/snare.mp3');
      j.play(); break;
    case 'k':
      const k = new Audio('../sounds/crash.mp3');
      k.play(); break;
    case 'l':
      const l = new Audio('../sounds/kick-bass.mp3');
      l.play(); break;
  }
}

buttons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    let text = e.target.textContent;
    isPressed(text);
  })
})



document.addEventListener('keydown', (e) => {
  const text = e.key;
  isPressed(text);
})