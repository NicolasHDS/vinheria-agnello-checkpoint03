// vinhos da vinicola
let vinhos = [
  { nome: "Malbec", tipo: "tinto", safra: 2020, estoque: 12 },
  { nome: "Chardonnay", tipo: "branco", safra: 2022, estoque: 3 },
  { nome: "Rose", tipo: "rosé", safra: 2023, estoque: 4 }
];

function adicionarVinho(nome, tipo, safra, estoque) {
  vinhos.push({ nome: nome, tipo: tipo, safra: safra, estoque: estoque });
}

function listarVinhos() {
  vinhos.forEach(function (vinho) {
    console.log(vinho.nome + " - " + vinho.tipo + " - " + vinho.safra + " - estoque: " + vinho.estoque);
  });
}

function estoqueBaixo() {
  let baixos = vinhos.filter(function (vinho) {
    return vinho.estoque < 5;
  });
  baixos.forEach(function (vinho) {
    console.log(vinho.nome + " - estoque: " + vinho.estoque);
  });
}

function estoqueTotal() {
  let total = vinhos.reduce(function (soma, vinho) {
    return soma + vinho.estoque;
  }, 0);
  console.log("Estoque total: " + total);
  alert("Estoque total: " + total);
}

function nomesMaiusculos() {
  let nomes = vinhos.map(function (vinho) {
    return vinho.nome.toUpperCase();
  });
  console.log("Nomes: " + nomes);
}

adicionarVinho("Cabernet", "tinto", 2019, 8);

let nome = prompt("Nome do vinho:");
let tipo = prompt("Tipo (tinto, branco ou rosé):");
let safra = Number(prompt("Safra:"));
let estoque = Number(prompt("Estoque:"));
adicionarVinho(nome, tipo, safra, estoque);

console.log("Todos os vinhos:");
listarVinhos();
console.log("Estoque abaixo de 5:");
estoqueBaixo();
estoqueTotal();
nomesMaiusculos();
