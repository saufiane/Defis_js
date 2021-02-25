const convert = document.getElementById("convert") ;
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInYear = 365;

convert.addEventListener("click", function() {
    let numberOfYears = document.getElementById("numberOfYears").value ;
    // Votre code ici

    const convert = document.getElementById("convert") ;const secondsInMinute = 60;const minutesInHour = 60;const hoursInDay = 24;const daysInYear = 365;

convert.addEventListener("click", function() {

  let numberOfYears = document.getElementById("numberOfYears").value ;

  let yearsToDays = numberOfYears * daysInYear ;
  console.log(yearsToDays + " days");
  let yearsToHours = yearsToDays * hoursInDay ;
  console.log(yearsToHours + " hours");
  let yearsToMinutes = yearsToHours * minutesInHour ;
  console.log(yearsToMinutes + " minutes");
  let yearsToSeconds = yearsToMinutes * secondsInMinute ;
  console.log(yearsToSeconds + " secondes");

  document.getElementById("resultSeconds").innerHTML = yearsToSeconds + " secondes" ;
  document.getElementById("resultMinutes").innerHTML = yearsToMinutes + " minutes" ;
  document.getElementById("resultHours").innerHTML = yearsToHours + " hours" ;
  document.getElementById("resultDays").innerHTML = yearsToDays + " days" ;
});
            
});