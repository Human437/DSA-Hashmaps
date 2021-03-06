const HashMap = require('./HashMap')

function anagramGrouper(arr){
  let groupedArray = []
  let anagrams=[]
  for(let i =0;i<arr.length;i++){
    let temp = new HashMap(arr[i].length)
    for(let a =0;a<arr[i].length;a++){
      try{
        temp.set(arr[i][a],get(arr[i][a])+1)
      }catch(error){
        temp.set(arr[i][a],1)
      }
    }
    if (!anagrams.includes(JSON.stringify(temp))){
      anagrams.push(JSON.stringify(temp))
      let tempGroup = []
      tempGroup.push(arr[i])
      for(let j =0;j<arr.length;j++){
        if(j !== i){
          let comparison = new HashMap(arr[j].length)
          for(let b =0;b<arr[j].length;b++){
            try{
              comparison.set(arr[j][b],get(arr[j][b])+1)
            }catch(error){
              comparison.set(arr[j][b],1)
            }
          }
          if (JSON.stringify(comparison) === JSON.stringify(temp)){
            tempGroup.push(arr[j])
          }
        }
      }
      groupedArray.push(tempGroup)
    }
  }
  return groupedArray
}

console.log(anagramGrouper(['east', 'acre', 'race']))
console.log(anagramGrouper(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']))