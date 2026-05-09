import ServicoDePagamento from '../src/servicoDePagamento.js';
import assert from 'node:assert';

describe('ServicoDePagamento - Realizar Pagamento de Categorias Diferentes e Consultar Último Pagamento', () => {
    it('deve realizar um pagamento categoria padrão e consultar o último pagamento', () => {
        const servicoDePagamento = new ServicoDePagamento();

        servicoDePagamento.pagar('1234-5678-9012', 'Empresa A', 51.20);
        const pagamento = servicoDePagamento.consultarUltimoPagamento();

        assert.equal(pagamento.codigoBarras, '1234-5678-9012');
        assert.equal(pagamento.empresa, 'Empresa A');
        assert.equal(pagamento.valor, 51.20);
        assert.equal(pagamento.categoria, 'padrão');

        console.log(servicoDePagamento.consultarUltimoPagamento());
    });

    it('deve realizar um pagamento categoria cara e consultar o último pagamento', () => {
        const servicoDePagamento = new ServicoDePagamento();

        servicoDePagamento.pagar('9876-5432-1098', 'Empresa B', 132.60);
        const pagamento = servicoDePagamento.consultarUltimoPagamento();

        assert.equal(pagamento.codigoBarras, '9876-5432-1098');
        assert.equal(pagamento.empresa, 'Empresa B');
        assert.equal(pagamento.valor, 132.60);
        assert.equal(pagamento.categoria, 'cara');

        console.log(servicoDePagamento.consultarUltimoPagamento());
    });

});