let openBtn = document.querySelector(".contact-link");
let closeBtn = document.querySelector(".close-modal-button");
let modalWindow = document.querySelector(".modal");
let nameInput = modalWindow.querySelector("[name=name]");
let emailInput = modalWindow.querySelector("[name=email]");
let messageInput = modalWindow.querySelector("[name=message]");
let contactForm = modalWindow.querySelector(".contact-modal-form");
let storageName = localStorage.getItem("name");
let storageEmail = localStorage.getItem("email");

openBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWindow.classList.add("modal-open");
  if (storageName) {
    nameInput.value = storageName;
  }
  if (storageEmail) {
    emailInput.value = storageEmail;
  }
  nameInput.focus();
});

closeBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWindow.classList.remove("modal-open");
  modalWindow.classList.remove("modal-error");
})

contactForm.addEventListener("submit", function (evt) {

  if (!nameInput.value || !emailInput.value || !messageInput.value) {
    evt.preventDefault();
    modalWindow.classList.remove("modal-error");
    modalWindow.offsetWidth = modalWindow.offsetWidth;
    modalWindow.classList.add("modal-error");
  }
  else {
    localStorage.setItem("name", nameInput.value);
    localStorage.setItem("email", emailInput.value);
  }
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    console.log("fdsfd");
    if (modalWindow.classList.contains("modal-open")) {
      evt.preventDefault();
      modalWindow.classList.remove("modal-open");
      modalWindow.classList.remove("modal-error");
    }
  }
})
