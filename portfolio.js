window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);

}

function toggleMenu() {
    console.log("toggleMenu");

    document.querySelector("#menulinje").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menulinje").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "✕";
    }
}


// When the user scrolls down 600px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};


function scrollFunction() {
    console.log("scrollFunction");
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.querySelector("#backtotop").style.display = "block";
    } else {
        document.querySelector("#backtotop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Om mig side
//For at lave en animeret fold ud box tilføjer jeg: max-height: 0, overflow: hidden og transition til: max-height 0.2s ease-out i mit css. Derefter bruger JavaScript til at glide indholdet ned ved at indstille en beregnet maksimalhøjde afhængigt af panelets højde på forskellige skærmstørrelser.

let coll = document.getElementsByClassName("collapsible");
let i;

//for = loops through a block of code a number of times
for (i = 0; i < coll.length; i++) {

    coll[i].addEventListener("click", function () {

        //Toggle : tænd/sluk funktion

        this.classList.toggle("active");

        let content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
