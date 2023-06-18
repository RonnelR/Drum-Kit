
var drumLength = document.querySelectorAll(".drum").length;

// sound plays while button pressed

for(i=0; i<drumLength; i++)
document.querySelectorAll(".drum")[i].addEventListener("click",function () {

    var buttonInnerHtml = this.innerHTML;

   playSounds(buttonInnerHtml);

   activeAnimation(buttonInnerHtml);
});

// sound plays while keys press


document.addEventListener("keypress",function(event){
  var pressedKey = event.key;
  playSounds(pressedKey);

  activeAnimation(pressedKey);
})



// function for playing sounds accourding to the required characters

function playSounds(character) {

    switch (character) {
        case "w":
            var drum1 = new Audio("./sounds/tom-1.mp3");
            drum1.play();         
            break;
            
            case "a":
                var drum2 = new Audio("./sounds/tom-2.mp3");
                drum2.play();               
                break;

         case "s":
             var drum3 = new Audio("./sounds/tom-3.mp3");
             drum3.play();                    
             break;

         case "d":
            var drum4 = new Audio("./sounds/tom-4.mp3");
             drum4.play();         
            break;

         case "j":
            var kick = new Audio("./sounds/kick-bass.mp3");
           kick.play();
           break;

     case "k":
      var snare = new Audio("./sounds/snare.mp3");
     snare.play();            
            break;

 case "l":
     var crash = new Audio("./sounds/crash.mp3");
   crash.play();
    break;
    
        default:
            console.log(buttonInnerHtml);
            break;
    }
};

function activeAnimation(currentKey) {

   var action = document.querySelector("." + currentKey);


     action.classList.add("pressed");

     

   setTimeout( function(){
    action.classList.remove("pressed");
   }, 100)

   };
