
const inputName = document.querySelector('[data-js="name"]')
const exceptions = ['de', 'da', 'do', 'dos']

const capitalize = function(e) {
  e.target.value = inputName.value
      .toLowerCase()
      .split(' ')
      .map(function(word) {
          return word[0].toUpperCase() + word.substr(1);
      })
      .join(' ');
}


inputName.addEventListener('keyup', capitalize)

