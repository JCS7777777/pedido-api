function calcularPedido(valor, descontoPercentual) {
    const descontoAplicado = valor * (descontoPercentual / 100);
    const totalFinal = valor - descontoAplicado;

    return {
        subtotal: valor,
        descontoAplicado,
        totalFinal
    };
}

module.exports = { calcularPedido };
