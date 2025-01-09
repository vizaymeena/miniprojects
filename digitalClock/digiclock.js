
    
/* Hour Minute and Seconds considered into variables  */
const opt_hours = document.querySelector(".hours")
const opt_minutes = document.querySelector(".minutes")
const opt_seconds = document.querySelector(".seconds")

/* am_pm into varibale */
const am_pm = document.querySelector(".am_pm")

/* Day, Month, Year considered into variable */
const day = document.querySelector(".subday")
const month = document.querySelector(".submonth")
const year = document.querySelector(".subyear")


   /* Interval automatically runs for infinite times */
    setInterval(()=>{

        let time = new Date();
        let hour = time.getHours() %12 || 12  // Convert 24 hours into  0 - 12
        let minute = time.getMinutes()
        let second = time.getSeconds()

        // Add leading zero to minutes and seconds through redefining the existing variable.
         hour = hour < 10 ? "0" + hour : hour;
         minute = minute < 10 ? "0" + minute : minute;
         second = second < 10 ? "0" + second : second;

        opt_hours.innerHTML=hour
        opt_minutes.innerHTML=minute
        opt_seconds.innerHTML=second
        
        /* Determining the time period AM/PM -- Using ternary operator */
        let period = hour >=12 ? "A.M.":"P.M."
        am_pm.innerHTML=period

        /*  Day month and year */

        let currentday = time.getDay();
        let currentmonth = time.getMonth();
        let currentyear = time.getFullYear();

        /* Name of Days into Array */
        let arr_days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","friday","Saturday"]
        /* Name of Months into Array */
        let arr_months = ["JAN","fEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]

        /* DOM of days,month and years. */
        day.innerHTML = arr_days[time.getDay()];
        month.innerHTML = arr_months[time.getMonth()]
        year.innerHTML = currentyear
    
    },0)

   


//==========================================
