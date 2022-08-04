let hoursEL = document.getElementById('hours');
let minutesEL = document.getElementById('minutes');
let secondsEL = document.getElementById('seconds');
let ampmEL = document.getElementById('ampm');

function updateClock() {
	let h = new Date().getHours();
	let m = new Date().getMinutes();
	let s = new Date().getSeconds();
	let ampm = 'AM';

	if (h > 12) {
		h = h - 12;
		ampm = 'PM';
	}

	h = h < 10 ? '0' + h : h;
	m = m < 10 ? '0' + m : m;
	s = s < 10 ? '0' + s : s;

	hoursEL.innerText = h;
	minutesEL.innerText = m;
	secondsEL.innerText = s;
	ampmEL.innerText = ampm;

	setTimeout(() => {
		updateClock();
	}, 1000);
}

updateClock();
