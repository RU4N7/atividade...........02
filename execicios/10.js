let temperaturas = [];
let somaTemperaturas = 0;
let menorTemperatura = Infinity;
let maiorTemperatura = -Infinity;

while (true) {
  let temperatura = parseFloat(prompt("Digite uma temperatura (ou '0' para sair):"));

  if (temperatura === 0) {
    break;
  }

  temperaturas.push(temperatura);
  somaTemperaturas += temperatura;

  if (temperatura < menorTemperatura) {
    menorTemperatura = temperatura;
  }

  if (temperatura > maiorTemperatura) {
    maiorTemperatura = temperatura;
  }
}

let mediaTemperaturas = somaTemperaturas / temperaturas.length;

document.write("Menor temperatura: " + menorTemperatura.toFixed(2) + "<br>");
document.write("Maior temperatura: " + maiorTemperatura.toFixed(2) + "<br>");
document.write("Média das temperaturas: " + mediaTemperaturas.toFixed(2) + "<br>");
