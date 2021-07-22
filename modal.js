function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// fermeture de la fenêtre formulaire
const modalCloseBtn = document.getElementsByClassName("close");
modalCloseBtn[0].addEventListener("click", closeModal);

function closeModal() {
    modalbg.style.display = "none";
}

// validation des champs de saisie de l'utilisateur 
let formValidator = document.getElementById("reserve");

// validation des champs prénom et nom de l'utilisateur 
let verifyTextInput = /^[a-zA-Z-\s]{2,}$/;
let firstInput = document.getElementById("first");
let missingTextInputFirst = document.getElementById("validationFieldFirst");
let secondInput = document.getElementById("last");
let missingTextInputSecond = document.getElementById("validationFieldSecond");

// validation de l'email : regex
let verifyEmailInput = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let emailInput = document.getElementById("email");
let missingEmailInput = document.getElementById("emailValidationField");

// validation du nombre de tournois
// regex pas nécessaire car type="number" en html
let quantityInput = document.getElementById("quantity");
let missingQuantityInput = document.getElementById("quantityValidationField");

//validation villes - required sur le html fait tout péter :(

//let inputRadioRequired = document.querySelectorAll("location");
//inputRadioRequired[].setAttribute("required", "");
//inputRadioRequired[].required = true;

//let inputRadioRequired = document.getElementById("location");

let missingRadioButtonChecked = document.getElementById("radioButtonValidationField");
//formValidator.addEventListener("submit", function(e) {
//    if (!inputRadioRequired.checked) {
//        missingRadioButtonChecked.innerHTML = "Vous devez sélectionner au moins une ville."
//        e.preventDefault();
//    }
//});

//form.location.addEventListener("change", function() {
//   inputChecked(this);
//});

//const inputChecked = function(inputChecking) {
//    let
//}

// quand l'utilisateur change de champ de saisie, js écoute l'autre champ texte

firstInput.onchange = function(e) {
    e.preventDefault();
    if (firstInput.value == "") {
        missingTextInputFirst.innerHTML = "Vous devez saisir au moins deux caractères."
    } else if ((verifyTextInput.test(firstInput.value)) == false) {
        missingTextInputFirst.innerHTML = "Vous devez saisir au moins deux caractères, les chiffres et caractères spéciaux ne sont pas acceptés.";
    } else {
        missingTextInputFirst.innerHTML = "";
    }
};
secondInput.onchange = function(e) {
    e.preventDefault();
    if (secondInput.value == "") {
        missingTextInputSecond.innerHTML = "Vous devez saisir au moins deux caractères."
    } else if ((verifyTextInput.test(secondInput.value)) == false) {
        missingTextInputSecond.innerHTML = "Vous devez saisir au moins deux caractères, les chiffres et caractères spéciaux ne sont pas acceptés.";
    } else {
        missingTextInputSecond.innerHTML = "";
    }
};
emailInput.onchange = function(e) {
    e.preventDefault();
    if (emailInput.value == "") {
        missingEmailInput.innerHTML = "Vous devez saisir une adresse mail."
    } else if ((verifyEmailInput.test(emailInput.value)) == false) {
        missingEmailInput.innerHTML = "Vous devez saisir une adresse mail valide.";
    } else {
        missingEmailInput.innerHTML = "";
    }
};

quantityInput.onchange = function(e) {
    e.preventDefault();
    if (quantityInput.value == "") {
        missingQuantityInput.innerHTML = "Vous devez saisir un nombre."
    } else {
        missingQuantityInput.innerHTML = "";
    }
};

// message quand le formulaire est ok > "alert formulaire envoyé"

// ajouter un if "tout est n'est pas ok"
// il ignore le input ville????!! WTF ?!!!

formValidator.addEventListener("submit", function(e) {
    let error;

    const form = new FormData(formValidator)
    for (var pair of form.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
        //faire la vérif asso clé-valeur
    }

    let globalVerification = document.getElementsByTagName("input");
    e.preventDefault();

    for (var i = 0; i < globalVerification.length; i++) {
        if (!globalVerification[i].value) {
            error = true;
            break;
        }
    }
    if (error == true) {
        alert("Merci de vérifier les informations saisies.");
        return false;
    } else {
        alert("Merci! Votre réservation a été reçue.");
        modalbg.style.display = "none";
        return false;
    }
});