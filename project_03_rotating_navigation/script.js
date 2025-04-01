const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

function toggleNav(action) {
    container.classList[action]("show-nav");
}

if (open && close && container) {
    

    open.addEventListener("click", () => toggleNav("add"));
    close.addEventListener("click", () => toggleNav("remove"));
} else {
    console.error("Required elements not found in the DOM.");
}