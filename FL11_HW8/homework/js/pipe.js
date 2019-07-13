function addOne(x) {
  return x + 1;
}
function pipe(x) {
	for (var i = 1; i <=arguments.length - 1; i++) {
		x = arguments[i](x);
	}
	return x;
}
addOne(5);
pipe(5,addOne,addOne,addOne);