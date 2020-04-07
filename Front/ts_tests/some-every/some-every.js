var piratas = [
    { nome: 'luffy', ilha: 'south', haki: true },
    { nome: 'namy', ilha: 'south', haki: true },
    { nome: 'zoro', ilha: 'north', haki: false },
];
// se todas as condições dão certo
var haki = piratas.every(function (pirata) {
    return pirata.haki;
});
// se pelo menos uma da certo
var north = piratas.some(function (north) {
    return north.ilha == 'north';
});
console.log(haki);
console.log(north);
