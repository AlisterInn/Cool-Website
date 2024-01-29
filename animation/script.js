const words = "Jyoti Singh Rojariya"; /* Add more word as needed */

const ANIMATION_DURATION = 4000; //ms

/* Seprate each character into it's own div */
const characters = words.split("").forEach((char, i) => {
    function createElement(offset) {
        const div = document.createElement("div");
        div.innerText = char;
        div.classList.add("character");
        div.style.animationDelay = `-${i * (ANIMATION_DURATION / 16) - offset}ms`;

        return div;
    }

    document.getElementById("spiral").append(createElement(0));
    document
        .getElementById("spiral2")
        .append(createElement(-1 * (ANIMATION_DURATION / 2)));
});

function select(el) {
    document.querySelector(".navsearch").classList.remove("active");
    document.querySelector(".active").classList.remove("active");

    el.classList.add("active");

    document.body.style.setProperty('--activeclr', el.dataset.clr);
}

function selectsearch() {
    console.log("select")
    const el = document.querySelector(".navsearch")
    el.classList.toggle("active")
    if (el.classList.contains("active")) {
        document.querySelector(".searchbox").focus()
    }
}