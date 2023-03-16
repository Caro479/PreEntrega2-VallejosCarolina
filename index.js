const productos = [
    {   
        codigo:1,
        marca: "TV Philips",
        pulgadas:50,
        precio: 106000,
    },
    {        
        codigo:2,
        marca: "TV TCL",
        pulgadas:40,
        precio: 66000,
    },
    {   
        codigo:3,
        marca: "TV Samsung",
        pulgadas: 55,
        precio: 250000,
    },
    
    {
        codigo:4,
        marca: "TV Admiral",
        pulgadas: 32,
        precio: 251000,
    },
    
];

let carrito = []

let seleccion = prompt("¡Buenos días! ¿Desea adquirir algún televisor?");

while(seleccion != "si" && seleccion != "no" ){
    alert("Por favor, ingrese si o no")
    seleccion = prompt("¿Desea adquirir algún televisor? si o no");
}

if(seleccion == "si"){
    alert("A continuación nuestra lista de televisores disponibles")
    let todoLosProductos = productos.map(
        (producto) => producto.codigo + ")" +producto.marca+ " " +producto.pulgadas+ " pulgadas" +" $"+ producto.precio
    );
    alert(todoLosProductos.join(" - "))
} else if (seleccion == "no"){
  alert("¡Gracias por venir, hasta pronto!")
}

while(seleccion != "no"){
    let producto= prompt("Agrega un televisor a tu carrito")
    let precio = 0

    if(producto == "TV Philips" || producto == "TV TCL" || producto == "TV Samsung" || producto == "TV Admiral"){
        switch(producto) {
        case "TV Philips":
            precio = 106000; 
            break;
        case "TV TCL":
            precio = 66000; 
            break;
        case "TV Samsung":
            precio = 250000; 
            break;
        case "TV Admiral":
            precio = 251000; 
            break;
        default:
        break;

        }

    let unidades = parseInt(prompt("¿Cúantas unidades desea llevar?"))

    carrito.push({producto,unidades,precio})
    console.log(carrito)
    } else {
        alert("No tenemos ese televisor")
    }

    seleccion = prompt("¿Desea seguir comprando?")

    while(seleccion == "no"){
    alert("Gracias por la compra! Hasta pronto")
    carrito.forEach((carritoFinal) => {
        console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
        Total a parar por producto ${carritoFinal.unidades + carritoFinal.precio}`)
    })
    break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por su compra es: ${total}`)