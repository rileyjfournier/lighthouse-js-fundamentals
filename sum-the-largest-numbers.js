const sumLargestNumbers = function(data) {
  let highestVal = 0;
  let secondVal = 0;
  for (let i = 0; i <= data.length; i++) {
    if (data[i] > highestVal) {
      highestVal = data[i];
    }
  }
  for (let j = 0; j <= data.length; j++) {
    if (data[j] > secondVal && data[j] < highestVal) {
      secondVal = data[j];
    }
  }
  let sum = highestVal + secondVal;
  return sum;
};



console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));