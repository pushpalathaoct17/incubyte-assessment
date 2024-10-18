function add(numbers) {
  if (!numbers || numbers === "") {
    return 0;
  } else {
    let digits = numbers.split(",");
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
      sum = sum + parseInt(digits[i]);
    }
    return sum;
  }
}

console.log(" empty input :", add("")); // output - 0

console.log(" single digit input :", add("1")); // output - 1

console.log(" mulitple digits with comma separated input :", add("1,5")); // output - 6
