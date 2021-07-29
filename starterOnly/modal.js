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

//validation que la date de naissance soit saisie
let birth = document.getElementById("birthdate");
let missingBirthdateInput = document.getElementById("birthdateValidationField");


// validation du nombre de tournois
let verifyNumberInput = /^[0-9]{1,2}$/;
let quantityInput = document.getElementById("quantity");
let missingQuantityInput = document.getElementById("quantityValidationField");

// vérifier qu'un radio button ville est bien checked
// vidéo utilisée https://www.youtube.com/watch?v=MBUc-hfxB2s
let city = document.getElementsByTagName("location");
var valid = false;
let missingRadioButtonChecked = document.getElementById("radioButtonValidationField");

// + vérifier que les conditions d'utilisation ont bien été checked
let conditions = document.getElementById("checkbox1");
let missiongConditions = document.getElementById("conditionsValidationField");

let validation = false;

//function error(this) {
//    if (this.value == "") {
//        this.innerHTML = "Vous devez saisir au moins deux caractères.";
//        this.style.color = "red";
//        return false;
//    }
//    if ((verifyTextInput.test(this.value)) == false) {
//        this.innerHTML = "Vous devez saisir au moins deux caractères, les chiffres et caractères spéciaux ne sont pas acceptés.";
//        this.style.color = "red";
//        return false;
//    } else {
//        this.innerHTML = "";
//        return true;
//    }
//};

//firstInput.errorMessage(e);

let verifyDateInput = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;


let errorText = "Vous devez saisir au moins deux caractères."
    /////////////////


//prénom
firstInput.onchange = function(e) {
    e.preventDefault();
    if (firstInput.value == "") {
        missingTextInputFirst.innerHTML = "Vous devez saisir au moins deux caractères.";
        missingTextInputFirst.style.color = "red";
    }
    if ((verifyTextInput.test(firstInput.value)) == false) {
        missingTextInputFirst.innerHTML = "Vous devez saisir au moins deux caractères, les chiffres et caractères spéciaux ne sont pas acceptés.";
        missingTextInputFirst.style.color = "red";
    } else {
        missingTextInputFirst.innerHTML = "";
    }
};

//nom
secondInput.onchange = function(e) {
    e.preventDefault();
    if (secondInput.value == "") {
        missingTextInputSecond.innerHTML = "Vous devez saisir au moins deux caractères.";
        missingTextInputSecond.style.color = "red";
    }
    if ((verifyTextInput.test(secondInput.value)) == false) {
        missingTextInputSecond.innerHTML = "Vous devez saisir au moins deux caractères, les chiffres et caractères spéciaux ne sont pas acceptés.";
        missingTextInputSecond.style.color = "red";
    } else {
        missingTextInputSecond.innerHTML = "";
    }
};

//email
emailInput.onchange = function(e) {
    e.preventDefault();
    if (emailInput.value == "") {
        missingEmailInput.innerHTML = "Vous devez saisir une adresse mail.";
        missingEmailInput.style.color = "red";
    }
    if ((verifyEmailInput.test(emailInput.value)) == false) {
        missingEmailInput.innerHTML = "Vous devez saisir une adresse mail valide.";
        missingEmailInput.style.color = "red";
    } else {
        missingEmailInput.innerHTML = "";
    }
};

//date naissance
birth.onchange = function(e) {
    e.preventDefault();
    if ((birth.value == "") || (verifyDateInput.test(birth.value)) == false) {
        missingBirthdateInput.innerHTML = "Vous devez saisir votre date de naissance au format jj/mm/aaaa.";
        missingBirthdateInput.style.color = "red";
    } else {
        missingBirthdateInput.innerHTML = "";
    }
};

//nombre tournois
quantityInput.onchange = function(e) {
    e.preventDefault();
    if ((quantityInput.value == "") || (verifyNumberInput.test(quantityInput.value)) == false) {
        missingQuantityInput.innerHTML = "Vous devez saisir un chiffre.";
        missingQuantityInput.style.color = "red";
    } else {
        missingQuantityInput.innerHTML = "";
    }
};
//////////////


