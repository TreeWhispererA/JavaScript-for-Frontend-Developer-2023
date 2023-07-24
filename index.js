let data = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this));
    console.log(this);
  }
  return arr;
};

console.log(data.myMap((el) => el * 2));
