const depositoInicial = parseFloat(prompt("Digite o valor do depósito inicial: "));
const taxaJuros = parseFloat(prompt("Digite a taxa de juros (em %): "));

const saldoMes = [depositoInicial];
let totalJuros = 0;

for (let i = 1; i <= 24; i++) {
  const juros = saldoMes[i - 1] * (taxaJuros / 100);
  saldoMes[i] = saldoMes[i - 1] + juros;
  totalJuros += juros;
}

console.log("Mês | Saldo");
for (let i = 0; i < saldoMes.length; i++) {
  console.log(i + "   | " + saldoMes[i].toFixed(2));
}

document.write("Total ganho com juros: " + totalJuros.toFixed(2));