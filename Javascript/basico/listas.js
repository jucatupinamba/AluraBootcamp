console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhado = true;

listaDeDestinos.push(`Curutiba`);  //método add elementos

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]);  //chamar posição específica

if(idadeComprador >= 18){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1);  // remover posição, qtdade itens
}
else if(estaAcompanhado){
        console.log(`Comprador está acompanhado`);
    }
    else{
        console.log("Não é maior de idade, não posso vender");
    }
