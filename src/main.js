var receiveMsgButton = document.getElementById('receive-button')
var affirmSelect = document.getElementById('affirm-button')
var mantraSelect = document.getElementById('mantra-button')
var messageBox = document.querySelector('.message-section')

receiveMsgButton.addEventListener('click', retrieveSelection)

function retrieveSelection(event) {
    event.preventDefault()
    if (affirmSelect.checked) {
        updateDataModel(affirmations)
    } else if (mantraSelect.checked) {
        updateDataModel(mantras)
    } else {
        askUserToChoose()
    }
}

function askUserToChoose() {
    messageBox.innerHTML = '<p>&#10024 To receive zen knowledge, please select <i>affirmation</i> or <i>mantra</i> above! &#10024</p>'
}

function updateDataModel(msgArray) {
    var currentMsg = getRandomMessage(msgArray)
    var msgIndex = msgArray.indexOf(currentMsg)
    if (currentMsg) {
        displayNewMessage(currentMsg)
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

function resetArray(msgArray) {
    if (msgArray === affirmations) {
        affirmations = usedAffirmations.splice(0)
    } else {
        mantras = usedMantras.splice(0)       
    }
}

function displayNewMessage(currentMsg) {
    messageBox.innerHTML = `<p class="msg-text">${currentMsg}</p>`
}

function refreshMessages(msgArray) {
    if (msgArray === mantras) {
        messageBox.innerHTML = '<p>&#10024 You have seen all the Mantras! &#10024</p><p class="reset-text">The mantras will now reset.</p>'
        resetArray(msgArray)
    } else {
        messageBox.innerHTML = '<p>&#10024 You have seen all the Affirmations! &#10024</p><p class="reset-text">The affirmations will now reset.</p>'
        resetArray(msgArray)
    }
}

function getRandomMessage(array) {
    return array[Math.floor(Math.random() * array.length)]
}