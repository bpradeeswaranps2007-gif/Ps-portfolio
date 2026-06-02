// ================================
// 1. ACTIVE NAVIGATION LINK
// ================================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});


// ================================
// 2. SMOOTH SCROLL (optional support)
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ================================
// 3. FOOTER AUTO YEAR UPDATE
// ================================

const yearElements = document.querySelectorAll(".copyright");

yearElements.forEach(el => {
    const year = new Date().getFullYear();
    el.innerHTML = el.innerHTML.replace("2026", year);
});


// ================================
// 4. CONTACT FORM VALIDATION
// ================================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = contactForm.querySelector("input[name='name']").value.trim();
        const email = contactForm.querySelector("input[name='email']").value.trim();
        const message = contactForm.querySelector("textarea[name='message']").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("⚠️ Please fill all fields!");
            return;
        }

        if (!email.includes("@")) {
            alert("⚠️ Please enter a valid email!");
            return;
        }

        alert("✅ Message sent successfully!");

        contactForm.reset();
    });
}


// ================================
// 5. MOBILE MENU (optional future use)
// ================================

const navbar = document.querySelector(".navbar");

function toggleMenu() {
    navbar.classList.toggle("active");
}