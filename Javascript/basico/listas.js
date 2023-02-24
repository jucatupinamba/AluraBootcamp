console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curutiba`);  //método add elementos

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);  // remover posição, qtdade itens

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]);  //chamar posição específica