var receiveMsgButton = document.getElementById('receive-button')
// var yogaMonk = document.getElementById('dude')
var affirmSelect = document.getElementById('affirm-button')
var mantraSelect = document.getElementById('mantra-button')
var messageBox = document.querySelector('.message-section')
// var userForm = document.querySelector('form')

// var userSelectAffirm = affirmSelect.value
// var userSelectMantra = mantraSelect.value

var selection

// userForm.addEventListener('submit', retrieveSelection)
receiveMsgButton.addEventListener('click', retrieveSelection)

function retrieveSelection(event) {
    event.preventDefault()
    console.log('affirm select', affirmSelect.checked)
    console.log('mantra select', mantraSelect.checked)
    if (affirmSelect.checked) {
        selection = affirmations
        displayNewMsg()
    } else if (mantraSelect.checked) {
        selection = mantras
        displayNewMsg()
    } else {
        alert('Please select which type of message you would like to receive')
    }
}


function displayNewMsg() {
    console.log('var selection = ', selection)
    messageBox.innerHTML = `
    <p>${getRandomMessage(selection)}</p>
    `
}

function getRandomMessage(array) {
    var randomNum = Math.floor(Math.random() * array.length)
    return array[randomNum]
}