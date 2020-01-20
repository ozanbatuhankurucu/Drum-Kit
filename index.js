var x = document.querySelectorAll("button.drum");

for (var i = 0; i < x.length; i++) {
  x[i].addEventListener("click", function() {

    var y = this.innerHTML;


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
  });
}

function makeAudio(filename) {
  var sound = new Audio(filename);
  sound.play();
}
