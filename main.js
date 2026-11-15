/**
 * Cees Garden Realty — Main Interactive & Validation Script
 * Author: Adesokan Opeoluwa Gabriel
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Dynamic Footer Year
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Responsive Mobile Navigation Toggle
  const navToggle = document.getElementById("navToggle");
  const primaryNav = document.getElementById("primaryNav");

  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = primaryNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // 3. Interactive Category Filter on Services Page
  const filterButtons = document.querySelectorAll(".filter-btn");
  const serviceCards = document.querySelectorAll(".service-card");

  if (filterButtons.length > 0 && serviceCards.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        const selectedCategory = button.getAttribute("data-filter");

        serviceCards.forEach((card) => {
          const cardCategory = card.getAttribute("data-category");
          if (selectedCategory === "all" || cardCategory === selectedCategory) {
            card.classList.remove("is-hidden");
          } else {
            card.classList.add("is-hidden");
          }
        });
      });
    });
  }

  // 4. Client-Side Contact Form Validation
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    const fullNameInput = document.getElementById("fullName");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");
    const formFeedback = document.getElementById("formFeedback");

    const setFieldError = (inputEl, errorElId, message) => {
      const errorEl = document.getElementById(errorElId);
      if (message) {
        inputEl.classList.add("input-invalid");
        if (errorEl) errorEl.textContent = message;
        return false;
      } else {
        inputEl.classList.remove("input-invalid");
        if (errorEl) errorEl.textContent = "";
        return true;
      }
    };

    const validateForm = () => {
      const nameVal = fullNameInput.value.trim();
      const emailVal = emailInput.value.trim();
      const subjectVal = subjectInput.value.trim();
      const messageVal = messageInput.value.trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      const isNameValid = setFieldError(
        fullNameInput,
        "fullNameError",
        nameVal.length < 3 ? "Please enter your full name (at least 3 characters)." : ""
      );

      const isEmailValid = setFieldError(
        emailInput,
        "emailError",
        !emailRegex.test(emailVal) ? "Please enter a valid email address." : ""
      );

      const isSubjectValid = setFieldError(
        subjectInput,
        "subjectError",
        subjectVal.length < 4 ? "Please enter a clear subject (at least 4 characters)." : ""
      );

      const isMessageValid = setFieldError(
        messageInput,
        "messageError",
        messageVal.length < 15 ? "Please provide a message of at least 15 characters." : ""
      );

      return isNameValid && isEmailValid && isSubjectValid && isMessageValid;
    };

    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (validateForm()) {
        const senderName = fullNameInput.value.trim();
        formFeedback.className = "form-feedback success";
        formFeedback.textContent = `Thank you, ${senderName}. Your inquiry details passed validation and are ready for dispatch to Cees Garden Realty (No. 20 Cees Garden Estate). Note: Connect a backend endpoint or form handler to transmit live emails.`;
        contactForm.reset();
      } else {
        formFeedback.className = "form-feedback error";
        formFeedback.textContent = "Please correct the highlighted fields above before submitting.";
      }
    });
  }
});
