function findRange(num) {
  let str = String(num);
  let maxN = 0;
  let minN = 0;

  if (str === "9".repeat(str.length)) {
    maxN = str.replaceAll(str[0], "8");
  } else {
    for (let i = 0; i < str.length; i++) {
      if (str[i] < 9) {
        maxN = str.replaceAll(str[i], "9");
        break;
      }
    }
  }

  if (str === "1".repeat(str.length)) {
    minN = str;
  } else {
    for (let i = 1; i < str.length; i++) {
      if (str[0] !== "1") {
        minN = str.replaceAll(str[0], "1");
        break;
      }

      if (str % (i + 1) === 0) {
        minN = str.replaceAll(str[str.length - 1], "1");
        break;
      }

      if (str % (i + 1) === 1) {
        minN = str.replaceAll(str[str.length - 2], "1");
        break;
      }

      if (str[i] !== "0" && str[0] !== str[i]) {
        minN = str.replaceAll(str[i], "0");
        break;
      }
    }
  }

  let result = maxN - minN;
  console.log(maxN);
  console.log(minN);
  console.log(result);

  return result;
}

findRange(1000);
findRange(1001);
findRange(1002);
findRange(2001);
findRange(2000);
findRange(2002);
findRange(9090);
findRange(9987654);
findRange(1123);
findRange(909);
findRange(1213);
findRange(2345);
findRange(2234);
findRange(2234);
findRange(9999);
findRange(1110);
findRange(1100);
findRange(1000);
findRange(1101);
findRange(1001);
