function scrollFunction() {
    if (window.scrollY > 10 && document.querySelector("#logo").classList.contains("fullscreen")) {
        document.querySelector("#logo").classList.toggle("fullscreen");
    }
    if (window.scrollY < 10 && !document.querySelector("#logo").classList.contains("fullscreen")) {
        document.querySelector("#logo").classList.toggle("fullscreen");
    }
}

window.addEventListener("scroll", scrollFunction);

function scrollDown() {
    window.scrollTo(0, (window.innerHeight - 100));
}