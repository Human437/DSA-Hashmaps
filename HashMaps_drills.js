const HashMap = require('./HashMap')
const separateChainingHashMap = require('./separate-chaining-hashmap')

function main(){
  let lotr = new separateChainingHashMap(10)
  lotr.MAX_LOAD_RATIO = 0.5
  lotr.SIZE_RATIO = 3
  lotr.set("Hobbit","Bilbo")
  lotr.set('Hobbit','Frodo')
  lotr.set('Wizard','Gandalf')
  lotr.set('Human','Aragorn')
  lotr.set('Elf','Legolas')
  lotr.set('Maiar','The Necromancer')
  lotr.set('Maiar','Sauron')
  lotr.set('RingBearer',"Gollum")
  lotr.set('LadyOfLight',"Galadriel")
  lotr.set('HalfElven','Arwen')
  lotr.set('Ent','TreeBeard')
  // console.log(lotr.get('Maiar'))
  // console.log(lotr.get('Hobbit'))
  return lotr
}

console.log(main())

// There isn't a discrepancy since you are just replacing the orignal values for Hobbit
// and Maiar when you do a 2nd call using the same key