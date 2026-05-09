# Serviço de Pagamentos

Projeto simples em Node.js que implementa a classe `ServicoDePagamento`.

## O que faz

A classe armazena pagamentos em memória e permite:

- registrar um pagamento com código de barras, empresa e valor
- consultar o último pagamento realizado
- categorizar o pagamento como `cara` quando o valor é maior que `100.00`, caso contrário `padrão`

## Exemplo de uso

```js
import ServicoDePagamento from './src/servicoDePagamento.js';

const servicoDePagamento = new ServicoDePagamento();
servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
console.log(servicoDePagamento.consultarUltimoPagamento());
```

Saída esperada:

```js
{
  codigoBarras: '0987-7656-3475',
  empresa: 'Samar',
  valor: 156.87,
  categoria: 'cara'
}
```

## Como testar

O projeto usa testes com `mocha`. Execute:

```bash
npm install
npx mocha
```

Se quiser rodar apenas esse teste específico:

```bash
npx mocha test/servicoDePagamento.test.js
```

## Estrutura

- `src/servicoDePagamento.js` - implementação da classe
- `test/servicoDePagamento.test.js` - testes de pagamento e consulta do último registro
- `package.json` - dependências do projeto
