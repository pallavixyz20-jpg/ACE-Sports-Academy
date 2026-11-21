// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    menuToggle.textContent =
        navLinks.classList.contains("active") ? "✕" : "☰";
});

// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});

// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// STUDENT REGISTRATION FORM

const registrationForm =
    document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const student = {
        name: document.getElementById("studentName").value.trim(),
        age: document.getElementById("age").value,
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        sport: document.getElementById("sport").value,
        program: document.getElementById("program").value,
        membership: document.getElementById("membership").value,
        registrationDate: new Date().toLocaleDateString()
    };

    // Get existing registrations
    let registrations =
        JSON.parse(localStorage.getItem("academyStudents")) || [];

    // Add new student
    registrations.push(student);

    // Save registrations in browser
    localStorage.setItem(
        "academyStudents",
        JSON.stringify(registrations)
    );

    document.getElementById("formMessage").textContent =
        "Registration submitted successfully! Welcome to ACE Sports Academy.";

    document.getElementById("formMessage").style.color = "green";

    registrationForm.reset();
});


// CONTACT FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("contactName").value.trim();

    document.getElementById("contactResponse").textContent =
        "Thank you, " + name + "! Your message has been recorded.";

    document.getElementById("contactResponse").style.color = "green";

    contactForm.reset();
});