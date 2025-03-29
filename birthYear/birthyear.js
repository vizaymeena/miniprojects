
// Calculate Your Birth Year

let check=()=>{
    let output = document.querySelector("#output")
    let timee = new Date();
    let currentyear = timee.getFullYear();
    let inputyear = document.querySelector("#inputyear").value.trim();
    let inputyear2 = parseInt(inputyear)
    let year = currentyear-inputyear;

    
      if(inputyear.length!=4 ){
        alert("Input Year should be valid")
        return false
      }
    
    else if(!inputyear || isNaN(inputyear2) || inputyear>currentyear || inputyear.length!==4)
      {
        output.style.color="red"
        output.innerHTML="Please, Enter a valid year."

      
         /* Reloading Page if number length is not equal to 4 digit */
         setTimeout(()=>{
          location.reload()
          },2000)

        return;

       
        /* ---------------------------------------------------------- */
         
       
    }
     /* When Everything is processed accordingly this will work out */
     output.style.color="green"
     output.innerHTML=`You are ${year} Years old.`;
}

  // Ends.


// bug:: number of years in input field must be of 4 digits , how to make it?
// Date/09/25 --> Fixed (inputyear.length!==4)
