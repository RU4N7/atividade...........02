let quantidadePessoas = prompt("Informe a quantidade de pessoas: ");
let somaIdadeMaiores = 0;
let quantidadeMaiores = 0;

for (let i = 0; i < quantidadePessoas; i++) {
  let idade = parseInt(prompt("Informe a idade da pessoa " + (i + 1) + ": "));
  
  if (idade >= 18) {
    somaIdadeMaiores += idade;
    quantidadeMaiores++;
  }
}

let mediaIdadeMaiores = somaIdadeMaiores / quantidadeMaiores;

document.write(`Soma das idades das pessoas maiores de idade: ${somaIdadeMaiores}<br>`);
document.write(`Média de idade das pessoas maiores de idade: ${mediaIdadeMaiores}`);
