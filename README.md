# fizzbuzz
Solution from my first week of working on javascript.  There are notes and a few other files thrown in here, but the main solution is in the public directory under main.js.

Final solution: 

for (let i = 0; i <= 100; i++) {
  let out = ''
  if (i % 3 === 0) out += 'fizz'
  if (i % 5 === 0) out += 'buzz'
  if (out === ''){
    out = i
  }
  console.log(out)
}
