let email, password, correctPassword, isChange, minPassword, minEmail;
minEmail = '6';
minPassword = '5';
email = prompt('Enter your email', '');
if(email === '' || email === null) {
	alert('Canceled');
} else if(email.length < +minEmail) {
	alert('I don\'t know any emails having name length less than 6 symbols');
} else if(email === 'user@gmail.com' || email === 'admin@gmail.com') {
	if (email === 'user@gmail.com') {
		correctPassword = 'UserPass';
	} else {
		correctPassword = 'AdminPass';
	}
	password = prompt('Enter your password', '');
	if (password === '' || password === null) {
		alert('Canceled');
	} else if (password === correctPassword) {
		isChange = confirm('Change your password');
		if (isChange === true) {
			password = prompt('Enter your old password', '');
			if (password === '' || password === null) {
				alert('Canceled');
			} else if (password === correctPassword) {
			password = prompt('Enter your new password', '');
				if (password.length < +minPassword) {
					alert('It’s too short password. Sorry');
				} else {
					correctPassword = password;
					password = prompt('Enter your password', '');
					if (password === correctPassword) {
						alert('You have successfully changed your password');
					}
				}
			} else {
				alert('Wrong password');
			}
		} else {
			alert('You have failed the change');
		}
	} else {
		alert('Wrong password');
	}
} else {
	alert('I don’t know you');
}
