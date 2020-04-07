// Author: felipe pereira
// arquivo de teste para testar json_stringfy

objeto = {
	nome : 'felipe',
	profissao: 'programador',
	idade: 20,
	peso: 80,
}

function remove_str(key, value) {
  if (typeof value === 'string') { return undefined; }
  return value;
}
function remove_int(key, value) {
  if (typeof value === 'number') { return undefined; }
  return value;
}
function de_maior(key, value) {
  if (typeof value === 'number' && key == 'idade' && value > 18) { return value + '. Maior de idaide'; }
  return value;
}

// exibindo todo o objeto
console.log(JSON.stringify(objeto))

// exibindo apenas os camos necessários
console.log(JSON.stringify(objeto, ['nome', 'profissao']))

// retirando as strings
console.log(JSON.stringify(objeto, remove_str))

// retirando os inteiros
console.log(JSON.stringify(objeto, remove_int))

// reconhecendo se é de maior
console.log(JSON.stringify(objeto, de_maior))