const { calcularPedido } = require('../src/pedido');

test('calcula pedido com desconto de 10%', () => {
    const resultado = calcularPedido(100, 10);
    expect(resultado.subtotal).toBe(100);
    expect(resultado.descontoAplicado).toBe(10);
    expect(resultado.totalFinal).toBe(90);
});
