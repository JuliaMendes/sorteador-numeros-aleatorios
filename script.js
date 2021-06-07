raffleQuantity = document.querySelector('#raffleQuantity')
minQuantity = document.querySelector('#minQuantity')
maxQuantity = document.querySelector('#maxQuantity')
btn = document.querySelector('button')
textArea = document.querySelector('textarea')

let valueMin, valueMax, t;


btn.addEventListener('click', values )

function values() {
    valueMin = parseInt(minQuantity.value)
    valueMax = parseInt(maxQuantity.value)
    valueRaffle = parseInt(raffleQuantity.value)
    textArea.value = ''
    raffle()
}

function raffle() {
    for (var i = 0; i < valueRaffle; i++) {
        t =  Math.floor(Math.random() * (valueMax - valueMin + 1)) + valueMin
        textArea.value += t + '   '
     }  
}
