const nav = document.querySelector(".sidebar");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("expanded", false);
    }
})