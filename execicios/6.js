let decimal = parseInt(prompt("Digite um número decimal: "));
let binario = "";

if (decimal === 0) {
  binario = "0";
} else {
  while (decimal > 0) {
    binario = (decimal % 2) + binario;
    decimal = Math.floor(decimal / 2);
  }
}

console.log("O número decimal " + decimal + " em binário é " + binario + ".");