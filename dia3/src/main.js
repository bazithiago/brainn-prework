import './style.css'

///////// EXERCICIO 1
// const inputName = document.querySelector('[data-js="name"]')
// const exceptions = ['de', 'da', 'do', 'dos']

// const capitalize = function(e) {
  //   e.target.value = inputName.value
  //       .toLowerCase()
//       .split(' ')
//       .map(function(word) {
//           return word[0].toUpperCase() + word.substr(1);
//       })
//       .join(' ');
// }
// inputName.addEventListener('keyup', capitalize)

const inputName = document.querySelector('[data-js="name"]')
const exceptions = ['da', 'de', 'do', 'das', 'dos']

inputName.addEventListener('input', (e) => {
  const valueAsArray = e.target.value.split(' ')

  e.target.value = valueAsArray.map((word)=>{
    return exceptions.includes(word.toLowerCase())
      ? word.toLowerCase()
      : fixCase(word)
  }).join(' ')
})

function fixCase(word) {
  if (word.lengh === 0) {
    return ''
  }
  return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`
}




///////// EXERCICIO 2
const checkboxes = document.querySelectorAll('[data-js="colors-selector"')
const colors = document.querySelectorAll('[data-js="colors-box"')

console.log(checkboxes)
console.log(colors)

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', (e) => {
    return e.target.value
  })

});

