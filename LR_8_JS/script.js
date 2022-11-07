function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

let shape = document.querySelector(".shape");
let topinp = document.querySelector(".top")
let rightinp = document.querySelector(".right")
let bottominp = document.querySelector(".bottom")
let leftinp = document.querySelector(".left")
let codecont = document.querySelector(".code-value")

// select all inputs
let rangeinps = document.querySelectorAll(".range")

rangeinps.forEach((inp) => {
    inp.addEventListener("change", () => {
        codecont.innerHTML = `${topinp.value}px ${rightinp.value}px ${bottominp.value}px ${leftinp.value}px`
        shape.style.borderRadius = `${topinp.value}px ${rightinp.value}px ${bottominp.value}px ${leftinp.value}px`
    })
})


let codecont_opacity = document.querySelector(".code-value-opacity")
let value_opacity = document.querySelector(".value-opacity")
let shape_opacity = document.querySelector(".shape-opacity")
let rangeopa = document.querySelectorAll(".range-opacity")
rangeopa.forEach((inp) => {
    inp.addEventListener("change", () => {
        codecont_opacity.innerHTML = `${value_opacity.value/100};`
        shape_opacity.style.opacity = `${value_opacity.value/100}`
    })
})



let codecont_max_width = document.querySelector(".code-value-max-width")
let value_max_width = document.querySelector(".value-max-width")
let shape_max_width = document.querySelector(".shape-max-width")
let rangemax = document.querySelectorAll(".range-max-width")
rangemax.forEach((inp) => {
    inp.addEventListener("change", () => {
        codecont_max_width.innerHTML = `${value_max_width.value*10}px`
        shape_max_width.style.maxWidth = `${value_max_width.value*10}px`
    })
})