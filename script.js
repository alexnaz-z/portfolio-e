
// EXISTING MENU TOGGLE
// (Keep this if it controls a DIFFERENT menu element)

const menuToggle = document.getElementById("menuToggle");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");

        const isOpen = menuToggle.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });
}


// SCROLL NAVIGATION

const sections = document.querySelectorAll("#home, #section1, #section2");
const navLinks = document.querySelectorAll("nav ul li a");

function updateActiveLink() {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

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


// IMAGE PROTECTION

document.querySelectorAll("img").forEach((img) => {

    img.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    });

    img.addEventListener("dragstart", (e) => {
        e.preventDefault();
    });

    img.addEventListener("touchstart", (e) => {
        // Allow normal touch interaction
    }, { passive: true });

});


// // BURGER MENU ANIMATION

// const menuTogglebg = document.getElementById("menuTogglebg");

// let isAnimating = false;

// if (menuTogglebg) {

//     menuTogglebg.addEventListener("click", () => {

//         if (isAnimating) return;

//         isAnimating = true;

//         const isOpening = !menuTogglebg.classList.contains("active");

//         if (isOpening) {

//             menuTogglebg.classList.add("active");

//             menuTogglebg.setAttribute("aria-expanded", "true");
//             menuTogglebg.setAttribute("aria-label", "Close menu");

//         } else {

//             menuTogglebg.classList.remove("active");
//             menuTogglebg.classList.add("closing");

//             menuTogglebg.setAttribute("aria-expanded", "false");
//             menuTogglebg.setAttribute("aria-label", "Open menu");

//         }

//         setTimeout(() => {

//             if (!isOpening) {
//                 menuTogglebg.classList.remove("closing");
//             }

//             isAnimating = false;

//         }, 160);

//     });

// }


// BURGER MENU + FULLSCREEN OVERLAY

const menuTogglebg = document.getElementById("menuTogglebg");
const mobileOverlay = document.getElementById("mobileOverlay");

let isAnimating = false;

function closeMobileMenu() {

    if (!menuTogglebg.classList.contains("active")) return;

    menuTogglebg.classList.remove("active");
    menuTogglebg.classList.add("closing");

    mobileOverlay.classList.remove("active");

    menuTogglebg.setAttribute("aria-expanded", "false");
    menuTogglebg.setAttribute("aria-label", "Open menu");

    isAnimating = true;

    setTimeout(() => {
        menuTogglebg.classList.remove("closing");
        isAnimating = false;
    }, 160);
}


// BURGER CLICK

menuTogglebg.addEventListener("click", () => {

    if (isAnimating) return;

    isAnimating = true;

    const isOpening = !menuTogglebg.classList.contains("active");

    if (isOpening) {

        menuTogglebg.classList.add("active");
        mobileOverlay.classList.add("active");

        menuTogglebg.setAttribute("aria-expanded", "true");
        menuTogglebg.setAttribute("aria-label", "Close menu");

    } else {

        closeMobileMenu();
        return;

    }

    setTimeout(() => {
        isAnimating = false;
    }, 160);

});


// CLOSE OVERLAY WHEN A NAVIGATION LINK IS CLICKED

const mobileLinks = mobileOverlay.querySelectorAll("ul a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {
        closeMobileMenu();
    });

});

