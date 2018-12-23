var a, b, act, x;
var nums = document.getElementById('numbers').children;
var butns = document.getElementById('acts').children;
var num = document.getElementById('number');
var shown = document.getElementById('showact');

for (let i = 0; i < nums.length; i++) {
	nums[i].addEventListener('click', inputeN);
	}
	
function inputeN(){
	num.value += this.innerHTML;
	shown.value += this.innerHTML;
}	
	
for (let i = 0; i < (butns.length-1); i++) {
	butns[i].addEventListener('click', getAct);
}

function getAct(){
	a = +num.value;
	act = this.innerHTML;
	shown.value += this.innerHTML;
	num.value = '';	
	return a;
	return act;
}

document.getElementById('clear').addEventListener('click', function(){
	document.getElementById('number').value = '';
	document.getElementById('showact').value = '';
	document.getElementById('result').value = '';
});


document.getElementById('acts').lastElementChild.addEventListener('click', calculateIt);

function calculateIt() {
	b = +num.value;	
	num.value = '';
	shown.value += ' = ';
	switch(act){
		case '+':
			x =  a + b ;
			break;
		case '-':
			x = a - b ;
			break;
		case '*':
			x = a * b ;
			break;
		case '/':
			if (b != 0) 
				x = a / b ;
			else x = "can not be divided by 0";
			break;
	}
	var result = document.getElementById('result');
	shown.value += x;
	num.value = x;	
}