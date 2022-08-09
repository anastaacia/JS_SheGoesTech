let array = [];
let size = 5;
let i;

for (i = 0; i < size; i++) {
  array[i] = prompt("Enter a number " + (i + 1));
}

alert("Your entered numbers are : " + array);

array.sort(function (a, b) {
  return a - b;
});
alert("Your numbers in ascending order are : " + array);

//not only numbers allowed
