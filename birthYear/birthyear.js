
// Calculate Your Birth Year

let check=()=>{
    let output = document.querySelector("#output")
    let timee = new Date();
    let currentyear = timee.getFullYear();
    let inputyear = parseInt(document.querySelector("#inputyear").value).length;
    let year = currentyear-inputyear;
    
    if(!year || isNaN(inputyear) || inputyear>currentyear || inputyear.length!==4){
        output.style.color="red"

        // Text Styling Starts   .... Via Classlist
        output.style.fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
        output.style.borderColor= "2px solid Red"
        // Text Styling Ends


        /* Reloading Page if number length is not equal to 4 digit */
         setTimeout(()=>{
            location.reload()
         },2000)
        /* ---------------------------------------------------------- */
         
        output.innerHTML="Please, Enter a valid year."
        return;
    }
     /* When Everything is processed accordingly this will work out */
     output.style.color="green"
     output.innerHTML=`You are ${year} Years old.`;
}

  // Ends.


// bug:: number of years in input field must be of 4 digits , how to make it?
// Date/09/25 --> Fixed (inputyear.length!==4)
