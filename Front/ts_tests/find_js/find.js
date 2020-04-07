function monta_array(){
	let array = []
	for(let i = 0; i < 10; i++){
		array.push(Math.floor(Math.random() * 10) + 1)
	}
	return array
}


let array1 = monta_array();
let array2 = monta_array();

let found = array1.find(element => array1.includes(element));

console.log(array1);
console.log(array2);
console.log(found);