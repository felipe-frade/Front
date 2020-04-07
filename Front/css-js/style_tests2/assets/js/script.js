var angulo;
var simbolo;

document.getElementById("atomico").onchange = function () {
	for (var i = 1; i < 8; i++) { document.getElementById("camada" + i).innerHTML = ''; }
	elemento(this.value);
	simbolo = elementoExtra(this.value);
	let div = document.createElement("div");
	let span = document.createElement("span");
	div.setAttribute('id', 'simboloZ')
	span.innerHTML = simbolo;
	div.appendChild(span);
	document.getElementById("prefixo").innerHTML = '';
	document.getElementById("prefixo").appendChild(div);
};

function elemento(numeroZ) {
	var atomico = 1;
	var camada1 = 0;
	var camada2 = 0;
	var camada3 = 0;
	var camada4 = 0;
	var camada5 = 0;
	var camada6 = 0;
	var camada7 = 0;
	while (atomico <= numeroZ) {
		if ((atomico > 0) && (atomico <= 2)) {
			camada1++;
		} else if ((atomico > 2) && (atomico <= 10)) {
			camada2++;
		} else if ((atomico > 10) && (atomico <= 18)) {
			camada3++;
		} else if ((atomico > 18) && (atomico <= 20)) {
			camada4++;
		} else if ((atomico > 20) && (atomico <= 30)) {
			camada3++;
		} else if ((atomico > 30) && (atomico <= 36)) {
			camada4++;
		} else if ((atomico > 36) && (atomico <= 38)) {
			camada5++;
		} else if ((atomico > 38) && (atomico <= 48)) {
			camada4++;
		} else if ((atomico > 48) && (atomico <= 54)) {
			camada5++;
		} else if ((atomico > 54) && (atomico <= 56)) {
			camada6++;
		} else if ((atomico > 56) && (atomico <= 71)) {
		} else if (atomico == 72) {
			camada4 += 14;
			camada5 += 2;
		} else if ((atomico > 72) && (atomico <= 80)) {
			camada5++;
		} else if ((atomico > 80) && (atomico <= 86)) {
			camada6++;
		} else if ((atomico > 86) && (atomico <= 88)) {
			camada7++;
		} else if ((atomico > 88) && (atomico <= 103)) {
		} else if (atomico == 104) {
			camada5 += 14;
			camada6 += 2;
		} else if ((atomico > 104) && (atomico <= 112)) {
			camada6++;
		} else if ((atomico > 112) && (atomico <= 118)) {
			camada7++;
		} else { }
		atomico++;
	};
	camada('camada1', camada1);
	camada('camada2', camada2);
	camada('camada3', camada3);
	camada('camada4', camada4);
	camada('camada5', camada5);
	camada('camada6', camada6);
	camada('camada7', camada7);
}
function camada(camada, numero) {
	if (numero > 0) {
		var eletrons = 360 / numero;
		for (var i = 1, angulo = 0; i < numero + 1; i++, angulo += eletrons) {
			let numero = document.createElement('span');
			numero.setAttribute('class', 'numero numero' + i)
			document.getElementById(camada).appendChild(numero)
			let all = document.querySelector("span#" + camada + " span.numero" + i)
			all.style.transform = 'rotate(' + angulo + 'deg)'
		}
	};
}

