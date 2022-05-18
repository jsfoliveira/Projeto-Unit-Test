# 	:woman_technologist: Project Unit Test

Esse projeto contém uma série de informações sobre o que eu aprendi aqui na Trybe ao longo dos blocos do curso de desenvolvimento web da Trybe. <br>
As habilidades desenvolvidas foram:
* Escrever testes unitários para funções utilizando o módulo Jest do NodeJS para verificar o correto funcionamento dessas funções;
* A partir de testes já implementados, escrever funções de forma que elas atendam aos testes propostos;
* Escrever testes e funções utilizando uma abordagem de desenvolvimento orientado a testes.

## :rocket:Começando
Esse projeto foi proposto pelo curso de desenvolvimento web da Trybe.
### Desenvolvimento
Essa página foi feita usando JavaScript e Jest.
### Commits
Os commits foram feitos de acordo com os requisitos finalizados.
### Branch
Todo o projeto foi feita na branch 'juliana-oliveira-js-unit-tests', isso por conta da exigência do curso.
### Instalação
Antes de realizar o projeto, precisei instalar as dependências usando npm install.
### Testes
Os testes usando foram ESLint e Cypress, através dos **comandos**: <br>
* npm test <br>
* npm run lint:styles
### Autores
Esse foi um projeto individual,que desenvolvido somente por Juliana Oliveira.
### Ferramentas usadas
Foi usado Visual Studio Code, além do Trello que auxiliou na organização das tarefas.
### Framework usado
Nenhum.
### Informações importantes
Os arquivos que têm as resoluções dos requisitos são:
* index.html
* style.css
* script.js.

## :footprints:Requisitos
### Metodologia usada
No trabalho do desenvolvimento de software a gente sempre tem prazos, muitas vezes os prazos são apertados.<br>
Por outro lado, eu não quero criar algo que não entendo perfeitamente, como também fazer códigos rápidos pode levar a erros que podem demorar muito pra corrigir.<br>
Por isso, usei e sempre uso o método Baby Steps, que é uma estratégia de abordar o desafio passo à passo, defensivamente.<br>
Baby steps é um termo em inglês que quer dizer passos de bebê. Refere-se a fazer as coisas, quaisquer que sejam, devagar, com calma, passo a passo.
#### :footprints:Requisito 1
Implemente a função average.
* A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos. Caso a função receba algum valor não númerico ou um array vazio, o valor undefined deve ser retornado. Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1. O arquivo average.spec.js contém os testes para average já implementados. Implemente a função no arquivo src/average.js de forma que ela atenda aos testes propostos.
#### :footprints:Requisito 2
Implemente os casos de teste para a função numbers.
* A função numbers recebe um array (tamanho variável) e retorna true se todos os parâmetros forem do tipo 'number' e false caso contrário. Essa função já está implementada no arquivo src/numbers.js. Escreva pelo menos quatro testes para essa função para garantir que a implementação de numbers está correta.
#### :footprints:Requisito 3
Implemente a função vqv.
* Use template literals para escrever uma função que recebe seu nome e sua idade e retorna o parágrafo descrito abaixo:<br>
`Oi, meu nome é Tunico!
Tenho 30 anos,
trabalho na Trybe e mando muito em programação!
#VQV!`
* Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado. O arquivo vqv.spec.js contém os testes para vqv já implementados. Implemente a função no arquivo src/vqv.js de forma que ela atenda aos testes propostos.

#### :footprints:Requisito 4
Implemente os casos de teste para a função circle.
* A função circle recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência). Se não for especificado um raio, a função retorna undefined. Essa função já está implementada no arquivo src/circle.js. Escreva pelo menos seis testes para essa função para garantir que a implementação de circle está correta.
#### :footprints:Requisito 5
Implemente a função createStudent.
* A função createStudent recebe como parâmetro um nome, e retorna um objeto contendo duas chaves:<br>
1. name, contendo o nome passado como parâmetro;<br>
2. feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.<br>
* O arquivo createStudent.spec.js contém os testes para createStudent já implementados. Implemente a função no arquivo src/createStudent.js de forma que ela atenda aos testes propostos.
#### :footprints:Requisito 6
Implemente os casos de teste para a função productDetails.

* A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos:<br>
productDetails('Alcool gel', 'Máscara');<br>
Retorna:<br>
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
* Essa função já está implementada no arquivo src/productDetails.js. Escreva pelo menos cinco testes para essa função no arquivo tests/productDetails.js para garantir que a implementação de productDetails está correta.
#### :footprints:Requisito 7
Implemente as funções calculator e arrayGenerator.
* A função calculator recebe dois números inteiros como parâmetro e retorna um objeto com as seguintes chaves: sum;
mult;
div;
sub.
* Para cada chave atribua como valor a operação correspondente à sua chave:
1. sum: retorna o resultado da soma dos dois números;<br>
2. mult: retorna o resultado da multiplicação dos dois números;<br>
3. div: retorna o resultado da divisão dos dois números;<br>
4. sub: retorna o resultado da subtração dos dois números.<br>
* Os resultados das divisões devem sempre ser arredondados para baixo.
* Já a função arrayGenerator converte objetos em arrays, de chaves, valores ou ambos. Ela deve receber dois parâmetros:
1. o primeiro parâmetro deve ser uma string que indica o tipo de conversão; <br>
2. o segundo parâmetro deve ser um objeto semelhante ao que é retornado pela função calculator que você acabou de desenvolver. 
* Comportamento:
arrayGenerator('keys', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ 'sum', 'mult', 'div', 'sub' ]
arrayGenerator('values', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ 3, 2, 1, 0 ]
arrayGenerator('entries', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ [ 'sum', 3 ], [ 'mult', 2 ], [ 'div', 1 ], [ 'sub', 0 ] ]
* O arquivo objPlayground.spec.js contém os testes para calculator e arrayGenerator já implementados. Implemente as funções no arquivo src/objPlayground.js de forma que ela atenda aos testes propostos.
#### :footprints:Requisito 8
 Implemente a função myCounter.
 * A função myCounter possui dois loops aninhados que inserem valores dentro de um array. Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada. Corrija a função myCounter, sem eliminar nenhum dos loops de repetição, para que a função retorne o array correto. O arquivo myCounter.spec.js contém os testes para myCounter já implementados. Implemente a função no arquivo src/myCounter.js de forma que ela atenda aos testes propostos.
#### :footprints:Requisito 9
Implemente os casos de teste para a função getCharacter.
* A função getCharacter recebe uma string que representa o nome de um personagem e retorna um objeto contendo seu nome, sua classe e suas frases.<br>
getCharacter('Arya');
* Retorna:<br>
{
  name: 'Arya Stark',
  class: 'Rogue',
  phrases: ['Not today', 'A girl has no name.']
}
* Essa função já está implementada no arquivo src/getCharacter.js. Escreva pelo menos seis testes para essa função no arquivo tests/getCharacter.spec.js para garantir que a implementação de getCharacter está correta.
