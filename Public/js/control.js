/*
const botonGO = document.querySelector('#go-button');
const appen1 = document.querySelector('.info-container');

//const inputEmailValue = document.querySelector('#email').value;

botonGO.addEventListener('click', buscarPorEmail);*/

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

            //console.log("Yes!" + JSON.stringify(personas.data[i]));
            
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

            var phoneNumbersP = document.createElement("p");
            phoneNumbersP.innerText = personas.data[i].phoneNumbers[0].phone;
            phoneNumbersP.setAttribute("class", "individual-phone-numbers");

            var emailP = document.createElement("p");
            emailP.innerText = personas.data[i].email;
            emailP.setAttribute("class", "individual-email");

            var relativesP = document.createElement("p");
            relativesP.innerText = personas.data[i].relatives[0].name;
            relativesP.setAttribute("class", "individual-relatives");






            document.getElementById("name-container-dinamic").appendChild(nameAge);
            document.getElementById("name-container-dinamic").appendChild(notesP);
            document.getElementById("addressP").appendChild(addressP);
            document.getElementById("phoneP").appendChild(phoneNumbersP);
            document.getElementById("emailP").appendChild(emailP);
            document.getElementById("relativesPP").appendChild(relativesP);

        }else{


        }

    }



}


/*var nameAge = document.createElement("p")
            let name = personas.data[i].name
            let age = personas.data[i].age

            nameAge.innerText = name+", "+age
            document.getElementsByClassName("name-notes-container").appendChild(nameAge);*/







/*function guardarPersonasLocalStorage() {

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

        if(personas.data[i].email == emailValue){

        }else{}

        console.log(personas.data[i])
    }

    

};*/

/*function setPersonasStorage(personasLocal) {
    localStorage.setItem("personasParaVerificar", JSON.stringify(personasLocal));
    console.log(JSON.parse(localStorage.getItem("personasParaVerificar")));

}*/