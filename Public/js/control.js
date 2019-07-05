const botonGO = document.querySelector('#go-button');

botonGO.addEventListener('click', buscarPorEmail2);

let numeros = [];
let familiares = [];

buscarPorEmail();

/*function getEmail(){
    let email = JSON.parse(localStorage.getItem("emailParaVerificar"));

    return email;
}*/

function buscarPorEmail() {

    //const inputEmailValue = document.querySelector('#email').value;
    let emailToSearch = JSON.parse(localStorage.getItem("emailParaVerificar"));

    let personas = {

        "data": [
            {
                "name": "Nickole Beatrice Smith",
                "address": "398 Pleasant Pine Cir. Harrington, DE 19123",
                "email": "nicobes@gmail.com",
                "age": 45,
                "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                "phoneNumbers": [
                    {
                        "phone": "(302) 792-8434"
                    },
                    {
                        "phone": "(302) 792-1134"
                    },
                    {
                        "phone": "(302) 792-2234"
                    },
                    {
                        "phone": "(302) 792-3334"
                    }
                ],
                "relatives": [
                    {
                        "name": "Susan M Smith"
                    },
                    {
                        "name": "Malcolm W Smith"
                    },
                    {}
                ]
            },
            {
                "name": "Jacke Melyn Postre",
                "address": "128 Pleasant Pine Cir. Harrington, DE 48402",
                "email": "jackpost@gmail.com",
                "age": 23,
                "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                "phoneNumbers": [
                    {
                        "phone": "(512) 842-2124"
                    }
                ],
                "relatives": [
                    {
                        "name": "Jay M Postre"
                    },
                    {
                        "name": "May W Postre"
                    }
                ]
            },
            {
                "name": "Louis K Patterson",
                "address": "333 Pleasant Pine Cir. Harrington, DE 11111",
                "email": "lpatterson@gmail.com",
                "age": 31,
                "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                "phoneNumbers": [],
                "relatives": [
                    {
                        "name": "Jay M Postre"
                    },
                    {
                        "name": "May W Postre"
                    },
                    {}
                ]
            },
            {
                "name": "Mickey K Mouse",
                "address": "443 Pleasant Pine Cir. Harrington, DE 12211",
                "email": "mmouse@gmail.com",
                "age": 21,
                "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                "phoneNumbers": [
                    {
                        "phone": "(444) 792-8434"
                    },
                    {
                        "phone": "(555) 792-1134"
                    }
                ],
                "relatives": []
            },
            {
                "name": "Allan K Moury",
                "address": "312 Pleasant Pine Cir. Harrington, DE 11113",
                "email": "amoury@gmail.com",
                "age": 27,
                "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                "phoneNumbers": [],
                "relatives": []
            }
        ]

    }


    for(i = 0; i < personas.data.length; i++){

        if(personas.data[i].email == emailToSearch){

            
            var nameAge = document.createElement("p");
            let name = personas.data[i].name;
            let age = personas.data[i].age;

            nameAge.innerText = name+", "+age;
            nameAge.setAttribute("class", "individual-name-age");

            var notesP = document.createElement("p");
            notesP.innerText = personas.data[i].notes;
            notesP.setAttribute("class", "individual-notes");

            var addressP = document.createElement("p");
            addressP.innerText = personas.data[i].address;
            addressP.setAttribute("class", "individual-address");

            let thisPersonPhones = personas.data[i].phoneNumbers;
            getPhones(thisPersonPhones);

            var phoneNumbersP = document.createElement("p");
            phoneNumbersP.innerText =  numeros;
            phoneNumbersP.setAttribute("class", "individual-phone-numbers");

            var emailP = document.createElement("p");
            emailP.innerText = personas.data[i].email;
            emailP.setAttribute("class", "individual-email");

            let thisPersonRelatives = personas.data[i].relatives;
            getRelatives(thisPersonRelatives);

            var relativesP = document.createElement("p");
            relativesP.innerText = familiares;
            relativesP.setAttribute("class", "individual-relatives");

            document.getElementById("name-container-dinamic").innerHTML='';
            document.getElementById("divsData").innerHTML='';


            var addressDiv = document.createElement("div");
            addressDiv.setAttribute("class", "individual-address");
            addressDiv.setAttribute("id", "addressP");

            var h2Address = document.createElement("h2");
            h2Address.setAttribute("class", "retrieved-info-titles");
            h2Address.innerText = "Address";


            var phoneDiv = document.createElement("div");
            phoneDiv.setAttribute("class", "individual-phone-numbers");
            phoneDiv.setAttribute("id", "phoneP");

            var h2Phone = document.createElement("h2");
            h2Phone.setAttribute("class", "retrieved-info-titles");
            h2Phone.innerText = "Phone Numbers";


            var emailDiv = document.createElement("div");
            emailDiv.setAttribute("class", "individual-email");
            emailDiv.setAttribute("id", "emailP");

            var h2Email = document.createElement("h2");
            h2Email.setAttribute("class", "retrieved-info-titles");
            h2Email.innerText = "Email";


            var relativesDiv = document.createElement("div");
            relativesDiv.setAttribute("class", "individual-relatives");
            relativesDiv.setAttribute("id", "relativesPP");

            var h2Relatives = document.createElement("h2");
            h2Relatives.setAttribute("class", "retrieved-info-titles");
            h2Relatives.innerText = "Relatives";


            addressDiv.appendChild(h2Address);
            addressDiv.appendChild(addressP);
            phoneDiv.appendChild(h2Phone);
            phoneDiv.appendChild(phoneNumbersP);
            emailDiv.appendChild(h2Email);
            emailDiv.appendChild(emailP);
            relativesDiv.appendChild(h2Relatives);
            relativesDiv.appendChild(relativesP);


            document.getElementById("name-container-dinamic").appendChild(nameAge);
            document.getElementById("name-container-dinamic").appendChild(notesP);

            document.getElementById("divsData").appendChild(addressDiv);
            document.getElementById("divsData").appendChild(phoneDiv);
            document.getElementById("divsData").appendChild(emailDiv);
            document.getElementById("divsData").appendChild(relativesDiv);

            

        }else{


        }

    }


}


