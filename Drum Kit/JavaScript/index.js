let mySong = {
  w: 'sounds/tom-1.mp3',
  a: 'sounds/tom-2.mp3',
  s: 'sounds/tom-3.mp3',
  d: 'sounds/tom-4.mp3',
  j: 'sounds/snare.mp3',
  k: 'sounds/crash.mp3',
  l: 'sounds/kick-bass.mp3'
}

function playSong(song) {
  let audio = new Audio(mySong[song]);
  audio.play();
}

// Ivent listener for buttons.
document.addEventListener('keydown', event => {
  let symbol = event.key;
  if (symbol === 'w' || symbol === 'a' || symbol === 's' || symbol === 'd' || symbol === 'j' || symbol === 'k' || symbol === 'l') {

      playSong(symbol)
  }
});

document.addEventListener('click', event => {
  let symbol = event.target.innerText;
  if (symbol === 'w' || symbol === 'a' || symbol === 's' || symbol === 'd' || symbol === 'j' || symbol === 'k' || symbol === 'l') {
      playSong(symbol)
  }
});
