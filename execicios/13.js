let n = parseInt(prompt("Digite um valor para n:"));

for (let i = 1; i <= n; i++) {
  let linha = "";

  for (let j = 1; j <= i; j++) {
    linha += j + " ";
  }

  document.write(`${linha }<br>`);
}