function validate() {

    //ville
    city.onchange = function(e) {
        let x = document.reserve.location;
        for (let i = 0; i < x.length; i++) {
            if (x[i].checked) {
                return valid = true;
                missingRadioButtonChecked.innerHTML = ("");
            } else {
                missingRadioButtonChecked.innerHTML = ("merci de choisir une ville");
                missingRadioButtonChecked.style.color = "red";
                return valid = false;
            }
        }
    };

    //conditions
    conditions.onchange = function(e) {
        if (conditions.checked) {
            return validation = true;
        } else {
            missiongConditions.innerHTML = ("Vous devez lire et accepter les conditions.");
            missiongConditions.style.color = "red";
        };
    };

}

formValidator.addEventListener("submit", function(e) {

    e.preventDefault();

    //prénom
    if (firstInput.value == "") {
        missingTextInputFirst.innerHTML = "Vous devez saisir au moins deux caractères.";
        missingTextInputFirst.style.color = "red";
    }
    if ((verifyTextInput.test(firstInput.value)) == false) {
        missingTextInputFirst.innerHTML = "Vous devez saisir au moins deux caractères, les chiffres et caractères spéciaux ne sont pas acceptés.";
        missingTextInputFirst.style.color = "red";
    } else {
        missingTextInputFirst.innerHTML = "";
    }

    //nom
    if (secondInput.value == "") {
        missingTextInputSecond.innerHTML = "Vous devez saisir au moins deux caractères.";
        missingTextInputSecond.style.color = "red";
    }
    if ((verifyTextInput.test(secondInput.value)) == false) {
        missingTextInputSecond.innerHTML = "Vous devez saisir au moins deux caractères, les chiffres et caractères spéciaux ne sont pas acceptés.";
        missingTextInputSecond.style.color = "red";
    } else {
        missingTextInputSecond.innerHTML = "";
    }

    //email
    if (emailInput.value == "") {
        missingEmailInput.innerHTML = "Vous devez saisir une adresse mail.";
        missingEmailInput.style.color = "red";
    }
    if ((verifyEmailInput.test(emailInput.value)) == false) {
        missingEmailInput.innerHTML = "Vous devez saisir une adresse mail valide.";
        missingEmailInput.style.color = "red";
    } else {
        missingEmailInput.innerHTML = "";
    }

    //date de naissance
    if ((birth.value == "") || (verifyDateInput.test(birth.value)) == false) {
        missingBirthdateInput.innerHTML = "Vous devez saisir votre date de naissance au format jj/mm/aaaa.";
        missingBirthdateInput.style.color = "red";
    } else {
        missingBirthdateInput.innerHTML = "";
    }

    //nombre de tournois
    if ((quantityInput.value == "") || (verifyNumberInput.test(quantityInput.value)) == false) {
        missingQuantityInput.innerHTML = "Vous devez saisir un chiffre.";
        missingQuantityInput.style.color = "red";
    } else {
        missingQuantityInput.innerHTML = "";
    }

    //ville
    let x = document.reserve.location;
    for (let i = 0; i < x.length; i++) {
        if (x[i].checked) {
            return valid = true;
            missingRadioButtonChecked.innerHTML = ("");
            break;
        } else {
            missingRadioButtonChecked.innerHTML = ("merci de choisir une ville");
            missingRadioButtonChecked.style.color = "red";
            return valid = false;
            break;
        }
    }

    //conditions
    if (conditions.checked) {
        return validation = true;
    } else {
        missiongConditions.innerHTML = ("Vous devez lire et accepter les conditions.");
        missiongConditions.style.color = "red";
    };

    // si tout est ok, fermeture de la modale
    if ((missingTextInputFirst == "") && (missingTextInputSecond == "") && (missingEmailInput == "") &&
        (missingBirthdateInput == "") && (missingQuantityInput == "") && (validation == true) && (validation == true)) {
        modalbg.style.display = "none";
    }

});