// Challenge : https://edabit.com/challenge/QXWM2oo7rQNiyDsip

function inkLevels(obj) {
  // Get obj values in an array
  var levels = Object.values(obj);
  var min = levels[0];

  for (var i = 0; i <= levels.length - 1; i++) {
    if (min >= levels[i]) {
      console.log(min, levels[i], min == levels[i]);
      min = levels[i];
    }
  }

  return min;
}

var printablePages = inkLevels({
  cyan: 432,
  magenta: 543,
  yellow: 777,
});

console.log("printablePages: ", printablePages);
