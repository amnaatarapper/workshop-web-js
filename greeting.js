// Challenge : https://edabit.com/challenge/83sWemMhpG6pScXKp

var GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina",
};

function greeting(name) {
  if (GUEST_LIST[name]) {
    return "Hi! I'm " + name + ", and I'm from " + GUEST_LIST[name];
  }

  return "Hi! I'm a guest.";
}

var msg = greeting("Randy");
console.log(msg);
