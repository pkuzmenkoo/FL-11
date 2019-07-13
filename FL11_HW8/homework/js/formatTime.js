function formatTime(num1) {
	var days,hours,minutes;
	days = Math.floor(num1 / 1440);
	if(days === 0) {
		hours = Math.floor(num1 / 60);
		if (hours === 0) {
			minutes = num1;
		} else {
			minutes = num1 % 60;
		}
	} else {
		hours = Math.floor((num1 - days * 1440) / 60);
		if (hours === 0) {
			minutes = num1 - days * 1440;
		} else {
			minutes = num1 % 60;
		}
	}
	return days + ' day(s) ' + hours + ' hour(s) ' + minutes + ' minute(s)';
}
formatTime(1445);