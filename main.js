// timer
var licznik;
var runningTimer = null;
var speed = 100;

setTimer(0);
// clear = null -> timer jest wylaczony
// clear != null -> timer jest wlaczony

document.getElementById('start').addEventListener('click', start);
document.getElementById('stop').addEventListener('click', stop);
document.getElementById('timer').addEventListener('mouseenter', pause);
document.getElementById('timer').addEventListener('mouseleave', resume);


function start(){
	if (runningTimer !== null) {
		//ustawic licznik od poczatku
		//zresetowac interwal przy kliknieciu
		// ustawic licznik na 10
		 clearInterval(runningTimer);
		// clear = setInterval(update, 1000);
	}
	setTimer(0);
	// klikniecie uruchamia licznik
	runningTimer = setInterval(update, speed);
}

function stop(){
	// zatrzymanie interwala
	clearInterval(runningTimer);
	runningTimer = null;
}
function pause(){
	// pauza
	clearInterval(runningTimer);
}
function resume(){
	// wylaczyc pauze -> 
	// wlaczyc funckje
	if (runningTimer !== null) {
		clearInterval(runningTimer);
		runningTimer = setInterval(update, speed);
	}
}
function update(){
	setTimer(licznik + 1);

}

function setTimer (value){
	licznik = value;
	document.getElementById('timer').innerHTML = convert(value);
}

function convert(inputSeconds){
	// zmienna do minut
	// podzielic i zaokraglic
	// var minute;

	// var seconds = changeInto(inputSeconds);
	// if (seconds < 10){
	// 	seconds = '0' + seconds;
	// }
	// var floor = Math.floor(minute);
	// if (floor < 10){
	// 	floor = '0' + floor;
	// }
	// var hour = changeInto(floor);
	// if (hour < 10){
	// 	hour = '0' + hour;
	// }
	// return hour + ':' + floor + ':' + seconds; 
	var hours, minutes, seconds;
	var fullminutes;
	fullminutes = changeInto(inputSeconds);
	hours = changeInto(fullminutes);
	minutes = fullminutes % 60;
	seconds = inputSeconds % 60;
	// 00:02:03 <- 123
	return format(hours,minutes,seconds);
}
function format(hours, minutes, seconds){
	hours = toTwoDigits(hours);
	minutes = toTwoDigits(minutes);
	seconds = toTwoDigits(seconds);

	return hours + ':' + minutes + ':' + seconds;
}

function toTwoDigits(digits){
	if (digits < 10) {
		return '0' + digits;
	}
	else {
		return digits;
	}
}

function changeInto(num){
	return Math.floor(num / 60);
}

