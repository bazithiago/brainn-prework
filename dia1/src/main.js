import './style.css'

document.querySelector('[data-js="app"]').innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
  `

  const createLink = document.createElement('a');
  document.body.appendChild(createLink);
  document.querySelector('a').innerHTML = `
    Clique aqui
  `

  const link = document.querySelector('a');
  link.addEventListener('click', ()=>{
    const app = document.querySelector('.app');
    app.classList.toggle('hidden')
  }, false)


