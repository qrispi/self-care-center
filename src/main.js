var receiveMsgButton = document.getElementById('receive-button')
var affirmSelect = document.getElementById('affirm-button')
var mantraSelect = document.getElementById('mantra-button')
var messageBox = document.querySelector('.message-section')

receiveMsgButton.addEventListener('click', retrieveSelection)

function retrieveSelection(event) {
    event.preventDefault()
    if (affirmSelect.checked) {
        displayNewMsg(affirmations)
    } else if (mantraSelect.checked) {
        displayNewMsg(mantras)
    } else {
        alert('Please select which type of message you would like to receive')
    }
}

function displayNewMsg(msgArray) {
    messageBox.innerHTML = `
    <p>${getRandomMessage(msgArray)}</p>
    `
}

function getRandomMessage(array) {
    var randomNum = Math.floor(Math.random() * array.length)
    return array[randomNum]
}