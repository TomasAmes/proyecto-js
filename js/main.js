const nombre = prompt( "Escriba su nombre" )
    alert ( "Bienvenido" )

const edad = parseInt(prompt("Ingrese su edad"))

if ( edad >= 18) {
    alert ( "Puede Ingresar")
    
} else {
    alert ( "No Puede Ingresar")
}

function solicitarCantidad() {
    let cantidadSolicitada = prompt ("Ingresar monto que desea adquirir");
    while(cantidadSolicitada != "ESC") {
        switch (cantidadSolicitada) {
            case "10.000":
                alert("Perfecto, podemos cubrir esa cantidad");
                break;
            case "10.000":
                alert("Perfecto, podemos cubrir esa cantidad");
                break;
            case "50.000":
                alert("Perfecto, podemos cubrir esa cantidad");
                break;
            case "100.000":
                alert("Perfecto, podemos cubrir esa cantidad");
                break;
            case "200.000":
                alert("Perfecto, podemos cubrir esa cantidad");
                break;
            case "300.000":
                alert("Perfecto, podemos cubrir esa cantidad");
                break;
            case "400.000":
                alert("Perfecto, podemos cubrir esa cantidad");
                break;
            case "500.000":
                alert("Perfecto, es el limite maximo que podemos cubrir");
                break;
            default:
                alert("No podemos cubrir esa cantidad, por favor ingrese otro monto")
                break;
        }
        cantidadSolicitada = prompt("Ingresar monto que desea adquirir");
    }
}
solicitarCantidad();