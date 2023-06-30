
  // Write your algorithm here

function isPalindrome(word) {
  let start = 0; // Pointer pointing to the start of the string
  let end = word.length - 1; // Pointer pointing to the end of the string
  
  while (start <= end) {
    if (word[start] !== word[end]) {
      return false; // Characters at start and end pointers are not equal, so it's not a palindrome
    }
    start++; // Move the start pointer one step forward
    end--; // Move the end pointer one step backward
  }
  
  return true; // If the loop completes without returning false, the string is a palindrome
}


/*
The isPalindrome function takes a string as input and checks if it is a palindrome by comparing characters from the start and end of the string towards the middle.
It uses two pointers, start and end, initialized at the beginning and end of the string, respectively, and iterates until the pointers meet or cross each other.
If at any point the characters at the start and end pointers are not equal, the function returns false, indicating that the string is not a palindrome. If the loop completes without returning false, the function returns true, indicating that the string is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
