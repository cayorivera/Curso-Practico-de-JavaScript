function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function calcularDescuento() {
    const precio = document.getElementById("InputPrice").value;
    const descuento = document.getElementById("InputDiscount").value;
    const calculo = calcularPrecioConDescuento(precio, descuento);
    return document.getElementById("Resultado").innerText = "El precio con descuento es: Bs.-" + calculo;
}