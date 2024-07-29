function editNav() {
  let x = document.getElementById("myTopnav");

  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//close modal event
modalClose.addEventListener("click", closeModal)

// launch modal form
function launchModal() {
  modalbg.classList.add("display");
  modalbg.classList.remove("hide");
}

/**
 * close the modal form
 */
function closeModal() {
  let modal = document.querySelector(".modal-body");

  let closeButton = document.getElementById("closeButton");
  let confirmMessage = document.getElementById("confirmMessage");

  if(confirmMessage && closeButton) {
    closeButton.remove();
    confirmMessage.remove();

    modal.classList.remove("modal-body-confirm");
    form.classList.remove("hide");
    form.classList.add("display");
  }

  modalbg.classList.add("hide");
  modalbg.classList.remove("display");
}


