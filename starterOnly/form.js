/**
 *
 * @param {string} firstName
 * @throws {Error}
 */
function checkFirstName(firstName) {
    if(firstName.trim().length < 2) {
        throw new Error("Le prénom est trop court");
    }
}

/**
 *
 * @param {string} lastName
 * @throws {Error}
 */
function checkLastName(lastName) {
    if(lastName.trim().length < 2) {
        throw new Error("Le nom est trop court");
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
        throw new Error("l\'email n\'est pas valide");
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
        throw new Error("la date de naissance n\'est pas valide");
    }
}

/**
 *
 * @param {string} quantity
 * @throws {Error}
 */
function checkQuantity(quantity) {
    if(parseInt(quantity) < 0 || quantity.length <1) {
        throw new Error("Le nombre de tournois n\'est pas valide");
    }
}

/**
 *
 * @param {Object} locations
 * @throws {Error}
 */
function checkLocation(locations) {
    /*let checked = false;
        for(let i =0; i< locations.length ; i++) {
        if(locations[i].checked) checked=true
    }
    if (!checked) {
        throw new Error("veuillez choisir une location");
    }*/
    let checked = Array.from(locations).filter(location => location.checked);

    if(checked.length <1) {
        throw new Error("Veuillez choisir une location");
    }
}

/**
 *
 * @param {boolean} condition
 * @throws {Error}
 */
function checkConditions (condition) {
    if (!condition) {
        throw new Error("Veuillez accepter les conditions d\'utilisation");
    }
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

    } catch (error) {
        console.log(error.message);
    }

})