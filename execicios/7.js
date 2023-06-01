let numero = Number(prompt("Digite uma sequência de números positivos (0 para encerrar):"));
        
        let quantidadePares = 0;
        let quantidadeImpares = 0;
        let somaPares = 0;
        let quantidadeTotal = 0;
        let mediaPares = 0;
        let mediaGeral = 0;

            if (numero > 0) {
                quantidadeTotal++;

                if (numero % 2 == 0) {
                    quantidadePares++;
                    somaPares += numero;
                } else {
                    quantidadeImpares++;
                }
            }
            if (quantidadePares > 0) {
                mediaPares = somaPares / quantidadePares;
            }
    
            if (quantidadeTotal > 0) {
                mediaGeral = (somaPares + quantidadeImpares) / quantidadeTotal;
            }

        document.write(`Quantidade de números pares:   ${quantidadePares }<br> `);
        document.write(`Quantidade de números ímpares: ${quantidadeImpares }<br> ` );
        document.write(`Média de valores pares: ${mediaPares} <br> `);
        document.write(`Média geral dos números lidos: ${mediaGeral}<br> ` );