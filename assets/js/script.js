refrech = a => {
    let k = a
    for (let i = 0; i < image.length; i++) {
        for(let j = 0; j < folder.length; j++){
            if((new RegExp(folder[j])).test(image[i].src)){
                image[i].src = `${chemin + folder[j]}image-${k}.PNG`
                k >= image.length ? k = 1: k++
            }
        }
    }
}
// true to rotate and false to no rotate
rotate = (noFixed = true) => {
    if (noFixed) {
        let l = image.length
        for (let k = 1; k <= image.length; k++) {
            switch (b) {
                case k:
                    refrech(l)
                    break
            }
            l < 1 ? l = image.length: l--
        }
        b >= image.length ? b = 1: b++
    } else {
        if (b == 1) {
            b = 8
        } else {
            b <= 1 ? b = 1: b--
        }
        let l = image.length
        for (let k = 1; k <= image.length; k++) {
            switch (b) {
                case k:
                    refrech(l)
                    break
            }
            l < 1 ? l = image.length: l--
        }
        b >= image.length ? b = 1: b++
    }
}