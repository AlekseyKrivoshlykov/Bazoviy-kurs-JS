// *Нарисовать пирамиду с помощью console.log, 
// как показано на рисунке, только у вашей пирамиды 
// должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

'use sctrict';

for(let simbol = 'x'; simbol.length < 21; simbol += 'x') {
	console.log(simbol);
}
