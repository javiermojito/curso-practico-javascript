// const precioOriginal = 120;
// const descuento = 18;

/* function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}
 */

function calcularPrecioConDescuento(precio, cupon) {
    let descuento = 0;

    descuento = validarCupon(cupon);

    if (descuento === 0) {
        return precio;
    } else {
        const porcentajePrecioConDescuento = 100 - descuento;
        const precioConDescuento =
            (precio * porcentajePrecioConDescuento) / 100;

        pintarMensaje(`El precio con descuento es: $${precioConDescuento}`);

        return precioConDescuento;
    }
}

function validarCupon(cupon) {
    const cuponValidado = cupones.find((i) => i.codigo == cupon);
    let descuento = 0;

    if (cuponValidado) {
        if (cuponValidado.state) {
            cuponValidado.state = false;
            descuento = cuponValidado.descuento;
            pintarMensaje(`Se aplicó un descuento de ${descuento}%`);
        } else {
            pintarMensaje(`Este cupón ya fue usado.`);
        }
    } else {
        pintarMensaje("Cupón no válido, no se aplicó ningún descuento.");
    }

    return descuento;
}

function pintarMensaje(texto) {
    document.getElementById("ResultPrice").innerText += `
    ${texto}`;
}

function limpiarMensaje() {
    document.getElementById("ResultPrice").innerText = ``;
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });

function onClickButtonPriceDiscount() {
    limpiarMensaje();

    const inputPrice = document.getElementById("InputPrice");
    const price = inputPrice.value;

    /* const inputDiscount = document.getElementById("InputDiscount");
    const discount = inputDiscount.value; */

    //Obtener el cupón
    const inputCoupon = document.getElementById("InputCoupon");
    const coupon = inputCoupon.value;

    calcularPrecioConDescuento(price, coupon);
}

let cupones = [
    {
        codigo: "ASD123",
        descuento: 15,
        state: true,
    },
    {
        codigo: "ASD124",
        descuento: 20,
        state: true,
    },
    {
        codigo: "ASD125",
        descuento: 50,
        state: true,
    },
];
