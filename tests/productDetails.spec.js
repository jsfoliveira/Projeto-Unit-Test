const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    /* RESOLUÇÃO: estou verificando se o typeof do productDetails é uma função. */
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    /* RESOLUÇÃO: Pelo que li no https://developer.mozilla.org/, o método Array.isArray() retorna true se um objeto é uma array */
    expect(Array.isArray(productDetails('', '')));
    // Teste se o array retornado pela função contém dois itens dentro.
    /* RESOLUÇÃO: estou verificando o tamanho da função, se tem dois parâmetros. Eu não consegui colocar (,), tive que botar as aspas. */
    expect(productDetails('','').length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    /* RESOLUÇÃO: estou verificando se o typeof dos parâmetros é object. */
    expect(typeof productDetails('', '')).toBe('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    /* RESOLUÇÃO: estou verificando se dois parâmetros não são iguais. */
    expect(productDetails('a', 'b')[0]).not.toEqual(productDetails('c', 'd')[0]);
    // Teste se os dois productIds terminam com 123.
   
  });
});
