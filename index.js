let arr = [
  { id: 1, age: 12, name: 'Manu' },
  { id: 2, age: 24, name: 'Quincy' },
  { id: 3, age: 22, name: 'Abbey' },
];

let names = arr.forEach((el) => {
  el.age += 10;
});
console.log(arr);
// forEach is similiar with map but it doesn't return ARRAY
