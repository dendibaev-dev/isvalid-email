const isValidEmail = require("./index.js");

describe("Is valid email", () => {
  test("Empty value", () => {
    expect(isValidEmail()).toBeFalsy();
  });

  test("Valid email", () => {
    expect(isValidEmail("test@gmail.com")).toBeTruthy();
    expect(isValidEmail("test_name@gmail.com")).toBeTruthy();
    expect(isValidEmail("test.dev@gmail.com")).toBeTruthy();
  });

  test("Invalid points", () => {
    expect(isValidEmail("test...@gmail.com")).toBeFalsy();
    expect(isValidEmail("test@gmail.")).toBeFalsy();
    expect(isValidEmail("test@.com")).toBeFalsy();
    expect(isValidEmail("test.@gmail")).toBeFalsy();
    expect(isValidEmail("test.@gmail.com")).toBeFalsy();
  });

  test("Numbers value", () => {
    expect(isValidEmail(123)).toBeFalsy();
    expect(isValidEmail(NaN)).toBeFalsy();
  });

  test("Boolean value", () => {
    expect(isValidEmail(true)).toBeFalsy();
    expect(isValidEmail(false)).toBeFalsy();
  });

  test("Function value", () => {
    function testFunc() {
      return "test";
    }

    expect(isValidEmail(testFunc)).toBeFalsy();
  });
});
