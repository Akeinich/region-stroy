
// ================================
// Мобильное меню
// ================================

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
        nav.classList.toggle("nav--open");
        menuButton.classList.toggle("menu-button--open");
    });

    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("nav--open");
            menuButton.classList.remove("menu-button--open");
        });
    });
}


// ================================
// Форма заявки
// ================================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    const nameInput = document.querySelector("#name");
    const phoneInput = document.querySelector("#phone");
    const messageInput = document.querySelector("#message");
    const formMessage = document.querySelector(".form-message");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        nameInput.classList.remove("input--error");
        phoneInput.classList.remove("input--error");
        formMessage.className = "form-message";
        formMessage.textContent = "";

        if (!nameInput.value.trim()) {
            nameInput.classList.add("input--error");

            formMessage.textContent = "Пожалуйста, введите ваше имя.";
            formMessage.classList.add("form-message--error");

            nameInput.focus();

            return;
        }

        if (!phoneInput.value.trim()) {
            phoneInput.classList.add("input--error");

            formMessage.textContent = "Пожалуйста, введите номер телефона.";
            formMessage.classList.add("form-message--error");

            phoneInput.focus();

            return;
        }

        console.log("Заявка:", {
            name: nameInput.value.trim(),
            phone: phoneInput.value.trim(),
            message: messageInput.value.trim()
        });

        formMessage.textContent =
            "Спасибо! Заявка заполнена. Мы свяжемся с вами.";

        formMessage.classList.add("form-message--success");

        contactForm.reset();
    });
}

