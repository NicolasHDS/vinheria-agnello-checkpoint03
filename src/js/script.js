// vinhos da vinheria
let vinhos = [
  { nome: "Malbec", tipo: "tinto", safra: 2020, estoque: 12 },
  { nome: "Chardonnay", tipo: "branco", safra: 2022, estoque: 3 },
  { nome: "Rose", tipo: "rosé", safra: 2023, estoque: 4 }
];

function adicionarVinho(nome, tipo, safra, estoque) {
  vinhos.push({ nome: nome, tipo: tipo, safra: safra, estoque: estoque });
}

// mostra todos os vinhos
function listarVinhos() {
  let lista = "";
  vinhos.forEach(function (v) {
    lista += v.nome + " - " + v.tipo + " - " + v.safra + " - estoque: " + v.estoque + "\n";
  });
  return lista;
}

// vinhos com menos de 5 no estoque
function estoqueBaixo() {
  let baixos = vinhos.filter(function (v) {
    return v.estoque < 5;
  });
  let lista = "";
  baixos.forEach(function (v) {
    lista += v.nome + " - " + v.estoque + "\n";
  });
  return lista;
}

// soma o estoque
function estoqueTotal() {
  return vinhos.reduce(function (soma, v) {
    return soma + v.estoque;
  }, 0);
}

// nomes em maiusculo
function nomesMaiusculos() {
  return vinhos.map(function (v) {
    return v.nome.toUpperCase();
  });
}

adicionarVinho("Cabernet", "tinto", 2019, 8);

console.log("Todos os vinhos:\n" + listarVinhos());
console.log("Estoque abaixo de 5:\n" + estoqueBaixo());
console.log("Estoque total: " + estoqueTotal());
console.log("Nomes: " + nomesMaiusculos());

alert("Todos os vinhos:\n" + listarVinhos());
alert("Estoque abaixo de 5:\n" + estoqueBaixo());
alert("Estoque total: " + estoqueTotal());
alert("Nomes: " + nomesMaiusculos());
