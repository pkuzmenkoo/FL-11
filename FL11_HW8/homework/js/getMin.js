function getMin() {
	var minValue = arguments[0];
	for (var i = 1; i <=arguments.length - 1; i++) {
		if(arguments[i] < minValue) {
			minValue = arguments[i];
		}
	}
	return minValue;
}

getMin(3,0,-3);