const HashMap = require('./HashMap')

function isAnagramPalindrome(str){
  let isPalindrome = false
  let possibleAnagramStr = str +str
  for(let i =0;i<str.length;i++){
    let possiblePalindrome = possibleAnagramStr.slice(i,i+str.length)
    let reversedString =''
    for(let j = possiblePalindrome.length-1;j>-1;j--){
      reversedString += possiblePalindrome[j]
    }
    if(reversedString === possiblePalindrome){
      isPalindrome = true
      break
    }
  }
  return isPalindrome
}

console.log(isAnagramPalindrome("acecarr"))
console.log(isAnagramPalindrome("north"))