var menu = document.querySelector(".menu");
var ul = document.querySelector("#ul");
var nav = document.querySelector("#navbar");
var intro = document.querySelector("#intro");
var message = document.querySelector("#message");
var closeAlert = document.querySelector(".closeAlert");
var alertDiv = document.querySelector(".alert");
var winwid = window.innerWidth;
var winHt = window.innerHeight - 65;
console.log("hii");
if (winwid < 768) {
    intro.style.minHeight = winHt + "px";
    intro.style.maxHeight = winHt + "px";
}

window.addEventListener("resize", () => {
    winHt = window.innerHeight - 65;
    winwid = window.innerWidth;
    if (winwid > 768) {
        ul.style.display = "flex";
        nav.style.display = "flex";
        menu.style.display = "none";
        intro.style.minHeight = "700px";
    }
    else {
        ul.style.display = "none";
        nav.style.display = "flex";
        menu.style.display = "block";
        intro.style.minHeight = winHt + "px";
        intro.style.maxHeight = winHt + "px";

    }
});
var navHidden = true;
menu.addEventListener("click", () => {
    winwid = window.innerWidth;
    if (winwid < 768) {
        if (navHidden) {
            ul.style.display = "block";
            menu.style.top = "7px";
            menu.setAttribute("class", "fa fa-times menu");
            nav.style.display = "block";
            navHidden = false;
        } else {
            ul.style.display = "none";
            menu.style.top = "7px";
            menu.setAttribute("class", "fa fa-bars menu");
            nav.style.display = "flex";
            navHidden = true;
        }
    }
    else {
        ul.style.display = "flex";
        nav.style.display = "flex";
    }
});
// CLOSE alert
closeAlert.addEventListener("click", () => {
    alertDiv.remove();
});
var msg = message.innerHTML;
console.log(msg);
if (msg == "" || msg == NULL || msg == undefined) {
    alertDiv.style.display = "none";
} else {
    alertDiv.style.display = "block";
}
setTimeout(() => {
    alertDiv.remove();
}, 3000);