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
    formValidator.style.display = "block";
    validationMessage.style.display = "none";
    closeFormButton.style.display = "none";
}

// fermeture de la fenêtre formulaire
const modalCloseBtn = document.getElementsByClassName("close");
modalCloseBtn[0].addEventListener("click", closeModal);

function closeModal() {
    modalbg.style.display = "none";
}

//////////////////////////////////////
//// vérification du formulaire /////
//////////////////////////////////////

// l'id du formulaire pour vérifier la validation au submit 
let formValidator = document.getElementById("reserve");

// variables pour récupérer les saisies dans les champs 
let firstInput = document.getElementById("first");
let secondInput = document.getElementById("last");
let emailInput = document.getElementById("email");
let birth = document.getElementById("birthdate");
let quantityInput = document.getElementById("quantity"); //nombre de tournois
let city = document.getElementsByTagName("location"); //radio button ville https://www.youtube.com/watch?v=MBUc-hfxB2s
let conditions = document.getElementById("checkbox1"); //conditions d'utilisation
let radios = document.getElementsByName("location"); //radio buttons pour la ville choisie

// variables pour mettre des messages d'erreur
let missingTextInputFirst = document.getElementById("validationFieldFirst");
let missingTextInputSecond = document.getElementById("validationFieldSecond");
let missingEmailInput = document.getElementById("emailValidationField");
let missingBirthdateInput = document.getElementById("birthdateValidationField");
let missingQuantityInput = document.getElementById("quantityValidationField"); //nombre de tournois
let missingRadioButtonChecked = document.getElementById("radioButtonValidationField"); //radio button ville
let missingConditions = document.getElementById("conditionsValidationField"); //conditions d'utilisation

// modale quand tout est ok - inscription validée!
let closeForm = document.getElementsByClassName("modal-body");
let validationMessage = document.getElementById("modal-body__validation");
validationMessage.style.display = "none";
let closeFormButton = document.getElementById("modal-body__validation__button");
closeFormButton.style.display = "none";

// validation des champs grâce à des regEx
let verifyTextInput = /^[a-zA-Z-\s]{2,}$/;
let verifyEmailInput = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let verifyNumberInput = /^[0-9]{1,2}$/; // validation du nombre de tournois
let verifyDateInput = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

// je désactive le bouton de soumission en attendant que le formulaire soit rempli corectement
let buttoned = document.getElementsByTagName("button")[2];
buttoned.disabled = true;

//prénom
let firstInputValidated = false;
firstInput.onchange = function(e) {
    e.preventDefault();
    if ((firstInput.value == "") || (verifyTextInput.test(firstInput.value) == false)) {
        missingTextInputFirst.innerHTML = "Vous devez saisir au moins deux caractères, les chiffres et caractères spéciaux ne sont pas acceptés.";
        firstInputValidated = false;
        firstInput.style.borderColor = "red";
    } else {
        missingTextInputFirst.innerHTML = "";
        firstInputValidated = true;
        firstInput.style.borderColor = "#ccc";
    }
    console.log("champs prénom " + firstInputValidated);
};

//nom
let secondInputValidated = false;
secondInput.onchange = function(e) {
    e.preventDefault();
    if ((secondInput.value == "") || (verifyTextInput.test(secondInput.value) == false)) {
        missingTextInputSecond.innerHTML = "Vous devez saisir au moins deux caractères, les chiffres et caractères spéciaux ne sont pas acceptés.";
        secondInputValidated = false;
        secondInput.style.borderColor = "red";
    } else {
        missingTextInputSecond.innerHTML = "";
        secondInputValidated = true;
        secondInput.style.borderColor = "#ccc";
    }
    console.log("champs nom " + secondInputValidated);
};

//email
let emailInputValidated = false;
emailInput.onchange = function(e) {
    e.preventDefault();
    if ((emailInput.value == "") || (verifyEmailInput.test(emailInput.value) == false)) {
        missingEmailInput.innerHTML = "Vous devez saisir une adresse mail valide.";
        emailInputValidated = false;
        emailInput.style.borderColor = "red";
    } else {
        missingEmailInput.innerHTML = "";
        emailInputValidated = true;
        emailInput.style.borderColor = "#ccc";
    }
    console.log("champs email " + emailInputValidated);
};

//date naissance
let birthValidated = false;
birth.onchange = function(e) {
    e.preventDefault();
    if ((birth.value == "") || (verifyDateInput.test(birth.value)) == false) {
        missingBirthdateInput.innerHTML = "Vous devez saisir votre date de naissance au format jj/mm/aaaa.";
        birthValidated = false;
        birth.style.borderColor = "red";
    } else {
        missingBirthdateInput.innerHTML = "";
        birthValidated = true;
        birth.style.borderColor = "#ccc";
    }
    console.log("champs date de naissance " + birthValidated);
};

//nombre tournois
let quantityInputValidated = false;
quantityInput.onchange = function(e) {
    e.preventDefault();
    if ((quantityInput.value == "") || (verifyNumberInput.test(quantityInput.value)) == false) {
        missingQuantityInput.innerHTML = "Vous devez saisir un chiffre.";
        quantityInputValidated = false;
        quantityInput.style.borderColor = "red";
    } else {
        missingQuantityInput.innerHTML = "";
        quantityInputValidated = true;
        quantityInput.style.borderColor = "#ccc";
    }
    console.log("champs nombre de tournois " + quantityInputValidated);
};

//ville
// vidéos qui m'a permis de trouver une solution!! https://www.youtube.com/watch?v=tWJxQqMYJJE
let cityValidated = false;

radios.forEach(radio => {
    radio.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!radio.checked) {
            missingRadioButtonChecked.innerHTML = ("merci de choisir une ville");
        } else {
            missingRadioButtonChecked.innerHTML = ("");
            return cityValidated = true;
        }
    })
})

//conditions
let conditionsValidated = true;

conditions.onchange = function(e) {
    if (conditions.checked) {
        missingConditions.innerHTML = ("");
        console.log("champs conditions " + conditionsValidated);
        return conditionsValidated = true;
    } else {
        missingConditions.innerHTML = ("Vous devez lire et accepter les conditions.");
        console.log("champs conditions " + conditionsValidated);
        return conditionsValidated = false;
    }
};

// je réactive le bouton quand les inputs sont ok
if (firstInputValidated && secondInputValidated && emailInputValidated &&
    birthValidated && quantityInputValidated && cityValidated && conditionsValidated) {
    buttoned.disabled = false;
    console.log(buttoned);
};

// validation du formulaire au click sur bouton submit
// et quand le bouton a été enabled
formValidator.addEventListener("submit", function(e) {
    e.preventDefault();

    if (firstInputValidated && secondInputValidated && emailInputValidated &&
        birthValidated && quantityInputValidated && cityValidated && conditionsValidated) {

        console.log("formulaire : tout est ok");
        document.getElementById("reserve").reset(); //réinitialiser le formulaire?
        console.log(formValidator);

        formValidator.style.display = "none"; // on ne voit plus le formulaire
        validationMessage.style.display = "block"; // le message de validation devient visible
        closeFormButton.style.display = "block"; // le bouton close du formulaire validé apparaît

        closeFormButton.addEventListener("click", (closeModal));
        firstInputValidated = false; // réinitialisation de la validation des variables
        secondInputValidated = false;
        emailInputValidated = false;
        birthValidated = false;
        quantityInputValidated = false;
        cityValidated = false;
    } else {
        console.log("badaboom");
    }
});

let inputAll = document.getElementsByTagName("input");
console.log(inputAll);