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
