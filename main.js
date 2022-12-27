    
/*Constructor objetos / estilistas  productos utilizados */

class Producto {
    constructor (producto, marca,precio) {        
        this.producto = producto;
        this.marca = marca;
        this.precio = precio;

    }
}

const productos = [
   {producto : "Shampoo Brillo", marca: "Loreal", precio: 500}, 
   {producto : "Shampoo Color", marca: "Redken", precio: 750}, 
   {producto : "Acondicionador nutritivo", marca: "Kerastase", precio: 1200}, 
   {producto : "Acondicionador nutritivo", marca: "Loreal", precio: 800}, 
   {producto : "Baño de crema reconstructor", marca: "Kerastase", precio: 1800}, 
   {producto : "Serum reconstructor", marca: "Loreal", precio: 750},
]

/***Almacenamiento de array productos***/


localStorage.setItem("productos", JSON.stringify(productos));
   


class Estilistas {
    constructor(nombreEstilista, puesto) {

        this.nombre = nombreEstilista;
        this.puesto = puesto;

    }
}    

        const listaEstilistas = [
            {
                nombre: "Florencia Rodriguez",
                puesto: "Colorista",
            },
            {
                nombre: "Julia López",
                puesto: "Colorista",
            },
            {
                nombre: "Barbara Duran",
                puesto: "Manicura",
            },
            {
                nombre: "Lucía Alberti",
                puesto: "Manicura",
            },
            {
                nombre: "Ezequiel Suárez",
                puesto: "Barbero",
            },
            {
                nombre: "Marcos Sánchez",
                puesto: "Barbero",
            },
        ];
    
 /***Almacenamiento de array estilistas***/
 
 localStorage.setItem("listaEstilistas", JSON.stringify(listaEstilistas));
   
 
//Constructor para carga de clientes//

class Cliente {
    constructor(nombre, telefono) {

        this.nombre = nombre;
        this.telefono = telefono;
    }
}

const clientes = [];

if (localStorage.getItem("clientes")) {
    let cliente =JSON.parse(localStorage.getItem("clientes"));
    for (let i = 0; i < cliente.length; i++) {
        clientes.push(cliente[i]);
    }
}

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    cargaCliente();
});

/***Funciones***/


function cargaCliente() {   
    const nombre = document.getElementById("nombre").value;    
    const telefono = document.getElementById("telefono").value;
    const nuevoCliente = new Cliente(nombre,telefono);
    clientes.push(nuevoCliente);    
    //Se cargan los datos de nuevo cliente en local storage//
    localStorage.setItem("clientes", JSON.stringify(clientes));
    formulario.reset();    
    
}
/**Funcion para muestra de los datos cargados de cliente**/

const datosCargadosClientes = document.getElementById("datosCargadosCliente");
const botonCargados = document.getElementById("botonCargados");

botonCargados.addEventListener("click", () => {
    informacionCliente ();
});

function informacionCliente() {
    datosCargadosClientes.innerHTML = "";
    clientes.forEach((cliente) => {
        const div=document.createElement("div");
        div.innerHTML = `
                          <div>
                              <p> Nombre Cliente : ${cliente.nombre}</p>
                              <p> Nombre Cliente : ${cliente.telefono}</p>
                          </div>
                        `;
      datosCargadosClientes.appendChild(div);                  

    });
}


/***funcion listado estilistas***/

function estilistasSalon() {

   for (let  i = 0; i < 6; i++) {
       console.log(listaEstilistas[i]);
      
   }

let estilista = document.getElementById("estilistas");
console.log(estilista);

}

function cargaTrabajoRealizado () {
    let trabajoRealizado = getElementById("comentarios");
    console.log (trabajoRealizado);
}

function cargaProductos () {
    let compraProductos = alert( "Productos a la venta");    
/*Lista de productos adquiridos a seleccionar (ejemplo por consola)*/ 

productos.forEach((producto) => {
   console.log(producto); 
});

/*Selección de productos*/

let productoElegido = prompt("Ingrese el producto elegido");

console.log( productos.find ((producto) => producto.producto === productoElegido) );

let agregarProducto = prompt("Desea ingresar otro producto?");
  if (agregarProducto === "Si") {
    let productoElegido = prompt("Ingrese el producto elegido");
    console.log( productos.find ((producto) => producto.producto === productoElegido) );
  } else {
    alert("No agrega más productos");
  }

/* Luego se añadira funcion para calcular el total por productos y servicios realizados*/ 
}
        
