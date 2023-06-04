
//For all the button click
for (var i = 0; i < document.querySelectorAll("button").length; i++) {    //for more specific u can use .drum which is the class for all drum buttons instead of button
  document.querySelectorAll("button")[i].addEventListener("click",handleclick);
}

//here if we write handleclick like handleclick() than jaise he page load hoga ye function call ho jayega tooh fayda nai tooh aise he likho ya phir agar poora function he is bracket me likhte ho tooh koi dikkat nai hogi
//function for it
function handleclick(){

  var vara=this.innerHTML;
  makesound(vara);
  buttonAnimation(vara);
}
//detecting keyboard press
document.addEventListener("keydown",function(event)
{
  makesound(event.key);
  buttonAnimation(event.key);

});

//function to make sound
function makesound(key){
  switch (key) {
    case "w":
      var waudio=new Audio('sounds/tom-1.mp3');
      waudio.play();
      break;
      case "a":
        var aaudio=new Audio('sounds/tom-2.mp3');
        aaudio.play();
        break;
        case "s":
          var saudio=new Audio('sounds/tom-3.mp3');
          saudio.play();
          break;
          case "d":
            var daudio=new Audio('sounds/tom-4.mp3');
            daudio.play();
            break;
            case "j":
              var jaudio=new Audio('sounds/crash.mp3');
              jaudio.play();
              break;
              case "k":
                var kaudio=new Audio('sounds/kick-bass.mp3');
                kaudio.play();
                break;
                case "l":
                  var laudio=new Audio('sounds/snare.mp3');
                  laudio.play();
                  break;
    default:

  }

}

function buttonAnimation(currentkey){
  var activeButton=document.querySelector("."+currentkey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
