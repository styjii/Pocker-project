const image         = document.querySelectorAll(".container-image img")
const btn_rotate    = document.getElementsByClassName("btn-next")[0]
const btn_icon      = document.querySelectorAll(".container > .btn button")
const mousemove     = document.querySelector(".mousemove")
const chemin        = document.querySelector(".chemin").href
let folder          = ["coeur/", "coeur-inverse/", "carreau/", "trefle/"]
let show            = true

let b = 1, c = 1