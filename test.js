// sample code for search catalog and array based on DMG template 


const selectElement = document.querySelector("#album-choice")

window.onload = main

function main () {
    // loadImages()
    populateAlbumDropdown()
}

function populateAlbumDropdown() {

    // The target of a form's "submit" event is the form.
    // The target of a click event is the element clicked.
    // The target of a change event is the element changed. 

    selectElement.onchange = handleAlbumChange

    for (const album of albums) {
        // Example: <option value="album.folder">album.name</option>

        // 1. Create a new empty element by tag name:
        const option = document.createElement("option")

        // 2. Customize the new baby element:
        option.value = album.folder
        option.innerText = album.name

        // 3. Add it to a branch which is already on the page:
        selectElement.append(option)
    }
}

function handleAlbumChange (event) {
    // The "event" object describes the event that occurred.
    // "event.target" is the element that is the target of the event. In other words, in the case of an "onchange" event, event.target is the element that changed ("<select>"). In the case of a "click" event, event.target is the element that was clicked.

    console.log(event.target.value)
    console.log(selectElement.value)
    const selectedAlbumFolder = selectElement.value

    // This function determines whether a given album is the one the user selected.
    // When this function returns TRUE, the find() method will consider it's job done.
    const albumFolderByUserChoice = album => album.folder === selectedAlbumFolder

    // The find() method will search the "albums" array for an album which meets the condition set by albumFolderByUserChoice()
    const selectedAlbum = albums.find(albumFolderByUserChoice)

    const parentElement = document.querySelector("main")
    
    // Remove the current contents of <main>, so we don't keep adding tons of images, we're removing the old images first.
    parentElement.replaceChildren()  // parentElement.innerHTML = ""

    for (const path of selectedAlbum.paths) {
        // VISUALIZE THE GOAL: <img class="card" src="insert-image-path-here">

        // 1. Create the empty element by tag name:
        const imageElement = document.createElement("img")

        // 2. Customize it in some way:
        imageElement.setAttribute("src", `images/${selectedAlbumFolder}/${path}`)
        imageElement.classList.add("img-thumbnail", "gallery-image")

        // 3. Add it to an existing branch on the DOM tree:
        parentElement.append(imageElement)
    }

    console.log(parentElement)
}
