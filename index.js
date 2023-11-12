typeof variavel// sintaxe

var minhaFuncao=("2 -1");
var forma = "redondo";
var tamanho = 1;
var dia = new Date();

typeof minhaFuncao; //retorna "function"
typeof forma;//retorna "string"
typeof tamanho;//retorna"numero"
typeof dia; //retotna "objeto"
typeof naoExiste; // retorna "undefined"
// html no java scripit
// Função tradicional sem parâmetros
function calculaMedia() {
    let notas = [8, 7, 9, 6, 10];
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
      soma += notas[i];
    }
    let media = soma / notas.length;
    return media;
  }
  
  // Função tradicional com parâmetros e retorno de valor
  function calculaMediaPersonalizada(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
      soma += notas[i];
    }
    let media = soma / notas.length;
    return media;
  }
  
  // Arrow function com parâmetros
  const calculaMediaArrow = (notas) => {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
      soma += notas[i];
    }
    let media = soma / notas.length;
    return media;
  };
  
  // Exemplo de uso
  console.log(`A média das notas é ${calculaMedia().toFixed(2)}.`);
  console.log(`A média das notas é ${calculaMediaPersonalizada([7, 8, 6, 9, 10]).toFixed(2)}.`);
  console.log(`A média das notas é ${calculaMediaArrow([6, 7, 8, 9, 10]).toFixed(2)}.`);
  

