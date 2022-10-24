/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus visurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

const users = [
  { id: '1', name: 'John Smith', age: 20 },
  { id: '2', name: 'Ann Smith', age: 24 },
  { id: '3', name: 'Tom Jones', age: 31 },
  { id: '4', name: 'Rose Peterson', age: 17 },
  { id: '5', name: 'Alex John', age: 25 },
  { id: '6', name: 'Ronald Jones', age: 63 },
  { id: '7', name: 'Elton Smith', age: 16 },
  { id: '8', name: 'Simon Peterson', age: 30 },
  { id: '9', name: 'Daniel Cane', age: 51 },
];

function getUserAverageAge(users){
  let ageSum = 0
  for (let i = 0; i < users.length; i++){
    ageSum += users[i].age;
  }
  console.log(`Vidutinis vartotojų amžius: ${(ageSum / users.length).toFixed(2)}`)
}

getUserAverageAge(users)

console.log('')
console.log('           <<  Sekantis - vardų masyvas  >>')

function getUsersNames(){
  let nameArray = []
  for (let user of users){
    nameArray.push(user.name)
  }
  console.log(nameArray)
  return nameArray
}
getUsersNames()