var square = document.getElementById('elemento');
var movimentos = [
    { tempo: 2, eixoX: '50', eixoY: '50' },
    { tempo: 4, eixoX: '10', eixoY: '0' },
    { tempo: 1, eixoX: '0', eixoY: '30' },
    { tempo: 7, eixoX: '0', eixoY: '100' },
];
setTimeout(function () {
    console.log(movimentos.length);
    var i = 0;
    setInterval(function () {
        if (movimentos[i]) {
            var new_style = getComputedStyle(square);
            console.log(parseInt(new_style.top, 10));
            var new_top = parseInt(new_style.top, 10) + parseInt(movimentos[i]['eixoY'], 10);
            var new_left = parseInt(new_style.left, 10) + parseInt(movimentos[i]['eixoX'], 10);
            var new_transition = new_style.transition + movimentos[i]['tempo'];
            console.log(new_top);
            console.log(new_left);
            console.log(new_transition);
            square.style.transition = new_transition;
            square.style.top = String(new_top) + 'px';
            square.style.left = String(new_left) + 'px';
            i++;
        }
        else {
            return 0;
        }
    }, movimentos[i]['tempo'] * 1000);
}, 2000);
