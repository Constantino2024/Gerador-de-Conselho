const cod = document.getElementById('codigo')
const conselho = document.getElementById("conselho")
const botao = document.getElementById('botao')

function buscarConselho(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => {
        return response.json()
    })
    .then(data => {
        let advice = data.slip.advice
        let id = data.slip.id
        conselho.innerText = '"'+advice +'"'
        cod.innerText = id
    })
}

buscarConselho()

botao.onclick = () =>{
    buscarConselho()
}