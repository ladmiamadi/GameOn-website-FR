/**
 *
 * @param {string} firstName
 * @throws {Error}
 */
function checkFirstName(firstName) {
    if(firstName.trim().length < 2) {
        let error = new Error("Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
        error.name = "first";
        displayErrorMessage(error.name, error.message);
    } else {
        removeErrorMessage("first");
    }
}

/**
 *
 * @param {string} lastName
 * @throws {Error}
 */
function checkLastName(lastName) {
    if(lastName.trim().length < 2) {
        const error = new Error("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
        error.name = "last";
        displayErrorMessage(error.name, error.message);
    } else {
        removeErrorMessage("last");
    }
}

/**
 *
 * @param {string} email
 * @throws {Error}
 */
function checkEmail(email) {
    let regex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");

    if(!regex.test(email)) {
        const error =  new Error("L\'email n\'est pas valide");
        error.name = "email";
        displayErrorMessage(error.name, error.message);
    } else {
        removeErrorMessage("email");
    }
}

/**
 *
 * @param {string} birthDate
 * @throws {Error}
 */
function checkBirthDate(birthDate) {
    let regex = new RegExp("\\d{4}-\\d{1,2}-\\d{1,2}");

    if(!regex.test(birthDate)) {
        const error = new Error("Vous devez entrer votre date de naissance.");
        error.name = "birthdate";
        displayErrorMessage(error.name, error.message);
    } else {
        removeErrorMessage("birthdate");
    }
}

/**
 *
 * @param {string} quantity
 * @throws {Error}
 */
function checkQuantity(quantity) {
    if(parseInt(quantity) < 0 || quantity.length <1) {
        let error = new Error("Le nombre de tournois n\'est pas valide");
        error.name = "quantity";
        displayErrorMessage(error.name, error.message);
    } else {
        removeErrorMessage("quantity");
    }
}

/**
 *
 * @param {NodeList} locations
 * @throws {Error}
 */
function checkLocation(locations) {
    let checked = Array.from(locations).filter(location => location.checked);

    if(checked.length === 0) {
        const error = new Error("Vous devez choisir une option.");
        error.name = "location1";
        displayErrorMessage(error.name, error.message);
    } else {
        removeErrorMessage("location1");
    }
}

/**
 *
 * @param {boolean} condition
 * @throws {Error}
 */
function checkConditions (condition) {
    if (!condition) {
        const error = new Error("Veuillez accepter les conditions d\'utilisation");
        error.name = "conditions";
        displayErrorMessage(error.name, error.message);
    } else {
        removeErrorMessage("conditions");
    }
}

/**
 *
 * @param {string} id
 * @param {string} message
 */
function displayErrorMessage(id, message) {
    let input = document.getElementById(id);
    let spanErrorMessage = document.getElementById("errorMessage" + id);

    if(!spanErrorMessage) {
        spanErrorMessage = document.createElement("span");
        spanErrorMessage.id = "errorMessage" + id;

        spanErrorMessage.innerText = message;
        spanErrorMessage.classList.add("error-message");
        input.parentNode.appendChild(spanErrorMessage);
        input.classList.add("error-input")
    }
}

/**
 *
 * @param {string} id
 * remove error messages after validating input
 */
function removeErrorMessage (id) {
    let spanErrorMessage = document.getElementById("errorMessage" + id);

    if(spanErrorMessage) {
        let input = document.getElementById(id);
        input.classList.remove("error-input");
        spanErrorMessage.remove();
    }
}

/**
 * display the confirmation message after validating form
 */
function register () {
    let modal = document.querySelector(".modal-body");
    let closeButton = document.createElement("button");
    let confirmMessage = document.createElement("h3");

    confirmMessage.innerText = "Merci pour votre inscription";
    closeButton.innerText = "Fermer";

    confirmMessage.id = "confirmMessage";
    closeButton.id = "closeButton";

    confirmMessage.classList.add("confirm-message");
    closeButton.classList.add("button");
    closeButton.classList.add("btn-submit");
    modal.classList.add("modal-body-confirm");

    //remove the form from modal and display confirmation message with the close button
    form.reset();
    //form.style.display = "none";

    form.classList.add("hide");
    form.classList.remove("display");

    modal.appendChild(confirmMessage);
    modal.appendChild(closeButton);

    closeButton.addEventListener("click", () => {
        closeModal();
    });
}

function validateForm (firstName, lastName, email, birthDate, quantity, locations, condition) {
    checkFirstName(firstName);
    checkLastName(lastName);
    checkEmail(email);
    checkBirthDate(birthDate);
    checkQuantity(quantity);
    checkLocation(locations);
    checkConditions(condition);
}

let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //DOM elements
    let firstName = document.getElementById("first").value;
    let lastName = document.getElementById("last").value;
    let email = document.getElementById("email").value;
    let birthDate = document.getElementById("birthdate").value;
    let quantity = document.getElementById("quantity").value;
    let locations = document.querySelectorAll("input[type=radio]");
    let condition = document.getElementById("conditions").checked;

    validateForm(firstName, lastName, email, birthDate, quantity, locations, condition);

    let errors = document.querySelectorAll("[id^='errorMessage']");
    if (errors.length === 0) {
        console.log(`
            Prénom: ${firstName}, 
            Nom: ${lastName}, 
            email: ${email}, 
            Date de naissance: ${birthDate}
            Nombre de tournois: ${quantity}, 
            Tournois: ${Array.from(locations).filter(location => location.checked).map(el => el.value)}, 
            Conditions d'utilisation: ${condition ? 'Acceptées': ''}
            `);

        register();
    }
})