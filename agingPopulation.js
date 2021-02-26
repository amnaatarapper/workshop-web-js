// Challenge : https://edabit.com/challenge/xtDkfWxEh2hbmAHvn

function afterNYears(obj, n) {
  // Mirror copy of obj
  var agedPopulation = obj;

  // Loop through copy object
  for (var key in agedPopulation) {
    console.log("iteration before n: ", key, agedPopulation[key]);
    agedPopulation[key] += Math.abs(n);
    console.log("iteration after n: ", key, agedPopulation[key]);
  }

  return agedPopulation;
}

var result = afterNYears(
  {
    Baby: 2,
    Child: 8,
    Teenager: 15,
    Adult: 25,
    Elderly: 71,
  },
  -19
);

console.log(result);
