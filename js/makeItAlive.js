$(document).ready(function(){

	new Typed('#typed',{
		
		strings: ['Seeing something new @ MNP ' ,'Playing something', 'Watching some SpiderMan Movie',
		'Getting frustrated while coding','Getting amazed while coding' ,'Talking to some friends', 'Learning something new', 
		'Trying to help someone', 'Understanding some new microsoft tool', 'looking for some spiderman content', 'Giving some tutoring', 
		'Trying to cook something different', 'Forgetting about something important', 'Watching some Marvel Movie'],
		typeSpeed: 25,
		backSpeed: 15, 
		loop: true, 
		showCursor: true,
		backDelay: 1700,
	});

	document.getElementById("default").click();

});


function openInfo(evt, tabName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

    if (tabName == 'Languages') {
        var languageItems = ["intermediate", ""];
        var elem = document.getElementsByClassName("testingBar");
        for (i = 0; i < languageItems.length; i++) {
            



        }
    } else if (tabName == 'Skills') {
        var skillItems = [];
        var elem = document.getElementsByClassName("testingBar");
        //var elem = document.getElementsByClassName("testingBar").item.style.width

    }
}

// Get the element with id="defaultOpen" and click on it

