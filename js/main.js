const buttons = document.querySelectorAll('button');
// console.log(buttons)

function isPressed(t) {


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
    let element = document.querySelector(`.${text}`)
    if (element) {
      isPressed(text);
      element.classList.add('pressed')
    }

    setTimeout(() => {
      element.classList.remove('pressed')
    }, 1000);

  })
})



document.addEventListener('keydown', (e) => {
  const char = e.key;
  const element = document.querySelector(`.${char}`);
  if (element) {
    isPressed(char);
    element.classList.add('pressed')
  }

  setTimeout(() => {
    element.classList.remove('pressed')
  }, 1000);

})