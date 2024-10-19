function add(numbers) {
  if (!numbers || numbers === "") {
    return 0;
  } else {
    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      delimiter = new RegExp(parts[0][2]);
      numbers = parts[1];
    }
    const digits = numbers.split(delimiter).map((num) => parseInt(num, 10));
    const negatives = digits.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    }
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

console.log(" mulitple digits with comma separated input :", add("1,5, 1,6")); // output - 13

console.log(" Handling new lines between numbers :", add("1\n2,3")); // output - 6

console.log(
  " Handling new lines between numbers with multple :",
  add("1\n2,3\n4,5")
); // output - 15

console.log(" Handling different delimiters: :", add("//;\n1;2")); // output - 3

console.log(" Handling negative numbers: :", add("2,5,1,-2,-3")); // output - negative numbers not allowed: -2,-3
