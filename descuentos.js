function calcularDescuento() {
    const precio = document.getElementById("InputPrice").value;
    const descuento = document.getElementById("InputDiscount").value;
    const calculo = calcularPrecioConDescuento(precio, descuento);
    return document.getElementById("Resultado").innerText = "El precio con descuento es: Bs.-" + calculo;
};
const cupones = [
    { "discount": 15, "codigo": "mC!NRq&" },
    { "discount": 30, "codigo": "MRVn&yR" },
    { "discount": 50, "codigo": "CB*tr23" }
];


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
};

function buscarDescuento() {
    let mensaje;
    const codigo = document.getElementById("InputCodigo").value;
    const precio = document.getElementById("InputMonto").value;
    if (codigo != '' && precio != '') {
        const descuento = cupones.find(function(codigoDescuento) {
            return codigoDescuento.codigo == codigo;
        })
        if (descuento) {
            const calculo = calcularPrecioConDescuento(precio, descuento.discount);
            mensaje = document.getElementById("Resultado2").innerText = "El precio con " + descuento.discount + "% de descuento es: Bs.-" + calculo;
        } else {
            mensaje = alert("El código ingresado no es válido");
        }
    } else {
        mensaje = alert("porfavor llene los campos requeridos");
    }
    return mensaje;
};