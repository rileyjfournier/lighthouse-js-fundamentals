const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];


function finalPosition (arr) {
  let x = 0
  let y = 0
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === 'north') {
      y++;
    } else if (arr[i] === 'south') {
      y--;
    } else if (arr[i] === 'east') {
      x++;
    } else if (arr[i] === 'west') {
      x--;
    }
  }
  return [x,y];
}
finalPosition(moves);
