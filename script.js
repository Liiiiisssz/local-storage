const input = document.querySelector('.input')
const nome = document.querySelector('.nome')
const contador = document.querySelector('.contador')
const tema = document.querySelector('#tema')
const body = document.body 

nome.textContent = localStorage.getItem("nome") || "Usuário";

const visitsKey = 'siteVisits'
let visitCount = localStorage.getItem(visitsKey)

if(visitCount){
    visitCount = parseInt(visitCount) + 1
} else {
    visitCount = 1
}

localStorage.setItem(visitsKey, visitCount.toString())
contador.textContent = visitCount

input.addEventListener('input', function(){
    nome.textContent = input.value
    localStorage.setItem("nome", input.value)
})

const temaSalvo = localStorage.getItem("tema") || "claro"
tema.value = temaSalvo
body.classList.toggle('dark-theme', temaSalvo === 'escuro')

tema.addEventListener('change', () =>{
    const newTheme = tema.value
    localStorage.setItem("tema", newTheme)
    body.classList.toggle('dark-theme', newTheme === 'escuro')
})