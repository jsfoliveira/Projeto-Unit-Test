/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
/* RESOLUÇÃO: Eu tentei juntar o primeiro if com o segundo, mas não funcionou. Peguei a dica de separar na monitoria do Sumo. No primeiro if diz que, se for um array vazio, será undefined. O segundo if diz que, se não for number, retornará undefined, caso contrário, irá fazer a soma de cada item, retornará um número arredondado da divisão dessa soma com o tamanho do array */
const average = (number) => {
 if (number.length === 0) {
   return undefined;
 }
  let soma = 0;
  for (let index = 0; index < number.length; index += 1) {
    if (typeof number[index] !== 'number') {
      return undefined;
    }
    soma += number[index];
  }
  return Math.round(soma / number.length);
};

module.exports = average;