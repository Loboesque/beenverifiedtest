

const botonGO = document.querySelector('#go-button');

botonGO.addEventListener('click', guardarLS);

function guardarLS() {

    const inputEmailValue = document.querySelector('#email').value;

    setPersonasStorage(inputEmailValue)
    window.location.href= "result_name.html";
}

function setPersonasStorage(personasLocal) {
    localStorage.setItem("emailParaVerificar", JSON.stringify(personasLocal));
    console.log(JSON.parse(localStorage.getItem("emailParaVerificar")));

}