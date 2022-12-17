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

// I think this function can be made half the size it is now by making the first if and elses reusable with dynamic inputs based of array chosen
function recordMessage(msgArray) {
    var currentMsg = getRandomMessage(msgArray)
    if (affirmSelect.checked) {
        var msgIndex = affirmations.indexOf(currentMsg)
        if (currentMsg) {
            usedAffirmations.push(currentMsg)
            displayNewMsg(currentMsg)
            affirmations.splice(msgIndex, 1)
        } else {
            resetMessages('a')
            alert('You have seen all the affirmations. Feel free to look at the mantras, the affirmation messages will now reset.')
        }
    } else {
        var msgIndex = mantras.indexOf(currentMsg)
        if (currentMsg) {
            usedMantras.push(currentMsg)
            displayNewMsg(currentMsg)
            mantras.splice(msgIndex, 1)
        } else {
            resetMessages('m')
            alert('You have seen all the mantras. Feel free to look at the affirmations, the mantra messages will now reset.')
        }
    }
    
}

function resetMessages(code) {
    if (code === 'a') {
        affirmations = usedAffirmations.splice(0)
        recordMessage(affirmations)
    } else {
        mantras = usedMantras.splice(0)       
        recordMessage(mantras)
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