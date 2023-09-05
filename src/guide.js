var modal = document.getElementById("controls-guide-modal");
modal.style.display = "block";

if ('ontouchstart' in window || (window.DocumentTouch && document instanceof DocumentTouch) || navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0) {
    document.getElementById("mouse-controls-guide").style.display = "block";
} else {
    document.getElementById("keyboard-controls-guide").style.display = "block";
}

var closeButtons = modal.getElementsByClassName("close");

for (var i = 0; i < closeButtons.length; i++){
    closeButtons[i].onclick = function () {
        modal.style.display = "none";
        timer = setInterval(updateTimer, 1000)
    }
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        timer = setInterval(updateTimer, 1000)
    }
}

function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (/Linux/.test(platform)) {
        os = 'Linux';
    }

    return os;
}