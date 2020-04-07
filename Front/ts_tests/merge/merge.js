var obj1 = [
    { id_nome: 1, nome: 'felipe', cmapo: 'qualquer' },
    { id_nome: 2, nome: 'felipe', cmapo: 'qualquer' },
    { id_nome: 3, nome: 'felipe', cmapo: 'qualquer' },
    { id_nome: 4, nome: 'felipe', cmapo: 'qualquer' },
    { id_nome: 5, nome: 'felipe', cmapo: 'qualquer' },
    { id_nome: 6, nome: 'felipe', cmapo: 'qualquer' },
    { id_nome: 7, nome: 'felipe', cmapo: 'qualquer' },
    { id_nome: 8, nome: 'felipe', cmapo: 'qualquer' }
];
var obj2 = [
    { cod: 09087, id_nome: 1 },
    { cod: 09023, id_nome: 4 },
    { cod: 09568, id_nome: 5 },
    { cod: 090092, id_nome: 8 },
];
var obj3 = [
// { id_nome: 0, nome: '', cmapo: '' }
];
// o 4 paramentro não precisa de valor e o campo é em string
function merge_obj(array1, array2, campo, array3) {
    if (array3 === void 0) { array3 = []; }
    // percorrer todos os alementos do primeiro array
    obj1.map(function (each1) {
        console.log('teste');
        // percorre o segundo array
        obj2.map(function (each2) {
            if (each2[campo] == each1[campo]) {
                console.log(each2);
                // equivalente a left join (array1 favorecido)
                // array3.push(each1)
                // obj3.push(each1)
                // equivalente a right join (array2 favorecido)
                // array3.push(each2)
                // obj3.push(each2)
                // equivalente a iner join
                // array3.push(each2 + each1)
                // obj3.push({each2}, {each1})
                for (var new_campo in each2) {
                    each1[new_campo] = each2[new_campo];
                    console.log(new_campo);
                }
                obj3.push(each1);
            }
        });
        console.log(each1);
    });
}
merge_obj(obj1, obj2, 'id_nome');
setTimeout(function () {
    console.log(obj3);
}, 2000);