function elementoExtra(numeroZsimbolo) {
	var final;
	switch (numeroZsimbolo) {
		case '1':
			final = 'H';
			break;
		case '2':
			final = 'He';
			break;
		case '3':
			final = 'Li';
			break;
		case '4':
			final = 'Be';
			break;
		case '5':
			final = 'B';
			break;
		case '6':
			final = 'C';
			break;
		case '7':
			final = 'N';
			break;
		case '8':
			final = 'O';
			break;
		case '9':
			final = 'F';
			break;
		case '10':
			final = 'Ne';
			break;
		case '11':
			final = 'Na';
			break;
		case '12':
			final = 'Mg';
			break;
		case '13':
			final = 'Al';
			break;
		case '14':
			final = 'Si';
			break;
		case '15':
			final = 'P';
			break;
		case '16':
			final = 'S';
			break;
		case '17':
			final = 'Cl';
			break;
		case '18':
			final = 'Ar';
			break;
		case '19':
			final = 'K';
			break;
		case '20':
			final = 'Ca';
			break;
		case '21':
			final = 'Sc';
			break;
		case '22':
			final = 'Ti';
			break;
		case '23':
			final = 'V';
			break;
		case '24':
			final = 'Cr';
			break;
		case '25':
			final = 'Mn';
			break;
		case '26':
			final = 'Fe';
			break;
		case '27':
			final = 'Co';
			break;
		case '28':
			final = 'Ni';
			break;
		case '29':
			final = 'Cu';
			break;
		case '30':
			final = 'Zn';
			break;
		case '31':
			final = 'Ga';
			break;
		case '32':
			final = 'Ge';
			break;
		case '33':
			final = 'As';
			break;
		case '34':
			final = 'Se';
			break;
		case '35':
			final = 'Br';
			break;
		case '36':
			final = 'Kr';
			break;
		case '37':
			final = 'Rb';
			break;
		case '38':
			final = 'Sr';
			break;
		case '39':
			final = 'Y';
			break;
		case '40':
			final = 'Zr';
			break;
		case '41':
			final = 'Nb';
			break;
		case '42':
			final = 'Mo';
			break;
		case '43':
			final = 'Tc';
			break;
		case '44':
			final = 'Ru';
			break;
		case '45':
			final = 'Rh';
			break;
		case '46':
			final = 'Pd';
			break;
		case '47':
			final = 'Ag';
			break;
		case '48':
			final = 'Cd';
			break;
		case '49':
			final = 'In';
			break;
		case '50':
			final = 'Sn';
			break;
		case '51':
			final = 'Sb';
			break;
		case '52':
			final = 'Te';
			break;
		case '53':
			final = 'I';
			break;
		case '54':
			final = 'Xe';
			break;
		case '55':
			final = 'Cs';
			break;
		case '56':
			final = 'Ba';
			break;
		case '57':
			final = 'La';
			break;
		case '58':
			final = 'Ce';
			break;
		case '59':
			final = 'Pr';
			break;
		case '60':
			final = 'Nd';
			break;
		case '61':
			final = 'Pm';
			break;
		case '62':
			final = 'Sm';
			break;
		case '63':
			final = 'Eu';
			break;
		case '64':
			final = 'Gd';
			break;
		case '65':
			final = 'Tb';
			break;
		case '66':
			final = 'Dy';
			break;
		case '67':
			final = 'Ho';
			break;
		case '68':
			final = 'Er';
			break;
		case '69':
			final = 'Tm';
			break;
		case '70':
			final = 'Yb';
			break;
		case '71':
			final = 'Lu';
			break;
		case '72':
			final = 'Hf';
			break;
		case '73':
			final = 'Ta';
			break;
		case '74':
			final = 'W';
			break;
		case '75':
			final = 'Re';
			break;
		case '76':
			final = 'Os';
			break;
		case '77':
			final = 'Ir';
			break;
		case '78':
			final = 'Pt';
			break;
		case '79':
			final = 'Au';
			break;
		case '80':
			final = 'Hg';
			break;
		case '81':
			final = 'Tl';
			break;
		case '82':
			final = 'Pb';
			break;
		case '83':
			final = 'Bi';
			break;
		case '84':
			final = 'Po';
			break;
		case '85':
			final = 'At';
			break;
		case '86':
			final = 'Rn';
			break;
		case '87':
			final = 'Fr';
			break;
		case '88':
			final = 'Ra';
			break;
		case '89':
			final = 'Ac';
			break;
		case '90':
			final = 'Th';
			break;
		case '91':
			final = 'Pa';
			break;
		case '92':
			final = 'U';
			break;
		case '93':
			final = 'Np';
			break;
		case '94':
			final = 'Pu';
			break;
		case '95':
			final = 'Am';
			break;
		case '96':
			final = 'Cm';
			break;
		case '97':
			final = 'Bk';
			break;
		case '98':
			final = 'Cf';
			break;
		case '99':
			final = 'Es';
			break;
		case '100':
			final = 'Fm';
			break;
		case '101':
			final = 'Md';
			break;
		case '102':
			final = 'No';
			break;
		case '103':
			final = 'Lr';
			break;
		case '104':
			final = 'Rf';
			break;
		case '105':
			final = 'Db';
			break;
		case '106':
			final = 'Sg';
			break;
		case '107':
			final = 'Bh';
			break;
		case '108':
			final = 'Hs';
			break;
		case '109':
			final = 'Mt';
			break;
		case '110':
			final = 'Ds';
			break;
		case '111':
			final = 'Rg';
			break;
		case '112':
			final = 'Uub';
			break;
		case '113':
			final = 'Uut';
			break;
		case '114':
			final = 'Uuq';
			break;
		case '115':
			final = 'Uup';
			break;
		case '116':
			final = 'Uuh';
			break;
		case '117':
			final = 'Uus';
			break;
		case '118':
			final = 'Uuo';
			break;
	}
	return final;
}

