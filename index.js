let arr = [
  { id: 1, age: 12, name: 'Manu' },
  { id: 2, age: 24, name: 'Quincy' },
  { id: 3, age: 22, name: 'Abbey' },
];

let toYoung = arr.reduce((acc, currentObj) => acc + currentObj.age, 0);
console.log(toYoung);
// forEach is similiar with map but it doesn't return ARRAY
