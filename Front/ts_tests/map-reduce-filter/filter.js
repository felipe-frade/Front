var data = [
    {
        name: 'Butters',
        age: 3,
        type: 'dog'
    },
    {
        name: 'Lizzy',
        age: 6,
        type: 'dog'
    },
    {
        name: 'Red',
        age: 1,
        type: 'cat'
    },
    {
        name: 'Joey',
        age: 3,
        type: 'dog'
    },
];
var map = data.map(function (animal) {
    return 'name:' + animal.name;
});
console.log('map: ', map);
var dogs = data.filter(function (animal) {
    return animal.type === 'dog';
});
console.log('filter: ', dogs);
var soma = data.reduce(function (sum, animal) {
    return sum + animal.age;
}, 0);
console.log('soma: ' + soma);
