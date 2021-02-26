// Challenge : https://edabit.com/challenge/rCmEy2AQYLbRGgKyL

function getAbsSum(arr) {
  var result = 0;
  for (var i = 0; i <= arr.length - 1; i++) {
    result += Math.abs(arr[i]);
    console.log(result);
  }

  return result;
}

const sum = getAbsSum([1, -2, 3, -4]);

console.log("sum: ", sum);
