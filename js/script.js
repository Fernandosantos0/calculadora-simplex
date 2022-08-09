/* Seção de declarações de variáveis */
const campo1 = window.document.getElementById('campoNum1');
const campo2 = window.document.getElementById('campoNum2');
const campoSlc = window.document.getElementById('campoOperador');
const cx = window.document.querySelector('#resultado');

/* Funções para realizar as 4 operações da matemática */
const soma = function(v1,v2) {
	v1 = Number(v1);
	v2 = Number(v2);
	const r = v1 + v2;
	return r;
};

const subtracao = function(v1,v2) {
	v1 = Number(v1);
	v2 = Number(v2);
	const r = v1 - v2;
	return r;
};

const multiplicacao = function(v1,v2) {
	v1 = Number(v1);
	v2 = Number(v2);
	const r = v1 * v2;
	return r;
};

const divisao = function(v1,v2) {
	v1 = Number(v1);
	v2 = Number(v2);
	const r = v1 / v2;
	return r.toFixed(2);
};


const limparCampos = () => {
	campo1.value = '';
	campo2.value = '';
	campoSlc.value = '';
	cx.classList.add('oculta');
}

const calcular = () => {
	let calc = null;
	cx.classList.remove('oculta');

	if(Number.isNaN(campo1.value) || Number.isNaN(campo2.value) || campo2.value === '' || campo2.value === '') {
		cx.innerText = 'Digite os valores para realizar o cálculo';
	} else {

		switch (campoSlc.value) {
			case 'soma':
				calc = soma(campo1.value, campo2.value);
				cx.innerText = `A soma entre ${campo1.value} mais ${campo2.value} é ${calc}`;
				break;

			case 'subtracao':
				calc = subtracao(campo1.value, campo2.value);
				cx.innerText = `A subtração entre ${campo1.value} mais ${campo2.value} é ${calc}`;
				break;

			case 'multiplicacao':
				calc = multiplicacao(campo1.value, campo2.value);
				cx.innerText = `A multiplicação entre ${campo1.value} mais ${campo2.value} é ${calc}`;
				break;

			case 'divisao':
				calc = divisao(campo1.value, campo2.value);
				cx.innerText = `A divisão entre ${campo1.value} mais ${campo2.value} é ${calc}`;
				break;

			default:
				cx.innerText = 'Escolhar um operador para realizar o cálculo!';
				break;
		}
	}

};