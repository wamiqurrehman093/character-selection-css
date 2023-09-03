var data = {
    "p1": {
        "cursor": {
            "element": document.getElementsByClassName("p1-cursor")[0],
            "parentID": document.getElementsByClassName("p1-cursor")[0].parentElement.id,
        },
        "mainPicture": document.getElementById("cc-1").getElementsByClassName("character-picture")[0],
        "keys": {
            "movementKeys": ["w", "a", "s", "d"],
            "selectionKey": " "
        },
        "selectedCharacters": []
    },
    "p2": {
        "cursor": {
            "element": document.getElementsByClassName("p2-cursor")[0],
            "parentID": document.getElementsByClassName("p2-cursor")[0].parentElement.id,
        },
        "mainPicture": document.getElementById("cc-2").getElementsByClassName("character-picture")[0],
        "keys": {
            "movementKeys": ["ArrowUp", "ArrowLeft", "ArrowDown", "ArrowRight"],
            "selectionKey": "Enter"
        },
        "selectedCharacters": []
    },
    "rowLength": 4,
    "maxCharacters": 24
}