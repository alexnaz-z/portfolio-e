
const menuToggle = document.getElementById("menuToggle");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");

    const isOpen = menuToggle.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});



const sections = document.querySelectorAll("#home, #section1, #section2");
const navLinks = document.querySelectorAll("nav ul li a");

function updateActiveLink() {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - window.innerHeight * 0.35) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);




// Discourage mobile long-press
document.querySelectorAll("img").forEach((img) => {

    // Prevent right-click (desktop)
    img.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    });

    // Prevent dragging (desktop)
    img.addEventListener("dragstart", (e) => {
        e.preventDefault();
    });

    // Prevent long-press context menu (mobile)
    img.addEventListener("touchstart", (e) => {
        // Allow normal touch interaction
    }, { passive: true });

});



