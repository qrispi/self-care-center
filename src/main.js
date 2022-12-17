var receiveMsgButton = document.getElementById('receive-button')
var affirmSelect = document.getElementById('affirm-button')
var mantraSelect = document.getElementById('mantra-button')
var messageBox = document.querySelector('.message-section')

receiveMsgButton.addEventListener('click', retrieveSelection)

function retrieveSelection(event) {
    event.preventDefault()
    if (affirmSelect.checked) {
        recordMessage(affirmations)
    } else if (mantraSelect.checked) {
        recordMessage(mantras)
    } else {
        alert('Please select which type of message you would like to receive')
    }
}

function recordMessage(msgArray) {
    var currentMsg = getRandomMessage(msgArray)
    if (affirmSelect.checked) {
        var msgIndex = affirmations.indexOf(currentMsg)
        affirmations.splice(msgIndex, 1)
        if (currentMsg) {
            usedAffirmations.push(currentMsg)
        }
        if (affirmations.length > 0) {
            displayNewMsg(currentMsg)
        } else {
            alert('You have seen all the affirmations. Please refresh the page or select a mantra.')
        }
    } else {
        var msgIndex = mantras.indexOf(currentMsg)
        mantras.splice(msgIndex, 1)
        if (currentMsg) {
            usedMantras.push(currentMsg)
        }
        if (mantras.length > 0) {
            displayNewMsg(currentMsg)
        } else {
            alert('You have seen all the mantras. Please refresh the page or select a affirmation.')
        }
    }
    
}

function displayNewMsg(currentMsg) {
    messageBox.innerHTML = `
    <p>${currentMsg}</p>
    `
}

function getRandomMessage(array) {
    var randomNum = Math.floor(Math.random() * array.length)
    return array[randomNum]
}