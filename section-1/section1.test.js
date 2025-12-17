const {
  connectStrings,
  expectWordEndsWithIng,
  addMissingPunctuation,
  getRemainder,
  accessObject,
  makeAllWordsBold,
  getPositiveNumbers,
} = require("./challenges");

describe("connectStrings()", () => {
  test("should join 2 strings together", function () {
    expect(connectStrings("hello", "world")).toBe("hello world");
    expect(connectStrings("paul", "rogerson")).toBe("paul rogerson");
    expect(connectStrings("blue", "sky")).toBe("blue sky");
  });
});

describe("expectWordEndsWithIng()", () => {
  test("should return true/false for a single word", function () {
    test(expectWordEndsWithIng("doing")).toBe(true);
    test(expectWordEndsWithIng("eating")).toBe(true);
    test(expectWordEndsWithIng("bang")).toBe(false);
    test(expectWordEndsWithIng("singer")).toBe(false);
  });
});

describe("addMissingPunctuation()", () => {
  test("returns the string with accurate punctuation", function () {
    test(addMissingPunctuation("Hello there!")).toBe("Hello there!");
    test(addMissingPunctuation("How's it going?")).toBe("How's it going?");
    test(addMissingPunctuation("Yeah I'm good")).toBe("Yeah I'm good.");
    test(addMissingPunctuation("Nice.")).toBe("Nice.");
  });
});

describe("getRemainder() ", () => {
  test("returns the correct remainder", function () {
    expect(getRemainder(10, 2)).toBe(0);
    expect(getRemainder(119, 10)).toBe(9);
    expect(getRemainder(50, 6)).toBe(2);
  });
});

describe("accessObject() ", () => {
  test("can access a property value using a key", function () {
    expect(accessObject({ name: "jonny", age: 32 }, "name")).toBe("jonny");
    expect(accessObject({ name: "jonny", age: 32 }, "age")).toBe(32);
    expect(accessObject({ name: "jonny", age: 32 }, "email")).toBe(
      "property not found"
    );
  });
});

describe("makeAllWordsBold() ", () => {
  test("can convert all strings to be surrounded by double asterisks", function () {
    expect(makeAllWordsBold(["hello", "there", "world"])).toEqual([
      "**hello**",
      "**there**",
      "**world**",
    ]);
    expect(makeAllWordsBold(["I", "love", "coding"])).toEqual([
      "**I**",
      "**love**",
      "**coding**",
    ]);
  });
});

describe("getPositiveNumbers()", () => {
  test("Can get all the positive numbers from an array of numbers", function () {
    expect(getPositiveNumbers([1, -1, 2, -2, 3, -3])).toEqual([1, 2, 3]);
    expect(getPositiveNumbers([-80, 9, 100, 13, 20, -7])).toEqual([
      9, 100, 13, 20,
    ]);
    expect(getPositiveNumbers([-1, -50, -999])).toEqual([]);
  });
});
