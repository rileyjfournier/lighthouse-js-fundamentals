//creating a function to find odd numbers

const isOdd = function (num) {
  if (num % 2 === 0) {
    return false;
  } else {
    return true;
  }
}
console.log("16 is odd: " +isOdd(16));