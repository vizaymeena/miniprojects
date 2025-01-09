
const dicecontainer = document.querySelector("#dicecontainer")

// Game Greeting message starts ..

     // Greeting Statement ...

// Game Greeting message ends  .. 

    let roll=()=>{
    
    // display
    // Roll function
    let dice = Math.floor(Math.random() * 6) + 1
    
    let box1 = document.querySelector("#box1")
    let box2 = document.querySelector("#box2")
    let box3 = document.querySelector("#box3")
    let box4 = document.querySelector("#box4")
    let box5 = document.querySelector("#box5")
    let box6 = document.querySelector("#box6")
    
    // box 1
    if(dice==1){
         box1.style.opacity = 1
         box2.style.opacity = 0
         box3.style.opacity = 0
         box4.style.opacity = 0
         box5.style.opacity = 0
         box6.style.opacity = 0 
    }
    // box 2
    else if(dice==2){
        box1.style.opacity = 0
        box2.style.opacity = 1
        box3.style.opacity = 0
        box4.style.opacity = 0
        box5.style.opacity = 0
        box6.style.opacity = 0 
    }
    // box 3
    else if(dice==3){
        box1.style.opacity = 0        
        box2.style.opacity = 0
        box3.style.opacity = 1    
        box4.style.opacity = 0
        box5.style.opacity = 0
        box6.style.opacity = 0 
    }
    // box 4
    else if(dice==4){
        box1.style.opacity = 0
        box2.style.opacity = 0
        box3.style.opacity = 0
        box4.style.opacity = 1
        box5.style.opacity = 0
        box6.style.opacity = 0 
    }
    // box 5
    else if(dice==5){
        box1.style.opacity = 0
        box2.style.opacity = 0
        box3.style.opacity = 0
        box4.style.opacity = 0
        box5.style.opacity = 1
        box6.style.opacity = 0 
    }
    // box 6
    else if(dice==6){
        box1.style.opacity = 0
        box2.style.opacity = 0
        box3.style.opacity = 0
        box4.style.opacity = 0
        box5.style.opacity = 0
        box6.style.opacity = 1 
    }
  }


  /* Exit Function Starts */
let exit=()=>{
   
    let box1 = document.querySelector("#box1")
    let box2 = document.querySelector("#box2")
    let box3 = document.querySelector("#box3")
    let box4 = document.querySelector("#box4")
    let box5 = document.querySelector("#box5")
    let box6 = document.querySelector("#box6")

    box1.style.opacity=0
    box2.style.opacity=0
    box3.style.opacity=0
    box4.style.opacity=0
    box5.style.opacity=0
    box6.style.opacity=0

    dicecontainer.innerHTML="Thank you, come back soon."

    setTimeout(()=>{
        location.reload()     // Reloading page in 5s after ending game
    },4000)
}
/* Exit Function Ends */

  
  
  