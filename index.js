// alert("Hello");/

// target.addEventListener(type,listener);

// This is wrong
// document.querySelector("button").addEventListener("click",handleClick());
// function handleClick(){
//     alert("I got clicked!");
// }

// Right way
// document.querySelector("button").addEventListener("click",handleClick);
// function handleClick(){
//     alert("I got clicked!");
// }

// for(var i=0 ; i<document.querySelectorAll(".drum").length ; i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function() 
//     {
//         alert("I got clicked!");
//     });
// }

for(var i=0 ; i<document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function() 
    {
        // var audio= new Audio("sounds/tom-3.mp3");
        // audio.play();
        // console.log(this);
        // this.style.color="white";

        buttonInnerhtml= this.innerHTML;
        makeSound(buttonInnerhtml);
        buttonAnimation(buttonInnerhtml);
        
        

        document.addEventListener("keydown",function(event){
            makeSound(event.key);
            buttonAnimation(event.key);
        })
    });

    function makeSound(key)
        {
            switch (key) {
                case "w":
                    var crash= new Audio("sounds/crash.mp3");
                    crash.play();
                    break;
            
                case "a":
                    var kick= new Audio("sounds/kick-bass.mp3");
                    kick.play();
                    break;
    
                case "s":
                    var snare= new Audio("sounds/snare.mp3");
                    snare.play();
                    break;
    
                case "d":
                    var tom1= new Audio("sounds/tom-1.mp3");
                    tom1.play();
                    break;
    
                case "j":
                    var tom2= new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    break;
    
                case "k":
                    var tom3= new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;
    
                case "l":
                    var tom4= new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;
            
                default:
                    console.log(buttonInnerhtml);
                    break;
            }
        }

    function buttonAnimation(currentkey){
        var activationButton = document.querySelector("." + currentkey);
        activationButton.classList.add("pressed");

        setTimeout(function(){
            activationButton.classList.remove("pressed");
        },100);
    }

    
}

