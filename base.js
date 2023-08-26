var currentP2Cursor = document.getElementsByClassName("p2-cursor")[0];
var cc2Picture = document.getElementById("cc-2").getElementsByClassName("character-picture")[0];

function adjustP2Cursor() {
    if (window.innerWidth <= 720) {
        var character6 = document.getElementById("c-6");
        var c6Picture = character6.getElementsByClassName("character-picture")[0];
        currentP2Cursor.classList.remove("p2-cursor");
        c6Picture.classList.add("p2-cursor");
        currentP2Cursor = c6Picture;
        changeCc2Picture();
    } else if (window.innerWidth <= 920) {
        var character8 = document.getElementById("c-8");
        var c8Picture = character8.getElementsByClassName("character-picture")[0];
        currentP2Cursor.classList.remove("p2-cursor");
        c8Picture.classList.add("p2-cursor");
        currentP2Cursor = c8Picture;
        changeCc2Picture();
    } else {
        var character4 = document.getElementById("c-4");
        var c4Picture = character4.getElementsByClassName("character-picture")[0];
        currentP2Cursor.classList.remove("p2-cursor");
        c4Picture.classList.add("p2-cursor");
        currentP2Cursor = c4Picture;
        changeCc2Picture();
    }
}

function changeCc2Picture(){
    cc2Picture.src = currentP2Cursor.src;
}

adjustP2Cursor();

window.addEventListener("resize", adjustP2Cursor)