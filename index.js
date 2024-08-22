
let albumButton = document.getElementById("album-button")
let buttonComponentAlbum = document.getElementById("button-component-album")
albumButton.addEventListener("click", function(){
    if(buttonComponentAlbum.classList.contains("hidden-album")){
        buttonComponentAlbum.classList.remove('hidden-album')
        albumButton.textContent = "Close"

        contactsButton.disabled = true
        contactsButton.style.cursor = "not-allowed"
    }
    else {
        buttonComponentAlbum.classList.add("hidden-album")
        albumButton.textContent = "Album"

        contactsButton.disabled = false
        contactsButton.style.cursor = "alias"
    }
})

let contactsButton = document.getElementById("contacts-button")
let buttonComponentContacts = document.getElementById("button-component-contacts")
contactsButton.addEventListener("click", function(){
    if(buttonComponentContacts.classList.contains("hidden-contacts")){
        buttonComponentContacts.classList.remove('hidden-contacts')
        contactsButton.textContent = "Close"

        albumButton.disabled = true
        albumButton.style.cursor = "not-allowed"
    }
    else {
        buttonComponentContacts.classList.add("hidden-contacts")
        contactsButton.textContent = "Contacts"

        albumButton.disabled = false
        albumButton.style.cursor = "alias"
    }

})

function insideAlbum () {

    
}