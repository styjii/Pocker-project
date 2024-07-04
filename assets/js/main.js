btn_rotate.childNodes[0].addEventListener("mousedown", e => {
    e.target.parentNode.classList.add("rotate")
})
btn_rotate.childNodes[0].addEventListener("mouseup", e => {
    e.target.parentNode.classList.remove("rotate")
})
window.addEventListener("mousemove", e => {
    mousemove.style.top = `${e.clientY - 20}px`
    mousemove.style.left = `${e.clientX - 20}px`
})

btn_rotate.addEventListener("click", rotate)
btn_icon[4].addEventListener("click", () => {
    if (show) {
        for (let i = 0; i < image.length; i++) {
            image[i].src = `${chemin}bg-card.PNG`
            show = false
        }
    } else {
        show = true
        rotate(show)
    }
})
for(let i = 0; i < image.length; i++){
    image[i].addEventListener("click", e => {
        switch(e.target.src){
            case `${chemin}bg-card.PNG` :
                e.target.src = `${chemin + folder[0]}image-${i + 1}.PNG`
                break
            case `${chemin + folder[0]}image-${i + 1}.PNG` :
                e.target.src = `${chemin + folder[1]}image-${i + 1}.PNG`
                break
            case `${chemin + folder[1]}image-${i + 1}.PNG` :
                e.target.src = `${chemin + folder[2]}image-${i + 1}.PNG`
                break
            case `${chemin + folder[2]}image-${i + 1}.PNG` :
                e.target.src = `${chemin + folder[3]}image-${i + 1}.PNG`
                break
            case `${chemin + folder[3]}image-${i + 1}.PNG` :
                e.target.src = `${chemin}bg-card.PNG`
                break
            default :
                e.target.src = `${chemin + folder[0]}image-${i + 1}.PNG`
        }
    })
}
for(let i = 0; i < folder.length; i++){
    btn_icon[i].addEventListener("click", () => {
        for(let j = 0; j < image.length; j++){
            image[j].src = `${chemin + folder[i]}/image-${c}.PNG`
            c >= image.length ? c = 1 : c++
        }
    })
}