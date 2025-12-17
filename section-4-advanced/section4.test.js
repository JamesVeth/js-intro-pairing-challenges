const collectLikeTerms = require("./0-collect-like-terms");
const convertToBinary = require("./1-convert-to-binary");
const encodeTimes = require("./2-encode-times");
const createPowerSet = require("./3-create-power-set");

describe("collectLikeTerms()", () => {
  test("returns a letter when passed an expression with a single letter", function () {
    expect(collectLikeTerms("a")).toBe("a");
    expect(collectLikeTerms("b")).toBe("b");
  });

  test("returns the expression if it is already simplified (not starting with a 1)", function () {
    expect(collectLikeTerms("2a")).toBe("2a");
    expect(collectLikeTerms("3a")).toBe("3a");
  });

  test("if it starts with 1 then it just returns the letter", function () {
    expect(collectLikeTerms("1a")).toBe("a");
    expect(collectLikeTerms("1y")).toBe("y");
  });

  test("can simply the two duplicated letters added together", function () {
    expect(collectLikeTerms("a + a")).toBe("2a");
    expect(collectLikeTerms("c + c")).toBe("2c");
  });

  test("can simplify multiple duplicate letters being added together", function () {
    expect(collectLikeTerms("a + a + a")).toBe("3a");
    expect(collectLikeTerms("z + z + z + z")).toBe("4z");
  });

  test("can simplify two distinct letters (in alphabetical order)", function () {
    expect(collectLikeTerms("a + b")).toBe("a + b");
    expect(collectLikeTerms("b + a")).toBe("a + b");
  });

  test("can simplify multiple distinct (with some duplicate) letters being added together", function () {
    expect(collectLikeTerms("a + b + b")).toBe("a + 2b");
    expect(collectLikeTerms("a + a + a + b")).toBe("3a + b");
  });
  test("can simplify multiple distinct terms, terms consist of multiple letters together", function () {
    expect(collectLikeTerms("ab + ab")).toBe("2ab");
    expect(collectLikeTerms("ab + ab + ab")).toBe("3ab");
  });
});

describe("convertToBinary()", () => {
  test("can convert a single digit decimal number to binary", function () {
    expect(convertToBinary(0)).toBe("0");
    expect(convertToBinary(1)).toBe("1");
    expect(convertToBinary(2)).toBe("10");
    expect(convertToBinary(3)).toBe("11");
    expect(convertToBinary(4)).toBe("100");
    expect(convertToBinary(5)).toBe("101");
    expect(convertToBinary(6)).toBe("110");
    expect(convertToBinary(7)).toBe("111");
  });

  test("can convert a multiple digit decimal number to binary", function () {
    expect(convertToBinary(10)).toBe("1010");
    expect(convertToBinary(23)).toBe("10111");
    expect(convertToBinary(55)).toBe("110111");
  });
});

describe("encodeTimes()", () => {
  test("can encode a series of times into a time string", function () {
    expect(encodeTimes([0, 5, 25, 30, 55])).toBe(
      ".....####################.....#########################....."
    );
    expect(encodeTimes([0, 40, 50])).toBe(
      "........................................##########.........."
    );
    expect(encodeTimes([0, 24, 29])).toBe(
      "........................#####..............................."
    );
    expect(encodeTimes([0, 45, 55])).toBe(
      ".............................................##########....."
    );
  });
});

describe("createPowerSet()", () => {
  test("returns an array including empty array when passed an empty array", function () {
    expect(createPowerSet([])).toBe([[]]);
  });
});
