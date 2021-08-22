import './style.css'

const form = document.querySelector('[data-js="cars-form"]')
const table = document.querySelector('[data-js="table"]')

const getFormElement = (event) => (elementName) => {
  return event.target.elements[elementName]
}

const elementTypes = {
  image: createImage,
  text: createText,
  color: createColor
}

function createImage(data){
  const td = document.createElement('td')
  const img = document.createElement('img')
  img.src = data.src;
  img.alt = data.alt;
  img.style.width = '100px'
  td.appendChild(img)
  return td
}

function createText(value){
  const td = document.createElement('td')
  td.textContent = value
  return td
}

function createColor(value){
  const td = document.createElement('td')
  const div = document.createElement('div')
    div.style.width = '100px'
    div.style.height = '100px'
    div.style.backgroundColor = value
  td.appendChild(div)
  return td
}



form.addEventListener('submit', (e) => {
  e.preventDefault()
  const getElement = getFormElement(e)

  const data = {
    image: getElement('image').value,
    brandModel: getElement('brand-model').value,
    year: getElement('year').value,
    plate: getElement('plate').value,
    color: getElement('color').value
  }
  console.log(data)
  createTableRow(data)

  e.target.reset()
})

///////////////

function createTableRow(data) {
  const elements = [
    { type: 'image', value: { src: data.image, alt: data.brandModel }},
    { type: 'text', value: data.brandModel },
    { type: 'text', value: data.year },
    { type: 'text', value: data.plate },
    { type: 'color', value: data.color }
  ]
  console.log(elements)
  const tr = document.createElement('tr')
  elements.forEach(element => {
    const td = elementTypes[element.type](element.value)
    tr.appendChild(td)
  })
  table.appendChild(tr)
}

function createNoCarRow() {
  const tr = document.createElement('tr')
  const td = document.createElement('td')
  const ths = document.querySelectorAll('th')
  td.setAttribute('colspan', ths.length)
  td.textContent = 'Nenhum carro encontrado'
  tr.appendChild(td)
  table.appendChild(tr)
}



const url = 'http://localhost:3333/cars'
async function main() {
  const result = await fetch(url)
    .then(result => result.json())
    .catch(error => ({ error: true, message: error.message}))

    if (result.error) {
      console.log(result.message)
      return
    }

    if (result.length === 0) {
      createNoCarRow()
      return
    }

    result.forEach(car => {
      createTableRow(car)
    })
}

main()
