function isPalindrome(word) {
  word = word.toLowerCase()
  let start = 0;
  let end = word.length - 1
  while (start < end) {
    if (word[start] !== word[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

/* 
  Function isPalindrome:
  Input: a word
  Output: a boolean indicating whether the word is a palindrome or not

*/

/*
  The input word is converted to lowercase.Two variables, start and end, are initialized. start is set to 0,and end  representing the index of the last character in the word.
  A loop is initiated. If it is not equal it returns false, indicating not a palindrome , or else returns true otherwise.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  //Input: "racecar"
//  Expected Output: true
// Input: "Madam"
// Expected Output: true
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
