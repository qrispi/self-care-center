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
    var msgIndex = msgArray.indexOf(currentMsg)
    if (currentMsg) {
        displayNewMsg(currentMsg)
        msgArray.splice(msgIndex, 1)
        if (msgArray === mantras) {
            usedMantras.push(currentMsg)
        } else {
            usedAffirmations.push(currentMsg)
        }
    } else {
        refreshMessages(msgArray)
    }
}

function resetArrays(msgArray) {
    if (msgArray === affirmations) {
        affirmations = usedAffirmations.splice(0)
    } else {
        mantras = usedMantras.splice(0)       
    }
}

function displayNewMsg(currentMsg) {
    messageBox.innerHTML = `
    <p>${currentMsg}</p>
    `
}

function refreshMessages(msgArray) {
    if (msgArray === mantras) {
        messageBox.innerHTML = 
        '<p>&#10024 You have seen all the Mantras! &#10024</p><p><i>The mantras will now reset.</i></p>'
        resetArrays(msgArray)
    } else {
        messageBox.innerHTML = '<p>&#10024 You have seen all the Affirmations! &#10024</p><p><i>The affirmations will now reset.</i></p>'
        resetArrays(msgArray)
    }
}

function getRandomMessage(array) {
    var randomNum = Math.floor(Math.random() * array.length)
    return array[randomNum]
}