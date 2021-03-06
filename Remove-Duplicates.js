const HashMap = require('./HashMap')

function removeDuplicates(str){
  let newString = ''
  let storage = new HashMap(str.length)
  for(let i =0;i<str.length;i++){
    try{
      storage.get(str[i])
    }catch(error){
      storage.set(str[i],i)
      newString += str[i]
    }
  }
  console.log(storage)
  return newString
}

console.log(removeDuplicates('google'))
console.log(removeDuplicates('google all that you think can think of'))