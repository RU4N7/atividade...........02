let numero = Number(prompt("Digite um número inteiro positivo:"));
let numeroInvertido = 0;

while (numero > 0) {
  let digito = numero % 10;
  numeroInvertido = (numeroInvertido * 10) + digito; 
  numero = Math.floor(numero / 10);
}

document.write(`Número invertido:  ${ numeroInvertido}`);
