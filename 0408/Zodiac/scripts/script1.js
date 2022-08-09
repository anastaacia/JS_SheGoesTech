alert("Do You want to know Your Zodiac Sign?");

let date = prompt("Please enter Your Birth Day (1 - 31) :");
let month = prompt("Please enter Your Birth Month (1 - 12): ");

if ((month == 1 && date >= 20 && date <= 31) || (month == 2 && date <= 18)) {
  alert("You Are Aquarius");
}
if (month == 1 && date > 31) {
  alert("Please check the day! Only 31 days in January");
}
if ((month == 2 && date >= 19 && date <= 29) || (month == 3 && date <= 20)) {
  alert("You Are Pisces");
}
if (month == 2 && date > 29) {
  alert("Please check the Birth day! There are maximum 29 days in February");
}
if ((month == 3 && date >= 21 && date <= 31) || (month == 4 && date <= 19)) {
  alert("You Are Aries");
}
if (month == 3 && date > 31) {
  alert("Please check the day! Only 31 days in March");
}
if ((month == 4 && date >= 20 && date <= 30) || (month == 5 && date <= 20)) {
  alert("You Are Taurus");
}
if (month == 4 && date > 30) {
  alert("Could there be an error? There are only 30 days in April.");
}
if ((month == 5 && date >= 21 && date <= 31) || (month == 6 && date <= 21)) {
  alert("You Are Gemini");
}
if (month == 5 && date > 31) {
  alert("Please check! There are only 31 days in May.");
}
if ((month == 6 && date >= 22 && date <= 30) || (month == 7 && date <= 22)) {
  alert("You Are Cancer");
}
if (month == 6 && date > 30) {
  alert("ERROR! There are only 30 days in June.");
}
if ((month == 7 && date >= 23 && date <= 31) || (month == 8 && date <= 22)) {
  alert("You Are Leo");
}
if (month == 7 && date > 31) {
  alert("Sorry! There are only 31 days in July.");
}
if ((month == 8 && date >= 23 && date <= 31) || (month == 9 && date <= 22)) {
  alert("You Are Virgo");
}
if (month == 8 && date > 31) {
  alert("Please check! There are only 31 days in August.");
}
if ((month == 9 && date >= 23 && date <= 30) || (month == 10 && date <= 22)) {
  alert("You Are Libra");
}
if (month == 9 && date > 30) {
  alert(
    "Please enter the correct Birth day! There are only 30 days in September."
  );
}
if ((month == 10 && date >= 23 && date <= 31) || (month == 11 && date <= 21)) {
  alert("Scorpius You Are");
}
if (month == 10 && date > 31) {
  alert("Please check! There are only 31 days in October.");
}
if ((month == 11 && date >= 22 && date <= 30) || (month == 12 && date <= 21)) {
  alert("You Are Sagittarius");
}
if (month == 11 && date > 30) {
  alert("Please check! November is only 30 days long.");
}
if ((month == 12 && date >= 22 && date <= 31) || (month == 1 && date <= 19)) {
  alert("You Are Capricornus");
}
if (month == 12 && date > 31) {
  alert("Oh no! Only 31 days in December.");
}
if (month >= 12) {
  alert("We only have 12 months, don't we?");
}
