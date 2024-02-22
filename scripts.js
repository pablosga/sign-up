let estadoContra = false;
const contraseña1 = document.querySelector("#contraseña");
const contraseña2 = document.querySelector("#confirm");
contraseña1.addEventListener("keyup", (e) =>{
    if (e.target.value == contraseña2.value) estadoContra = true;
    else estadoContra = false;
    validadorContra(estadoContra);
});
contraseña2.addEventListener("keyup", (e) => {
    if (e.target.value == contraseña1.value) estadoContra = true;
    else estadoContra = false;
    validadorContra(estadoContra);
});

function validadorContra(contra) {
    const mensaje = document.querySelector(".confirm");
    if (contraseña2.value == "") {
        mensaje.textContent = "* Campo Requerido";
        contraseña2.classList.add("invalido");
        contraseña2.classList.remove("valido");
    } else if (!contra) {
        mensaje.textContent = "* Las contraseñas deben coincidir";
        contraseña2.classList.add("invalido");
        contraseña2.classList.remove("valido");
    } else {
        mensaje.textContent = "";
        contraseña2.classList.add("valido");
        contraseña2.classList.remove("invalido");
    }
}

const formulario = document.querySelector("form");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let validadorInputs = true;
    let inputs = Array.from(document.querySelectorAll("input"));
    inputs =  inputs.slice(0, 5);
    inputs.forEach((input) => input.validity.valid? {}: validadorInputs = false)
    if (validadorInputs && contraseña2.classList.contains("valido")) {
        formulario.reset();
        contraseña2.classList.remove("valido");
        contraseña2.classList.add("invalido");
        document.querySelector(".confirm").textContent = "* Campo Requerido";
    } 

})

