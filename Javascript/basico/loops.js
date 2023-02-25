console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhado = true;
let passagemComprada = false;
const destino = `Salvador`;

listaDeDestinos.push(`Curutiba`);  //método add elementos

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]);  //chamar posição específica

const podeComprar = idadeComprador >=18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

for(let count = 0; count < 3; count++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem");
}else{
    console.log("Desculpe, tivemos um erro!");
}
