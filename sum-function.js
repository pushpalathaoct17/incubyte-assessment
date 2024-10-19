function add(numbers) {
  if (!numbers || numbers.trim() === "") return 0;

  // Default delimiters: newline or comma
  let delimiter = /[\n,]/;
  // Custom delimiter logic
  if (numbers.startsWith("//")) {
    // Split on first \n
    const [delimiterPart, numPart] = numbers.split("\n", 2);
    delimiter = extractDelimiters(delimiterPart);
    // Only keep the number part after the delimiter
    numbers = numPart;
  }

  const digits = numbers
    .split(delimiter)
    .map((num) => parseInt(num, 10))
    // Filter out any non-numeric values (e.g., empty strings)
    .filter((num) => !isNaN(num));

  handleNegatives(digits);

  return digits.reduce((sum, num) => sum + num, 0);
}

function extractDelimiters(delimiterPart) {
  if (delimiterPart.startsWith("//[")) {
    // Handle multiple or multi-character delimiters
    const delimiters = delimiterPart
      .match(/\[([^\]]+)\]/g)
      .map((d) => d.slice(1, -1));
    return new RegExp(delimiters.map(escapeRegExp).join("|"));
  } else {
    // Single character delimiter
    return new RegExp(escapeRegExp(delimiterPart[2]));
  }
}

function handleNegatives(digits) {
  const negatives = digits.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

module.exports = add;
