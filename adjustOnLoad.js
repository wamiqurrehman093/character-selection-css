var data = {
    "p1": {
        "cursor": {
            "element": document.getElementsByClassName("p1-cursor")[0],
            "parentID": document.getElementsByClassName("p1-cursor")[0].parentElement.id
        },
        "mainPicture": document.getElementById("cc-1").getElementsByClassName("character-picture")[0],
    },
    "p2": {
        "cursor": {
            "element": document.getElementsByClassName("p2-cursor")[0],
            "parentID": document.getElementsByClassName("p2-cursor")[0].parentElement.id
        },
        "mainPicture": document.getElementById("cc-2").getElementsByClassName("character-picture")[0]
    },
    "rowLength": 4
}

function adjustCursor(player) {
    if (window.innerWidth <= 720) {
        changeCursorTo(player, 6);
    } else if (window.innerWidth <= 920) {
        changeCursorTo(player, 8);
    } else {
        changeCursorTo(player, 4);
    }
}

function changeCursorTo(player, position) {
    var characterElement = document.getElementById("c-" + position);
    var characterPicture = characterElement.getElementsByClassName("character-picture")[0];
    data[player].cursor.element.classList.remove(player + "-cursor");
    characterPicture.classList.add(player + "-cursor");
    data[player].cursor.element = characterPicture;
    data[player].cursor.parentID = "c-" + position;
    data[player].mainPicture.src = characterPicture.src;
    data.rowLength = position;
}

adjustCursor("p2");
