function reverseVowels(s) {
  let start = 0;
  let end = s.length - 1;
  let stringArray = s.split("");
  let Vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  console.log("string array:", stringArray);

  while (start < end) {
    if (!Vowels.has(stringArray[start])) {
      start++;
    } else if (!Vowels.has(stringArray[end])) {
      end--;
    } else {
      let tmp = stringArray[start];
      stringArray[start] = stringArray[end];
      stringArray[end] = tmp;
      console.log(
        "after swap start and end : ",
        stringArray[start],
        stringArray[end]
      );
      start++;
      end--;
    }
  }
  return stringArray.join("");
}

console.log(reverseVowels("A man, a plan, a canal: Panama"));
