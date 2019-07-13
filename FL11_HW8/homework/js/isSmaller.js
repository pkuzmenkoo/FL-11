function isBigger(num1,num2) {
	return num1 > num2;
}
function isSmaller(num1,num2) {
	return !isBigger(num1,num2);
}
isSmaller(-5,1);