const add = require("./sum-function");

describe("Add function test-suite ", () => {
  test("should return 0 for an empty string or delimiter or comma ", () => {
    expect(add("")).toBe(0);
    expect(add("\n")).toBe(0);
    expect(add("\n,")).toBe(0);
  });

  test("should return the number itself when a single number is passed", () => {
    expect(add("1")).toBe(1);
  });
});
