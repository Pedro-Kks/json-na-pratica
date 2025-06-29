//JSON - JavaScript Object Notation
//Chave e valor com o objetivo de transferir dados

//Com JSON
const pedido = {
    nome: "Maria",
    idade: "28",
    produtos: [
         ["Webcam x10", 40.90],
         ["Microfone Fin", 190.90],
         ["Headseat Up", 200.90],
    ],
}

console.log(pedido)//Printar o JSON
gerarPedidoJson(pedido)//Chamar a função

function gerarPedidoJson(pedido) {
    console.log(`🧍 O comprador é ${pedido.nome} e sua idade é ${pedido.idade} anos.`);
    console.log("🧾 Produtos Comprados:");
    console.log("==================================================")

    for (let esteira = 0; esteira < pedido.produtos.length; esteira++) {
        const nomeProduto = pedido.produtos[esteira][0];
        const precoProduto = pedido.produtos[esteira][1];
        console.log(`🛒 ${nomeProduto} - R$ ` + precoProduto.toFixed(2));
    }
}

//Comente um dos códigos para o terminal imprimir apenas um deles

//sem JSON
const nome = "Chico";
let idade = 30;
let produtos = ["mouse 2x", "teclado zeor", "monitor"];
let valoresProdutos = [29.90, 129.99, 899.99];

function gerarPedido(nome, idade, produtos, valoresProdutos) {
    console.log(`🧍 O comprador é ${nome} e sua idade é ${idade} anos.`);
    console.log("🧾 Produtos Comprados:");
    console.log("==================================================")

    for (let esteira = 0; esteira < produtos.length; esteira++) {
        console.log(`🛒 ${produtos[esteira]} - R$ ${valoresProdutos[esteira].toFixed(2)}`);
    }
}

gerarPedido(nome, idade, produtos, valoresProdutos);
