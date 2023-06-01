const numero = parseInt(prompt("Digite um número inteiro: "));
let ePrimo = true;

if (numero <= 1) {
  ePrimo = false;
} else {
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      ePrimo = false;
      break;
    }
  }
}

if (ePrimo) {
    document.write(numero + " é um número primo.");
} else {
    document.write(numero + " não é um número primo.");
}