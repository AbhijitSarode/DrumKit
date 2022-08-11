/*
----LOGIC----
Step 1. Select all drums
Step 2. Add btn press/click event listner to all 
Step 3. Play sound when btn press/click
Step 4. Animate
*/

// Step 1: Get all drums
let drums = document.querySelectorAll('.drum')

// Step 2.1: Add clik event listener
drums.forEach(drum => {
    drum.addEventListener('click', () => {

        // Pass drum(button) value to the funtions
        playDrum(drum.textContent)
        playAnimation(drum.textContent)
    })
})

// Step 2.2: Add keypress event listener
document.addEventListener('keypress', (event)=> {
    playDrum(event.key)
    playAnimation(event.key)
})

// Step 3: Play sound when event is triggered
function playDrum(drum) {
    switch (drum) {
        case "w":
            var audio =  new Audio("assets/sounds/tom-1.mp3")
            audio.play()
            break;
    
        case "a":
            var audio =  new Audio("assets/sounds/tom-2.mp3")
            audio.play()
            break;
        case "s":
            var audio =  new Audio("assets/sounds/tom-3.mp3")
            audio.play()
            break;
        case "d":
            var audio =  new Audio("assets/sounds/tom-4.mp3")
            audio.play()
            break;
        case "j":
            var audio =  new Audio("assets/sounds/crash.mp3")
            audio.play()
            break;
        case "k":
            var audio =  new Audio("assets/sounds/kick-bass.mp3")
            audio.play()
            break;
        case "l":
            var audio =  new Audio("assets/sounds/snare.mp3")
            audio.play()
            break;
        default:
            console.log(drum)
            break;
    }
}

// Step 4: Animate active button
function playAnimation (currentKey) {
    let activeButton = document.querySelector("." + currentKey) //Selects individual drum from the drumlist
    activeButton.classList.add("pressed") //Adds CSS class

    setTimeout(function(){
        activeButton.classList.remove("pressed") //After 0.1second removes CSS class to create animation
    }, 100)
}