function reverseNumber(num1) {
	var numReverse = Math.abs(0);
	var quantity = 0;
	var i = 1;
	var number = num1;
	num1 = Math.abs(num1);
	while (Math.abs(num1) / i >= 1) {
		quantity ++;
		i *= 10;
	}
	for (i = quantity - 1; i >= 0; i--) {  
		numReverse += num1 % 10 * Math.pow(10,i);
		num1 = Math.floor(num1 / 10);
	}
	if(number >= 0) {
		return numReverse;		
	} else {
		return -numReverse;
	}
}
reverseNumber(-456);