var receiveMsgButton = document.getElementById('receive-button')
var yogaMonk = document.getElementById('dude')
var messageBox = document.querySelector('.message-section')

receiveMsgButton.addEventListener('click', displayNewMsg)

function displayNewMsg(event) {
    event.preventDefault()
    messageBox.innerHTML = `
    <p>${getRandomMessage(mantras)}</p>
    `
}

function getRandomMessage(array) {
    var randomNum = Math.floor(Math.random() * array.length)
    return array[randomNum]
}

var affirm = getRandomMessage(affirmations)

console.log(affirm)


