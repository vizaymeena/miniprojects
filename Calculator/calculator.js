/* Calculator */

/* Considering display div into varibale to show result*/

const output = document.querySelector("#display")

// Making room for storing values
let store = "";

/* Function for storing values */
let calc=(value)=>{

    store += value  // Holding all user selected values in string format to concat it side by side

    output.innerHTML=store // Displayed stored values in display div
}

/* Function for calculation "= */
let calculate=()=>{

    output.innerHTML=eval(store) // "1+2" = result

    store = eval(store) // "1+2" converted into numbers -->

    store.toString()  // converted into string 

}

/* clear display */
let cdisplay = document.querySelector("#cleardisplay")

cdisplay.addEventListener("dblclick",()=>{
     
output.innerHTML="0"

})

/* clear n-1 digit */
cdisplay.addEventListener("click",()=>{

  store = store.slice(0,-1)  // removes last digit
  output.innerHTML=store

})