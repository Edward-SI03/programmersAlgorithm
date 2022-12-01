function getFinalString(s) {
  let ingredient = s.split("");

  let i = 0;

  while (i < ingredient.length - 2) {
    if (
      ingredient[i] == "A" &&
      ingredient[i + 1] == "W" &&
      ingredient[i + 2] == "S"
    ) {
      ingredient.splice(i, 3);

      i = i - 2;
    } else i++;
  }

  if (ingredient.join("") === "") {
    return -1;
  }

  return ingredient.join("");
}

getFinalString("AWSSIDJEAWAWSSFIAAWSWSSI");
getFinalString("AWS");
