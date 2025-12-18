function collectLikeTerms(expression) {
  // Implement a function collectLikeTerms which takes an expression in a string like 'a + a + a'
  // and then returns a string with a simplified algebraic expression, which in the previous case would be 3a.
  // The characters should be in alphabetical order by default.
  // You can assume that the only operation connecting the terms is addition.

  const terms = expression.split(" + ");

  const sortedTerms = terms
    .map((term) => {
      if (term.includes("1")) {
        return term.split("")[term.split("").length - 1];
      } else {
        return term;
      }
    })
    .sort(); //map?

  let totalTerms = {};

  sortedTerms.forEach((num) => (totalTerms[num] = 0));

  for (let item of sortedTerms) {
    totalTerms[item]++;
  }

  let finalTerms = [];

  for (let key in totalTerms) {
    if (totalTerms[key] === 1) {
      finalTerms.push(`${key}`);
    } else {
      finalTerms.push(`${totalTerms[key]}${key}`);
    }
  }
  finalStr = finalTerms.join(" + ");

  // console.log(terms);
  // console.log(totalTerms);
  // console.log(finalStr);
  // console.log("------------");
  return finalStr;
}

collectLikeTerms("1a");
collectLikeTerms("a + a + a");
collectLikeTerms("c + b + a");
collectLikeTerms("ab + ab + a");
collectLikeTerms("a + b + c");
// Once you have passed the current test, change test on the following test to runTest so you are able to run it with Node

module.exports = collectLikeTerms;
