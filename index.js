var x = document.querySelectorAll("button.drum");

for (var i = 0; i < x.length; i++) {
  x[i].addEventListener("click", function() {
    var y = this.innerHTML;
    clickedFromKeyboard(y)
    changeDiv(y);
  });
}


document.addEventListener("keypress",function (event){
  var a =String.fromCharCode(event.keyCode);
clickedFromKeyboard(a);
changeDiv(a);
});

function changeDiv(y){
  var x = document.querySelector('.'+y);
  x.classList.add('pressed');
  setTimeout(function(){
    x.classList.remove('pressed');
  },100);
}

function makeAudio(filename) {
  var sound = new Audio(filename);
  sound.play();
}

function clickedFromKeyboard(y){
  switch (y) {
    case "w":
      makeAudio('sounds/tom-1.mp3');
      break;
    case "a":
      makeAudio('sounds/tom-2.mp3');
      break;
    case "s":
      makeAudio('sounds/tom-3.mp3');
      break;
    case "d":
      makeAudio('sounds/tom-4.mp3');
      break;
    case "j":
      makeAudio('sounds/crash.mp3');
      break;
    case "k":
      makeAudio('sounds/kick-bass.mp3');
      break;
    case "l":
      makeAudio('sounds/snare.mp3');
      break;
    default:
      console.log(this.innerHTML);

  }
}
