export default class ServicoDePagamento {
    #pagamentos
    
    constructor() {
        this.#pagamentos = [];
    }   

    pagar(codigo, empresa, valor) {
        let categoria;
        if (valor > 100.00) {
            categoria = 'cara';
        } else {
            categoria = 'padrão';
        }

        this.#pagamentos.push({ 
            codigoBarras: codigo,
            empresa: empresa,
            valor: valor,
            categoria: categoria
        });
    }

    consultarUltimoPagamento() {
        return this.#pagamentos.at(-1);
    }

}            