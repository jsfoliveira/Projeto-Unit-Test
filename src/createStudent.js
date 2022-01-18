/*
  Dada uma função chamada createStudent que recebe como parâmetro um nome,
  retorne um objeto que contenha duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Faça a função da chave feedback com arrow functions!

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/
/* RESOLUÇÃO: o parâmetro tem que ser name e deve retornar um objeto com duas chaves: name e feedback. Eu tentei colocar um valor na chave name, mas vi que não precisa. No feedback tem como valor uma função que retorna a frase descrita. */
const createStudent = (name) => ({
  name,
  feedback: () => 'Eita pessoa boa!',
});

module.exports = createStudent;
