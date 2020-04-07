function measures(shape, area){
	// var retorno = string.split(";")
}

if(document.getElementById('backgourd')){
	let background = document.getElementById('backgourd')
	for(let i = 0; i < 200; i++){
		backgourd.innerHTML += '<span class="bk-square"></span>'
	}
}
if(document.getElementsByClassName('shape')){
	let shapes = document.getElementsByClassName('shape')
	console.log(shapes)
	// for(let shape in shapes){
	// 	console.log(shape)
	// }
	for(let i = 0; i < shapes.length; i++){
		measures(shapes[i].dataset.shape, shapes[i].dataset.area)
		
		console.log(shapes[i].dataset.shape)
		console.log(shapes[i].dataset.area)
	}
}
