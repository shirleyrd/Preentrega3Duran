//Pagina de ingreso al sistema*/

const form = document.getElementById("formIngreso");
let password = 12345;

let usuario = document.querySelector("#usuario").value;
let ingresoPassword = parseInt(document.querySelector("#password").value);

/*Boton  submit*/
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    alert(`Bienvenido/a ${usuario}`);  
    
});


function login() {    
    const ingresoPassword = document.getElementById('password').value;  
    // Comparar la contraseña ingresada por el usuario con la contraseña correcta
    if (password === ingresoPassword) {
      // Mostrar mensaje de bienvenida si la contraseña es correcta
      alert('Bienvenido/a ${usuario}');
    } else {
      // Mostrar mensaje de error si la contraseña es incorrecta
      alert('Contraseña equivocada');
    }
}

login ();

 