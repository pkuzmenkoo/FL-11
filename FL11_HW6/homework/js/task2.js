let a, b, c, type;
a = parseFloat(prompt('Enter first value'));
b = parseFloat(prompt('Enter second value'));
c = parseFloat(prompt('Enter third value'));
if(a+b>c && b+c>a && a+c>b) {
	if(a===b && b===c){
		type = 'Eequivalent';
	} else if(a===b || b===c || a===c){
		type = 'Isosceles';
	} else {
		type = 'Normal';
	}
	console.log(type + ' triangle');
} else {
	console.log('Triangle doesn\'t exist');
}