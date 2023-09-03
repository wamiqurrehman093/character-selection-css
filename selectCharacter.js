document.addEventListener("keydown", function (event) {
    if (data.p1.keys.selectionKey.includes(event.key)) {
        selectCharacter("p1")
    } else if (data.p2.keys.selectionKey.includes(event.key)) {
        selectCharacter("p2")
    }
})

function selectCharacter(player) {
    if (!data[player].selectedCharacters.includes(data[player].cursor.parentID) && data[player].selectedCharacters.length < 4) {
        data[player].selectedCharacters.push(data[player].cursor.parentID);
        var playerInfo = document.getElementById("info-" + player)
        var selectedCharacter = playerInfo.getElementsByClassName("sc-" + data[player].selectedCharacters.length)[0]
        var selectCharacterPicture = selectedCharacter.getElementsByClassName("character-picture")[0]
        selectCharacterPicture.src = data[player].mainPicture.src
        if (data[player].selectedCharacters.length === 4) {
            document.getElementById("rb-" + player).classList.remove("not-ready")
            document.getElementById("rb-" + player).classList.add("all-ready")
        }
        player === "p1" ? moveCursor(player, "RIGHT") : moveCursor(player, "LEFT")
    }
}