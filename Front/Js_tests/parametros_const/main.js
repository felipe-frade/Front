// Author: felipe pereira

let dados = {
	'usuarios' : [
		{ nome: 'felipe', age: 20, profissao: '' },
		{ nome: 'frdae', age: 18, profissao: '' },
		{ nome: 'maria', age: 60, profissao: '' },
		{ nome: 'joao', age: 34, profissao: '' },
	],
	'salas' : [
		{ numero: 12, andar: 2 },
	],
	'reunioes' : [
		{ hora: '10:00' },
		{ hora: '11:00' },
	],
	'erros' : []
}

// criando constantes com os dados da resposta
const { usuarios, salas } = dados
var { reunioes } = dados

console.log('constante "usuarios"')
console.log(usuarios)
console.log('constante "salas"')
console.log(salas)
console.log('variável "reunioes"')
console.log(reunioes)

console.log('adicionando uma reunião')
reunioes.push({ hora: '13:00' })
console.log('variável "reunioes"')
console.log(reunioes)

console.log('tentando adicionar uma sala')
salas.push({ numero: 23, andar: 4 })
console.log('constante "salas"')
console.log(salas)