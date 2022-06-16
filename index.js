function reverseString(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // Write your algorithm here
    const reversedWord = reverseString(word);
    return word === reversedWord;
  
}

/* 
  Add your pseudocode here
  reurn a reverse of your strings
   then equate it to the original word
   if they are equal then return true
   if not return false
*/

/*
  Add written explanation of your solution here
  when a word is equal to its reverse then its a palindrome.
  if we get a palindrome we return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: false");
  console.log("=>", isPalindrome("mama"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
