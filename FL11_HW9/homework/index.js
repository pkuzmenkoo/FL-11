function getNumbers(str) {
	let arr = [];
	for(let i = 0; i <= str.length; i++) {
		if(str[i] / 1 === +str[i]) {
			arr.push(+str[i]);
		}
	} 
	return arr;
}
function findTypes() {
	let obj = {};
	for(let i = 0; i < arguments.length; i++) {
		if(obj[typeof arguments[i]] > 0) {
			obj[typeof arguments[i]]++;
		} else {
			obj[typeof arguments[i]] = 1;
		}
	} 
	return obj;
}
function executeforEach(array, func) {
	for(let i = 0; i < array.length; i++) {
		func(array[i]);
	} 
}
function mapArray(array, func) {
	let newArray = [];
	executeforEach(array, function (i) {
		newArray.push(func(i));
	});
	return newArray;
}
function filterArray(array, func) {
	let newArray = [];
	executeforEach(array, function (i) {
		if(func(i)) {
			newArray.push(i);
		}
	});
	return newArray;
}
function showFormattedDate(date) {
	let valueSubStr = 3;
	return 'Date:' + date.toDateString().substr(valueSubStr);
}
function canConvertToDate(date) {
	date = new Date(date).toDateString();
	return date !== 'Invalid Date';
}
function daysBetween(firstDate, secondDate) {
	let millisecondsInOneDay = 86400000;
	firstDate = firstDate.getTime();
	secondDate = secondDate.getTime();
	return Math.abs(Math.floor((firstDate - secondDate) / millisecondsInOneDay));
}

function getAmountOfAdultPeople(data) {
	let counter = 0;
	let daysSinceBirth = 6570;
	filterArray(data, function(i) {
        if(daysBetween(new Date(i[' birthday ']), new Date()) > daysSinceBirth) {
            counter++;
        }
    });
	return counter;
}
function keys(obj) {
	let objectKeys = [];
	for(let i in obj) {
		if(obj[i]) {
			objectKeys.push(i)
		}    
	}
	return objectKeys;
}
function values(obj) {
	let objectValues = [];
	for(let i in obj) {
		if(obj[i]) {
			objectValues.push(obj[i])
		}    
	}
	return objectValues;
}