import './style.css'

document.querySelector('[data-js="app"]').innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
  `

  const createLink = document.createElement('a');
  document.body.appendChild(createLink);
  document.querySelector('a').setAttribute('data-js','link')
  document.querySelector('[data-js="link"]').innerHTML = `
    Clique aqui
  `

  const link = document.querySelector('[data-js="link"]');
  link.addEventListener('click', (e)=>{
    e.preventDefault();
    const app = document.querySelector('[data-js="app"]');
    app.classList.toggle('hidden')
  }, false)


