/**
 *
 * @param {string} firstName
 * @throws {Error}
 */
function checkFirstName(firstName) {
    if(firstName.trim().length < 2) {
        const error = new Error("Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
        error.name = "first";
        throw error;
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
        throw error;
    }else {
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
        throw error;
    }else {
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
        throw error;
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
        const error = new Error("Le nombre de tournois n\'est pas valide");
        error.name = "quantity";
        throw error;
    } else {
        removeErrorMessage("quantity")
    }
}

/**
 *
 * @param {Object} locations
 * @throws {Error}
 */
function checkLocation(locations) {
    let checked = Array.from(locations).filter(location => location.checked);

    if(checked.length < 1) {
        const error = new Error("Vous devez choisir une option.");
        error.name = "location1";
        throw error;
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
        throw error;
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
 */
function removeErrorMessage (id) {
    let spanErrorMessage = document.getElementById("errorMessage" + id);
    if(spanErrorMessage) {
        let input = document.getElementById(id);
        input.classList.remove("error-input");
        spanErrorMessage.remove();
    }
}

function register () {
    closeModal();
    form.reset();

    alert("Merci ! Votre réservation a été reçue.");
}

let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    try {
        let firstName = document.getElementById("first");
        let lastName = document.getElementById("last");
        let email = document.getElementById("email");
        let birthDate = document.getElementById("birthdate");
        let quantity = document.getElementById("quantity");
        let locations = document.querySelectorAll("input[type=radio]");
        let condition = document.getElementById("conditions");

        checkFirstName(firstName.value);
        checkLastName(lastName.value);
        checkEmail(email.value);
        checkBirthDate(birthDate.value);
        checkQuantity(quantity.value);
        checkLocation(locations);
        checkConditions(condition.checked);

        register();

    } catch (error) {
        displayErrorMessage(error.name , error.message);
    }
})