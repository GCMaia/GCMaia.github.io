$(document).ready(function(){

	var typed = new Typed('#typed',{
		
		strings: ['Seeing something new @ MNP ' ,'Playing something', 'Excited for the new Avengers Movie',
		'Getting frustrated while coding','Getting amazed while coding' ,'Talking to some friends', 'Learning something new', 
		'Trying to help someone', 'Understanding some new microsoft tool', 'looking for some spiderman content', 'Giving some tutoring', 
		'Trying to cook something different', 'Forgetting about something important', 'Finishing my course @ Algonquin College', 'Watching some Marvel Movie',
		'Writting hello world in a new language :)'],
		typeSpeed: 25,
		backSpeed: 15, 
		loop: true, 
		showCursor: true,
		backDelay: 1700,
	});

	document.getElementById("default").click();

});


function openInfo(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";

	if (cityName == 'Languages' || cityName == 'Skills') {

		var elem = document.getElementsByClassName("testingBar");
		for (i = 0; i < elem.length; i++) {
			var width = 1;
			var id = setInterval(frame, 40);
			function frame() {
				if (width >= 100) {
					clearInterval(id);
				} else {
					width++;
					elem[0].style.width = width + '%';
					elem[1].style.width = width + '%';
					elem[2].style.width = width + '%';
					elem[3].style.width = width + '%';
					elem[4].style.width = width + '%';
					elem[5].style.width = width + '%';
					elem[6].style.width = width + '%';
					elem[7].style.width = width + '%';
				}
			}
		}
	}
}

// Get the element with id="defaultOpen" and click on it