function getPhones(thisPersonPhones){

    for(u = 0; u < numeros.length; u++){

        numeros[u] = '';

    }
    

    for(e = 0; e < thisPersonPhones.length; e++){

        numeros[e] = JSON.stringify(thisPersonPhones[e].phone);

    }

}

function getRelatives(thisPersonRelatives){

    for(z = 0; z < familiares.length; z++){

        familiares[z] = '';

    }
    

    for(e = 0; e < thisPersonRelatives.length; e++){

        familiares[e] = JSON.stringify(thisPersonRelatives[e].name);

    }

}



function buscarPorEmail2() {

    const inputEmailValue = document.querySelector('#email').value;
    //let emailToSearch = JSON.parse(localStorage.getItem("emailParaVerificar"));

    let personas = {

        "data": [
            {
                "name": "Nickole Beatrice Smith",
                "address": "398 Pleasant Pine Cir. Harrington, DE 19123",
                "email": "nicobes@gmail.com",
                "age": 45,
                "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                "phoneNumbers": [
                    {
                        "phone": "(302) 792-8434"
                    },
                    {
                        "phone": "(302) 792-1134"
                    },
                    {
                        "phone": "(302) 792-2234"
                    },
                    {
                        "phone": "(302) 792-3334"
                    }
                ],
                "relatives": [
                    {
                        "name": "Susan M Smith"
                    },
                    {
                        "name": "Malcolm W Smith"
                    },
                    {}
                ]
            },
            {
                "name": "Jacke Melyn Postre",
                "address": "128 Pleasant Pine Cir. Harrington, DE 48402",
                "email": "jackpost@gmail.com",
                "age": 23,
                "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                "phoneNumbers": [
                    {
                        "phone": "(512) 842-2124"
                    }
                ],
                "relatives": [
                    {
                        "name": "Jay M Postre"
                    },
                    {
                        "name": "May W Postre"
                    }
                ]
            },
            {
                "name": "Louis K Patterson",
                "address": "333 Pleasant Pine Cir. Harrington, DE 11111",
                "email": "lpatterson@gmail.com",
                "age": 31,
                "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                "phoneNumbers": [],
                "relatives": [
                    {
                        "name": "Jay M Postre"
                    },
                    {
                        "name": "May W Postre"
                    },
                    {}
                ]
            },
            {
                "name": "Mickey K Mouse",
                "address": "443 Pleasant Pine Cir. Harrington, DE 12211",
                "email": "mmouse@gmail.com",
                "age": 21,
                "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                "phoneNumbers": [
                    {
                        "phone": "(444) 792-8434"
                    },
                    {
                        "phone": "(555) 792-1134"
                    }
                ],
                "relatives": []
            },
            {
                "name": "Allan K Moury",
                "address": "312 Pleasant Pine Cir. Harrington, DE 11113",
                "email": "amoury@gmail.com",
                "age": 27,
                "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                "phoneNumbers": [],
                "relatives": []
            }
        ]

    }


    for(i = 0; i < personas.data.length; i++){

        if(personas.data[i].email == inputEmailValue){

            
            var nameAge = document.createElement("p");
            let name = personas.data[i].name;
            let age = personas.data[i].age;

            nameAge.innerText = name+", "+age;
            nameAge.setAttribute("class", "individual-name-age");

            var notesP = document.createElement("p");
            notesP.innerText = personas.data[i].notes;
            notesP.setAttribute("class", "individual-notes");

            var addressP = document.createElement("p");
            addressP.innerText = personas.data[i].address;
            addressP.setAttribute("class", "individual-address");

            let thisPersonPhones = personas.data[i].phoneNumbers;
            getPhones(thisPersonPhones);

            var phoneNumbersP = document.createElement("p");
            phoneNumbersP.innerText =  numeros;
            phoneNumbersP.setAttribute("class", "individual-phone-numbers");

            var emailP = document.createElement("p");
            emailP.innerText = personas.data[i].email;
            emailP.setAttribute("class", "individual-email");

            let thisPersonRelatives = personas.data[i].relatives;
            getRelatives(thisPersonRelatives);

            var relativesP = document.createElement("p");
            relativesP.innerText = familiares;
            relativesP.setAttribute("class", "individual-relatives");

            document.getElementById("name-container-dinamic").innerHTML='';
            document.getElementById("divsData").innerHTML='';


            var addressDiv = document.createElement("div");
            addressDiv.setAttribute("class", "individual-address");
            addressDiv.setAttribute("id", "addressP");

            var h2Address = document.createElement("h2");
            h2Address.setAttribute("class", "retrieved-info-titles");
            h2Address.innerText = "Address";


            var phoneDiv = document.createElement("div");
            phoneDiv.setAttribute("class", "individual-phone-numbers");
            phoneDiv.setAttribute("id", "phoneP");

            var h2Phone = document.createElement("h2");
            h2Phone.setAttribute("class", "retrieved-info-titles");
            h2Phone.innerText = "Phone Numbers";


            var emailDiv = document.createElement("div");
            emailDiv.setAttribute("class", "individual-email");
            emailDiv.setAttribute("id", "emailP");

            var h2Email = document.createElement("h2");
            h2Email.setAttribute("class", "retrieved-info-titles");
            h2Email.innerText = "Email";


            var relativesDiv = document.createElement("div");
            relativesDiv.setAttribute("class", "individual-relatives");
            relativesDiv.setAttribute("id", "relativesPP");

            var h2Relatives = document.createElement("h2");
            h2Relatives.setAttribute("class", "retrieved-info-titles");
            h2Relatives.innerText = "Relatives";


            addressDiv.appendChild(h2Address);
            addressDiv.appendChild(addressP);
            phoneDiv.appendChild(h2Phone);
            phoneDiv.appendChild(phoneNumbersP);
            emailDiv.appendChild(h2Email);
            emailDiv.appendChild(emailP);
            relativesDiv.appendChild(h2Relatives);
            relativesDiv.appendChild(relativesP);


            document.getElementById("name-container-dinamic").appendChild(nameAge);
            document.getElementById("name-container-dinamic").appendChild(notesP);

            document.getElementById("divsData").appendChild(addressDiv);
            document.getElementById("divsData").appendChild(phoneDiv);
            document.getElementById("divsData").appendChild(emailDiv);
            document.getElementById("divsData").appendChild(relativesDiv);

            

        }else{


        }

    }



}

