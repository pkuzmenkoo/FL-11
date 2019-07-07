let a1, b1, c1, a2, b2, c2, flag;
flag = false;
a1 = parseFloat(prompt('Enter Ax'));
a2 = parseFloat(prompt('Enter Ay'));
b1 = parseFloat(prompt('Enter Bx'));
b2 = parseFloat(prompt('Enter By'));
c1 = parseFloat(prompt('Enter Cx'));
c2 = parseFloat(prompt('Enter Cy'));
if(b1-c1===c1-a1 && b2-c2===c2-a2) {
	flag = true;
} else if(a1-c1===c1-b1 && a2-c2===c2-b2) {
	flag = true;
} else {
	flag = false;
}
console.log(flag);