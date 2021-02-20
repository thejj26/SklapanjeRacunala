/*Materialize carousel*/
M.AutoInit()

$(document).ready(function () {
    $('.carousel').carousel({
        numVisible: 1
    });
});

window.addEventListener("load", () => {
    document.getElementById("topText").style.opacity = "1"
    document.getElementById("topText").style.marginTop = "7vh"
})

const prev = document.getElementById("prev")
const next = document.getElementById("next")
prev.addEventListener("click", () => {
    $('.carousel').carousel('prev')
})
next.addEventListener("click", () => {
    $('.carousel').carousel('next')
})

/*Prevencija selektiranja kod brzog klikavanja*/

prev.addEventListener('mousedown', function (e) {
    e.preventDefault();
}, false);
next.addEventListener('mousedown', function (e) {
    e.preventDefault();
}, false);