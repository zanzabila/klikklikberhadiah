// state 1 => unopened
// state 2 => opened
// state 3 => closed after opening
// flow: 1-2-3-2-3-...

let state = 1;
var body = document.body;
var img1 = document.getElementById("image1");
var img2 = document.getElementById("image2");
var img3 = document.getElementById("image3");

body.onclick = function() {
    switch(state) {
        case 1:
            fade(img1, img2)
            state = 2;
            break;
        case 2:
            fade(img2, img3);
            state = 3;
            break;
        case 3:
            fade(img3, img2);
            state = 2;
            break;
        default:
            break;
    }
}

function fade(el1, el2) {
    el1.classList.remove("opaque");
    el2.classList.add("opaque");
}