var pessoas = [
    { id: 1, nome: 'joao da silva pereira', idade: 15 },
    { id: 2, nome: 'maria da silva pereira', idade: 16 },
    { id: 3, nome: 'carlos da silva pereira', idade: 20 },
    { id: 4, nome: 'mario fagundes pereira', idade: 42 },
    { id: 5, nome: 'maria da silva mauman', idade: 45 },
    { id: 6, nome: 'augusto mauman', idade: 25 },
    { id: 7, nome: 'rafael fagundes pereira', idade: 50 },
    { id: 8, nome: 'joana fagundes laux', idade: 69 },
    { id: 9, nome: 'joao cortez pereira', idade: 78 },
    { id: 10, nome: 'desconhecido', idade: 0 },
];
var relacoes = [
    { id: 1, pai: 4, mae: 5, filho: 1 },
    { id: 2, pai: 4, mae: 5, filho: 2 },
    { id: 3, pai: 4, mae: 5, filho: 3 },
    { id: 4, pai: 10, mae: 5, filho: 6 },
    { id: 5, pai: 9, mae: 8, filho: 7 },
    { id: 6, pai: 9, mae: 8, filho: 4 },
];
var descendentes = [];
var filho = false;
var pai = false;
pessoas.forEach(function (pessoa, index) {
    relacoes.forEach(function (relacao) {
        if (relacao.filho == pessoa.id) {
            filho = true;
        }
        if ((relacao.pai == pessoa.id) || (relacao.mae == pessoa.id)) {
            pai = true;
        }
    });
    if ((pai == true) && (filho == false)) {
        descendentes.push(pessoa);
    }
});
descendentes = descendentes.filter(function (descendente) {
    return descendente.id != 0;
});
var count = 0;
function iniciar() {
    document.getElementById('all-people').innerHTML = 'Todos os parentes';
    pessoas.forEach(function (line) {
        document.getElementById('all-people').innerHTML = document.getElementById('all-people').innerHTML + '<li>Nome: ' + line.nome + '<br>Idade: ' + line.idade + '</li>';
        console.log(line);
    });
    document.getElementById('arvore').innerHTML = 'Todos os descendentes';
    descendentes.forEach(function (line) {
        document.getElementById('arvore').innerHTML = document.getElementById('arvore').innerHTML + '<li>Nome: ' + line.nome + '<br>Idade: ' + line.idade + '</li>';
        console.log(line);
    });
}
