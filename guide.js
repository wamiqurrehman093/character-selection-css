var modal = document.getElementById("guide-modal");

var closeButton = modal.getElementsByClassName("close")[0];

closeButton.onclick = function () {
    modal.style.display = "none";
    timer = setInterval(updateTimer, 1000)
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        timer = setInterval(updateTimer, 1000)
    }
}