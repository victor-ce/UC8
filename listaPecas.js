const listaDePecas = ['Lanterna','Roda','Po'];
const pesoPeca = [100,85,101];
const pesoMax = 100;
const quantMax = 10;

for(let indice = 0; indice < listaDePecas.length; indice++){
    if(pesoPeca[indice] <= pesoMax) {console.log("OK, pode cadastrar")}
    else{console.log("não pode cadastrar")}
}

if( listaDePecas.length <= quantMax){console.log("capacidade OK")}
else{console.log("não tem capacidade suficiente")}

for(let indice = 0; indice < listaDePecas.length; indice++){
    let nomePeca = listaDePecas[indice];

    if( nomePeca.length < 3){console.log("erro no nome da peca")}
    else{console.log("nome da peça ok")} 
}