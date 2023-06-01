function fibonacci(n) {
    let sequence = [1, 1]; 
  
    for (let i = 2; i < n; i++) {
      let nextElement = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextElement);
    }
  
    return sequence;
  }
  
  let n = parseInt(prompt("Digite a quantidade de elementos da sequência de Fibonacci:"));
  
  let fibonacciSequence = fibonacci(n);
  
  document.write("Sequência de Fibonacci com os primeiros " + n + " elementos:<br>");
  document.write(fibonacciSequence.join(", "));
  