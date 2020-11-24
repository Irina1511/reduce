// let numbers = [1, 2, 3, 4, 5],
//   total = 0;
// numbers.forEach(function(number) {
//   total += number;
// });
// console.log(total);

const total = [1, 2, 3, 4, 5].reduce(function(acc, currItem) {
  return acc + currItem;
}, 0);
console.log(total);
