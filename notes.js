const fruits = ['apple', 'banana', 'kiwi', 'eggplant']

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i] + " is a fruit.")
  if (i % 2 === 0) {
    console.log(i + ' is an even number.')
  } else {
    console.log(i + ' is an odd number.')
  }
}

console.log('----')
let i = 0
while (i < fruits.length) {
  console.log(fruits[i] + " is a fruit.")
  i++
}

if (i % 2 === 0) {
  console.log(i + ' is an even number.')
}
