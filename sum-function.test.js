const add = require("./sum-function");

describe("Add function test-suite ", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });
});
