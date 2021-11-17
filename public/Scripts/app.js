(function(){

    function Start()
    {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');
        //for all the danger button in our project 
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?")) 
                {
                    event.preventDefault();
                    window.location.assign('');
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();

/* I left my code here for you to edit it for login stuff (/Adam)
/* validate form */
function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault(); 
    } else {
        evt.returnValue = false; 
    }
    formValidity = true; 
    validateInformation("details");
    if (formValidity === true) {
        document.getElementById("errorText").innerHTML = "";
        document.getElementById("errorText").style.display = "none";
        document.getElementsByTagName("form")[0].submit();
        alert("Thanks for submiting, your customer record was created successfully.");
    } else {
        document.getElementById("errorText").innerHTML = "It seems that your input wasn't in the correct format.";
        document.getElementById("errorText").style.display = "block";
        scroll(0, 0);
    }
}

function validateFirstname() {
    var unInput = document.getElementById("firstName");
    var errorDiv = document.getElementById("firstnameError");
    try {
        if (/[^a-zA-Z]/.test(unInput.value) === true) {
            throw "Firstname must contain only letters";
        }
        else  if (/.{2,}/.test(unInput.value) === false) {
                throw "Firstname must be at least 2 characters long";
        }
        unInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        unInput.style.background = "rgb(255,233,233)";
    }
}

function validateLastname() {
    var unInput = document.getElementById("lastName");
    var errorDiv = document.getElementById("lastnameError");
    try {
        if (/[^a-zA-Z]/.test(unInput.value) === true) {
            throw "Lastname must contain only letters";
        }
        else if (/.{2,}/.test(unInput.value) === false) {
            throw "Lastname must be at least 2 characters long";
        }
        unInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        unInput.style.background = "rgb(255,233,233)";
    }
}
function validateEmail() {
    var emailInput = document.getElementById("emailAddress");
    var errorDiv = document.getElementById("emailError");
    var emailCheck = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/;
    try {
        if (emailCheck.test(emailInput.value) === false) {
            throw "Please provide a valid email address";
        }
        emailInput.style.background = "";
        errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
       
    }
    catch (msg) {
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        emailInput.style.background = "rgb(255,233,233)";
    }
}

function validatePhoneNumber() {
    var phoneInput = document.getElementById("number");
    var errorDiv = document.getElementById("emailError");
    var phoneCheck = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    try {
        if (phoneCheck.test(phoneInput.value) === true) {
            throw "Please provide a valid Phone number ";
        }
        unInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        unInput.style.background = "rgb(255,233,233)";
    }
}

var fNameInput = document.getElementById("firstName");
var lNameInput = document.getElementById("lastName");
var emailInput = document.getElementById("emailAddress");
var phoneInput = document.getElementById("number");


if (fNameInput.addEventListener) {
    fNameInput.addEventListener("change", validateFirstname, false);
    lNameInput.addEventListener("change", validateLastname, false);
    emailInput.addEventListener("change", validateEmail, false);
    emailInput.addEventListener("change", validatePhoneNumber, false);

} else if (fNameInput.attachEvent) {
    fNameInput.attachEvent("onchange", validateFirstname);
    lNameInput.attachEvent("onchange", validateLastname);
    emailInput.addEventListener("onchange", validateEmail);
    phoneInput.attachEvent("onchange", validatePhoneNumber);
}

function setUpPage() {
createEventListeners();
}
/* run setup functions when page finishes loading */
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}