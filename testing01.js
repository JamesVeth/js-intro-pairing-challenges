
function extractNumber(str) {
  // This function should take a string containing a number wrapped in a pair of round brackets and return said number
  //   return str.replace(/\D/g, "");

    let num = str.replace("(", "").replace(")", "");
    console.log(num);

    num = num.replace(/\D/g, "");
    console.log(num);

//   return Number(str.replace(/\D/g, ""));

}

console.log(extractNumber("qwasdaoyer(44687)iuwyeibasdahgsd"));
console.log(extractNumber("qwasdasdfsyer(19827)iusdfsdfsd"));
console.log(extractNumber("qwasdasdfsyer(5601)iusd5602sdfsd"));
console.log(extractNumber("qwasdas27dfs28yer(29)ius3dfsdf0sd"));



/*     let num = str.replace("(", "").replace(")", "");
    // console.log(num);
    num = num.replace(/\D/g, "");
    // console.log(num);
 */

/*     
    let num = str.match(/\((d+)\)/);
    return num;

    */