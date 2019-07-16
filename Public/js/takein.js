

const botonGO = document.querySelector('#go-button');
const Placeholder = document.getElementById("email");

botonGO.addEventListener('click', guardarLS);

function guardarLS() {

    const inputEmailValue = document.querySelector('#email').value;
    let checkError = validateEmail(inputEmailValue);

    if(checkError == true){

        var myElement1 = document.querySelector("#emailLabel");
        myElement1.style.display = "none";
        
        var myElement2 = document.querySelector("#labelError");
        myElement2.style.display = "block";

        var myElement3 = document.querySelector("#email");
        myElement3.style.border = "2px solid #DC0015";
          
    }else{
        setPersonasStorage(inputEmailValue)
        window.location.href = "result_name.html";

    }
}

function setPersonasStorage(personasLocal) {
    localStorage.setItem("emailParaVerificar", JSON.stringify(personasLocal));
    console.log(JSON.parse(localStorage.getItem("emailParaVerificar")));

}

function togglePlaceholder() {


    let panel_profile = document.getElementById('emailLabel');
    const inputEmailValue = document.querySelector('#email');


    if (inputEmailValue.value="") {
        panel_profile.className = "label1";
    } else {
        panel_profile.className = "label2";
    }


}

function validateEmail(inputEmailValue){

    let checkError = false;
    let regExpNumeros = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let labelS = document.querySelector("#labelError");

    if(regExpNumeros.test(inputEmailValue)){

    }else{
        checkError = true;

    }

    return checkError;

}