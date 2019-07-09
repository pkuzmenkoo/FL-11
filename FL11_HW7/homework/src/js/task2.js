let prize, possiblePrize, totalPrize, attempt, max, isGame, number, random;
prize = '100';
possiblePrize = +prize;
max = '8';
attempt = '3';
totalPrize = 0;
isGame = confirm('Do you want to play a game?');
if(isGame) {
	while(isGame) {
		for (; attempt > 0; attempt--) {
			random = Math.floor(Math.random() * max);
			number = prompt('Choose a roulette pocket number from 0 to ' + max + 
			'\nAttempts left: ' + attempt + '\nTotal prize: ' + totalPrize + 
			'$\nPossible prize on current attempt: ' + prize + '$' , '');
			if(number === null) {
				isGame = number;
				alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
				isGame = confirm('Do you want play again?');
				prize = '100';
				possiblePrize = +prize;
				max = '8';
				attempt = '3';
				totalPrize = 0;
				break;
			} else if(+number === +random) {
				max = parseInt(max) + parseInt('4');
				totalPrize += +prize;
				attempt = '3';
				possiblePrize *= '2';
				prize = possiblePrize;
				isGame = confirm('Congratulation, you won!   Your prize is: ' + totalPrize + 
				'$. Do you want to continue?');
				if(isGame === false) {
					alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
					isGame = confirm('Do you want play again?');
					prize = '100';
					possiblePrize = +prize;
					max = '8';
					attempt = '3';
					totalPrize = 0;
				}
				break;
			} else {
				prize /= '2';
				if(attempt === 1) {
						alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
						isGame = confirm('Do you want play again?');
						prize = '100';
						possiblePrize = +prize;
						max = '8';
						attempt = '3';
						totalPrize = 0;
						break;
				}
			}
		}
	}

} else {
	alert('You did not become a billionaire, but can.');
}
