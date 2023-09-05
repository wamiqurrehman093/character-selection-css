function changeCursorTo(player, position) {
    var characterElement = document.getElementById("c-" + position);
    var characterPicture = characterElement.getElementsByClassName("character-picture")[0];
    data[player].cursor.element.classList.remove(player + "-cursor");
    characterPicture.classList.add(player + "-cursor");
    data[player].cursor.element = characterPicture;
    data[player].cursor.parentID = "c-" + position;
    data[player].mainPicture.src = characterPicture.src;
}
