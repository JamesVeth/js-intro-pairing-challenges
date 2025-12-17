const {
  expectSameFinalCharacter,
  isAllUpperCase,
  collectTheVowels,
  accessItem,
  findDayOfTheWeek,
  createPercentage,
  extractNumber,
} = require("./challenges");

describe("expectSameFinalCharacter()", () => {
  test("expects if two strings end with the same character", function () {
    expect(expectSameFinalCharacter("hello", "hello")).toBe(true);
    expect(expectSameFinalCharacter("goodbye!", "goodbye?")).toBe(false);
    expect(expectSameFinalCharacter("north", "coders")).toBe(false);
    expect(expectSameFinalCharacter("what", "did you expect")).toBe(true);
  });
});

describe("isAllUpperCase() ", () => {
  test("expects if every letter is upper case", function () {
    expect(isAllUpperCase("hello")).toBe(false);
    expect(isAllUpperCase("YEAH")).toBe(true);
    expect(isAllUpperCase("Well HELLO!")).toBe(false);
    expect(isAllUpperCase("GOOD MORNING")).toBe(true);
  });
});

describe("collectTheVowels()", () => {
  test("Takes a string of many letters and returns a string containing those vowels in correct order", function () {
    expect(collectTheVowels("a")).toBe("a");
    expect(collectTheVowels("bcd")).toBe("");
    expect(collectTheVowels("bcdepiaouk")).toBe("eiaou");
    expect(collectTheVowels("hello world")).toBe("eoo");
  });
});

describe("accessItem()", () => {
  test("can access an item inside in an array with a given index below the array length", function () {
    expect(accessItem(["a", "b", "c", "d"], 2)).toBe("c");
    expect(accessItem(["a", "b", "c", "d"], 0)).toBe("a");
    expect(accessItem(["a", "b", "c", "d"], 3)).toBe("d");
  });

  test("can access an item inside in an array with an index equal to or above the array length", function () {
    expect(accessItem(["a", "b", "c", "d"], 4)).toBe("a");
    expect(accessItem(["a", "b", "c", "d"], 6)).toBe("c");
    expect(accessItem(["a", "b", "c", "d"], 10)).toBe("c");
    expect(accessItem(["a", "b", "c", "d"], 11)).toBe("d");
  });
});

describe("findDayOfTheWeek()", () => {
  test("Returns the day of the week given a passed number", function () {
    expect(findDayOfTheWeek(2)).toBe("Tuesday");
    expect(findDayOfTheWeek(3)).toBe("Wednesday");
    expect(findDayOfTheWeek(1)).toBe("Monday");
    expect(findDayOfTheWeek(6)).toBe("Saturday");
    expect(findDayOfTheWeek(7)).toBe("Sunday");
  });
});

describe("createPercentage()", () => {
  test('creates a percentage string in the form "--%"', function () {
    expect(createPercentage(1, 2)).toBe("50%");
    expect(createPercentage(50, 100)).toBe("50%");
    expect(createPercentage(2, 3)).toBe("67%");
    expect(createPercentage(3, 4)).toBe("75%");
    expect(createPercentage(1, 7)).toBe("14%");
  });
});

describe("extractNumber() ", () => {
  test("Should return the number buried inside a string", function () {
    expect(extractNumber("lasjdasasj(123)asljdlajk")).toBe(123);
    expect(extractNumber("qwasdaoyer(44687)iuwyeibasdahgsd")).toBe(44687);
    expect(extractNumber("qwasdasdfsyer(19827)iusdfsdfsd")).toBe(19827);
    expect(extractNumber("qwasdasdfsyer(5601)iusd5602sdfsd")).toBe(5601);
    expect(extractNumber("qwasdas27dfs28yer(29)ius3dfsdf0sd")).toBe(29);
  });
});
