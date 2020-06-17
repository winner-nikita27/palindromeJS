const enterText = prompt('Enter the number or string').toLocaleLowerCase();
const palindrome = enterText.split('').reverse().join('');

const ifPalindrome = () => {
  if (enterText === palindrome) {
    return true;
  } else if (enterText !== palindrome) {
    return false;
  } else {
    return false;
  }
};
console.log(ifPalindrome());
