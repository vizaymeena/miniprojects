
// Calculate Your Birth Year

let check=()=>{
    let output = document.querySelector("#output")
    let timee = new Date();
    let currentyear = timee.getFullYear();
    let inputyear = parseInt(document.querySelector("#inputyear").value);
    let year = currentyear-inputyear;
    
    if(!year || isNaN(inputyear) || inputyear>currentyear){
        output.style.color="red"
        output.innerHTML="Please, Enter a valid year."
        return;
    }
     output.style.color="green"
     output.innerHTML=`You are ${year} Years old.`;
}
// Ends.

// bug:: number of years in input field must be of 4 digits , how to make it
