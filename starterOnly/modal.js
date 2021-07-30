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

//////////////////////////////////////
// vérification du formulaire //
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

// variables pour mettre des messages d'erreur
let missingTextInputFirst = document.getElementById("validationFieldFirst");
let missingTextInputSecond = document.getElementById("validationFieldSecond");
let missingEmailInput = document.getElementById("emailValidationField");
let missingBirthdateInput = document.getElementById("birthdateValidationField");
let missingQuantityInput = document.getElementById("quantityValidationField"); //nombre de tournois
let missingRadioButtonChecked = document.getElementById("radioButtonValidationField"); //radio button ville
let missingConditions = document.getElementById("conditionsValidationField"); //conditions d'utilisation

// validation des champs grâce à des regEx
let verifyTextInput = /^[a-zA-Z-\s]{2,}$/;
let verifyEmailInput = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let verifyNumberInput = /^[0-9]{1,2}$/; // validation du nombre de tournois
let verifyDateInput = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

//prénom
let firstInputValidated = false;
firstInput.onchange = function(e) {
    e.preventDefault();
    if ((firstInput.value == "") || (verifyTextInput.test(firstInput.value) == false)) {
        missingTextInputFirst.innerHTML = "Vous devez saisir au moins deux caractères, les chiffres et caractères spéciaux ne sont pas acceptés.";
        missingTextInputFirst.style.color = "red";
        firstInputValidated = false;
    } else {
        missingTextInputFirst.innerHTML = "";
        firstInputValidated = true;
    }
    console.log(firstInputValidated);
};

//nom
let secondInputValidated = false;
secondInput.onchange = function(e) {
    e.preventDefault();
    if ((secondInput.value == "") || (verifyTextInput.test(secondInput.value) == false)) {
        missingTextInputSecond.innerHTML = "Vous devez saisir au moins deux caractères, les chiffres et caractères spéciaux ne sont pas acceptés.";
        missingTextInputSecond.style.color = "red";
        secondInputValidated = false;
    } else {
        missingTextInputSecond.innerHTML = "";
        secondInputValidated = true;
    }
    console.log(secondInputValidated);
};

//email
let emailInputValidated = false;
emailInput.onchange = function(e) {
    e.preventDefault();
    if ((emailInput.value == "") || (verifyEmailInput.test(emailInput.value) == false)) {
        missingEmailInput.innerHTML = "Vous devez saisir une adresse mail valide.";
        missingEmailInput.style.color = "red";
        emailInputValidated = false;
    } else {
        missingEmailInput.innerHTML = "";
        emailInputValidated = true;
    }
    console.log(emailInputValidated);
};

//date naissance
let birthValidated = false;
birth.onchange = function(e) {
    e.preventDefault();
    if ((birth.value == "") || (verifyDateInput.test(birth.value)) == false) {
        missingBirthdateInput.innerHTML = "Vous devez saisir votre date de naissance au format jj/mm/aaaa.";
        missingBirthdateInput.style.color = "red";
        birthValidated = false;
    } else {
        missingBirthdateInput.innerHTML = "";
        birthValidated = true;
    }
    console.log(birthValidated);
};

//nombre tournois
let quantityInputValidated = false;
quantityInput.onchange = function(e) {
    e.preventDefault();
    if ((quantityInput.value == "") || (verifyNumberInput.test(quantityInput.value)) == false) {
        missingQuantityInput.innerHTML = "Vous devez saisir un chiffre.";
        missingQuantityInput.style.color = "red";
        quantityInputValidated = false;
    } else {
        missingQuantityInput.innerHTML = "";
        quantityInputValidated = true;
    }
    console.log(quantityInputValidated);
};

//ville
//city.onchange = function(e) {
//    let x = document.reserve.location;
//    for (let i = 0; i < x.length; i++) {
//        if (x[i].checked) {
//            missingRadioButtonChecked.innerHTML = ("");
//            return cityValidated = true;
//        } else {
//            missingRadioButtonChecked.innerHTML = ("merci de choisir une ville");
//            missingRadioButtonChecked.style.color = "red";
//            return cityValidated = false;
//        }
//    }
//};


//conditions
let conditionsValidated = true;
conditions.onchange = function(e) {
    if (conditions.checked) {
        missingConditions.innerHTML = ("");
        console.log(conditions);
        return conditionsValidated = true;
    } else {
        missingConditions.innerHTML = ("Vous devez lire et accepter les conditions.");
        missingConditions.style.color = "red";
        console.log(conditions);
        return conditionsValidated = false;
    }
};

formValidator.addEventListener("submit", function(e) {
    e.preventDefault();

    // si tous les champs sont validated, fermeture de la modale
    ///////// essayer : if ( firstnameValidated & lastNameValidated &......) { submitButton.disabled =false  } 

    //ville
    let cityValidated = false;
    let radios = document.getElementsByName("location");
    let valeur;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            valeur = radios[i].value;
            console.log(valeur);
            cityValidated = true
            break;
        } else {
            missingRadioButtonChecked.innerHTML = ("merci de choisir une ville");
            missingRadioButtonChecked.style.color = "red";
        }
    }

    if (firstInputValidated && secondInputValidated && emailInputValidated &&
        birthValidated && quantityInputValidated && cityValidated && conditionsValidated) {
        alert("merci, votre réservation a été reçue!");
        modalbg.style.display = "none";
        document.reserve.submit();
    } else {
        alert("merci de vérifier les informations saisies!");
    }

    console.log(firstInputValidated, secondInputValidated, emailInputValidated,
        birthValidated, quantityInputValidated, cityValidated, conditionsValidated);
});