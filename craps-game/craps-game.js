// HTML Elements ID's
const crapsUsernameInput = "craps-username-input"
const crapsRegistrationPane = "craps-registration-pane"
const crapsMainSection = "craps-main-section"

function registeredcrapsplayer() {
    let crapsUsername = (document.getElementById(craps-username-input).value)
    alert("Got it:" + crapsUsername)
    removeRegistrationPane()
}

function removeRegistrationPane () {
    document.getElementById(crapsRegistrationPane).style.display = "none"
}

function showMainGameSection () {
    document.getElementById(crapsMainSection).style.display = "block"

}
