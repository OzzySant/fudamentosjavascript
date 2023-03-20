// Funcao normal
function apresentar(nome) {
    return `Meu nome é ${nome}`;
}
apresentar('Ana');

// Exemplo de Arrow function
// Exemplo 1
const apresentarArrow = (nome) => `Meu nome é ${nome}`;

// Exemplo 2
const soma = (num1, num2) => num1 + num2;


// Arrow function com mais de uma linha de instrução
const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10) {
        return "Somente numeros de 1 a 9";
    } else {
        return num1 + num2;
    }
}

// Hoisting: arrow function se comporta como expressão
// operador maior ou igual que
// >=