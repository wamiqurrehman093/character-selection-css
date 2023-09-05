var characters = document.getElementsByClassName("character-picture");

function setupInputUsingMouse(){
    for (var i = 0; i < characters.length; i++){
        characters[i].addEventListener("click", function(event){
            var elementID = event.currentTarget.parentElement.id
            var elementIndex = parseInt(elementID.split("-")[1])
            if (data.p1.selectedCharacters.length < 4) {
                if (elementID === data.p1.cursor.parentID) {
                    selectCharacter("p1")
                } else {
                    changeCursorTo("p1", elementIndex)
                }
            } else if (data.p2.selectedCharacters.length < 4) {
                if (elementID === data.p2.cursor.parentID) {
                    selectCharacter("p2")
                } else {
                    changeCursorTo("p2", elementIndex)
                }
            }
        })
    }
}

setupInputUsingMouse();

/* function moveP1Cursor(key){
    if (key === "w") {
        moveCursor("p1", "UP")
    } else if (key === "a") {
        moveCursor("p1", "LEFT")
    } else if (key === "s") {
        moveCursor("p1", "DOWN")
    } else {
        moveCursor("p1", "RIGHT")
    }
}

function moveP2Cursor(key){
    if (key === "ArrowUp") {
        moveCursor("p2", "UP")
    } else if (key === "ArrowLeft") {
        moveCursor("p2", "LEFT")
    } else if (key === "ArrowDown") {
        moveCursor("p2", "DOWN")
    } else {
        moveCursor("p2", "RIGHT")
    }
}

function moveCursor(player, action) {
    var currentParentIndex = parseInt(data[player].cursor.parentID.split("-")[1])
    var nextParentIndex = 0;
    
    if (action === "UP") {
        nextParentIndex = currentParentIndex - data.rowLength
    } else if (action === "DOWN") {
        nextParentIndex = currentParentIndex + data.rowLength       
    } else if (action === "LEFT") {
        nextParentIndex = currentParentIndex - 1
    } else {
        nextParentIndex = currentParentIndex + 1
    }
    
    if (nextParentIndex < 1) {
        nextParentIndex = data.maxCharacters + nextParentIndex
    } else if (nextParentIndex > data.maxCharacters) {
        nextParentIndex = nextParentIndex - data.maxCharacters
    }
    
    changeCursorTo(player, nextParentIndex);
}

function changeCursorTo(player, position) {
    var characterElement = document.getElementById("c-" + position);
    var characterPicture = characterElement.getElementsByClassName("character-picture")[0];
    data[player].cursor.element.classList.remove(player + "-cursor");
    characterPicture.classList.add(player + "-cursor");
    data[player].cursor.element = characterPicture;
    data[player].cursor.parentID = "c-" + position;
    data[player].mainPicture.src = characterPicture.src;
} */
