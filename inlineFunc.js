function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function laugh(num) {
  let sound = "";
  for (let x = 1; x <= num; x++) {
    sound += "ha";
  }
  sound += "!";
  return sound;
});