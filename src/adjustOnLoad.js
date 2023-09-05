function adjustCursor(player) {
    if (window.innerWidth <= 720) {
        data.rowLength = 6;
    } else if (window.innerWidth <= 920) {
        data.rowLength = 8;
    } else {
        data.rowLength = 4;
    }
    changeCursorTo(player, data.rowLength);
}

adjustCursor("p2");
