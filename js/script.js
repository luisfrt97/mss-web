const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const contactForm = document.getElementById("contactForm");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Formulario visual listo. Luego lo conectamos al correo real.");
  });
}

/* MODALES SERVICIOS */
const openDetailButtons = document.querySelectorAll(".open-detail");
const detailCloseButtons = document.querySelectorAll(".detail-close");
const detailModalBackgrounds = document.querySelectorAll(".detail-modal-bg");

openDetailButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const modal = document.getElementById(targetId);

    if (modal) {
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  });
});

function closeAllDetailModals() {
  document.querySelectorAll(".detail-modal").forEach((modal) => {
    modal.classList.remove("active");
  });
  document.body.style.overflow = "";
}

detailCloseButtons.forEach((button) => {
  button.addEventListener("click", closeAllDetailModals);
});

detailModalBackgrounds.forEach((bg) => {
  bg.addEventListener("click", closeAllDetailModals);
});

/* EXPERIENCIA DETALLE */
const experienceCards = document.querySelectorAll(".interactive-card");
const experienceModal = document.getElementById("experienceModal");
const experienceModalTitle = document.getElementById("experienceModalTitle");
const experienceModalText = document.getElementById("experienceModalText");
const experienceModalClose = document.getElementById("experienceModalClose");
const experienceModalBackdrop = document.getElementById("experienceModalBackdrop");

experienceCards.forEach((card) => {
  card.addEventListener("click", () => {
    const title = card.getAttribute("data-title");
    const detail = card.getAttribute("data-detail");

    if (experienceModal && experienceModalTitle && experienceModalText) {
      experienceModalTitle.textContent = title;
      experienceModalText.textContent = detail;
      experienceModal.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  });
});

function closeExperienceModal() {
  if (experienceModal) {
    experienceModal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

if (experienceModalClose) {
  experienceModalClose.addEventListener("click", closeExperienceModal);
}

if (experienceModalBackdrop) {
  experienceModalBackdrop.addEventListener("click", closeExperienceModal);
}

/* CARRUSEL EXPERIENCIA */
const expPrev = document.getElementById("expPrev");
const expNext = document.getElementById("expNext");
const experienceTrack = document.getElementById("experienceTrack");

if (expPrev && expNext && experienceTrack) {
  expPrev.addEventListener("click", () => {
    experienceTrack.scrollBy({ left: -380, behavior: "smooth" });
  });

  expNext.addEventListener("click", () => {
    experienceTrack.scrollBy({ left: 380, behavior: "smooth" });
  });
}

/* ESC */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeAllDetailModals();
    closeExperienceModal();
  }
});