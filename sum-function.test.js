const add = require("./sum-function");

describe("Add function test-suite ", () => {
  test("should return 0 for an empty string or delimiter or comma ", () => {
    expect(add("")).toBe(0);
    expect(add("\n")).toBe(0);
    expect(add("\n,")).toBe(0);
  });

  test("should return the number itself when a single number is passed", () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6);
    expect(add("1,\n")).toBe(1);
  });

  test("should return the sum of two numbers", () => {
    expect(add("1,9")).toBe(10);
  });

  test("should return the sum of multiple numbers", () => {
    expect(add("1,2,3,9,10")).toBe(25);
  });

  test("should return the sum of multiple numbers when it with delimiter", () => {
    expect(add("\n1,2,3,4\n6")).toBe(16);
  });

  test("should support custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("should handle multiple single-character delimiters", () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6);
  });

  test("should handle multi-character delimiters", () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
  });

  test("should handle multiple multi-character delimiters", () => {
    expect(add("//[***][%%%]\n1***2%%%3")).toBe(6);
  });

  test("should return 0 for empty input with multi-character delimiters", () => {
    expect(add("//[***][%%%]\n")).toBe(0);
  });

  test("should throw an exception for negative numbers", () => {
    expect(() => add("1,-2")).toThrow("negative numbers not allowed: -2");
  });

  test("should throw an exception for multiple negative numbers", () => {
    expect(() => add("1,-2, 4, -6")).toThrow(
      "negative numbers not allowed: -2,-6"
    );
  });
});
