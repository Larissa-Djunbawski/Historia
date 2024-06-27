const prompt = require('prompt-sync')();

let repeticao = {};

while(true){
    let historia = prompt('Digite uma breve historia e vamos calcular quantas vezes cada palavra se repete: ');
    
    if (historia.toLowerCase() === 'exit') {
        break; // Se digitar "exit", encerra o loop
    }
    
    let palavras = historia.split(/\s+/); // Divide a string em palavras usando espaços como separadores
    
    for (let palavra of palavras) {
        if (repeticao[palavra]) {
            repeticao[palavra]++;
        } else {
            repeticao[palavra] = 1;
        }
    }
    
    console.log('Repetições de cada palavra:');
    for (let palavra in repeticao) {
        console.log(`${palavra}: ${repeticao[palavra]}`);
    }
}
