/*const main = () => {
  document.getElementById('root').textContent = 'Hello, World!'
}

document.addEventListener('DOMContentLoaded', main)*/

for (let i = 0; i < 16; i++) {
  //if (i % 3 === 0 && i % 5 === 0) {
    //console.log('fizzbuzz')
  //}
  if(i % 3 === 0) {
    console.log('fizz')
  } else if (i % 5 === 0) {
    console.log('buzz')
  } else {
    console.log (i)
  }
}
