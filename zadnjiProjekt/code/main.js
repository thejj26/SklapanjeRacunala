/*Materialize carousel*/
M.AutoInit()

$(document).ready(function () {
    $('.carousel').carousel({
        numVisible: 1
    })
})

const prev = document.getElementById("prev")
const next = document.getElementById("next")
prev.addEventListener("click", () => {
    $('.carousel').carousel('prev')
})
next.addEventListener("click", () => {
    $('.carousel').carousel('next')
})

/*Animacije na ucitavanje stranice*/

window.addEventListener("load", () => {
    document.getElementById("floatIn").style.opacity = "1"
    document.getElementById("floatIn").style.marginTop = "7vh"
    if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual'
      }
      window.scrollTo({
        behavior: 'smooth',
        top: 1
      });
})

/*Prevencija selektiranja kod brzog klikavanja*/

prev.addEventListener('mousedown', function (e) {
    e.preventDefault()
}, false)
next.addEventListener('mousedown', function (e) {
    e.preventDefault()
}, false)