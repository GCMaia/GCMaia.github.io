$(document).ready(function(){
	console.log('Document ready - Initializing...');
	
	// Initialize Typed.js
	var typed = new Typed('#typed', {
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
	console.log('Typed.js initialized');

	document.getElementById("default").click();
	console.log('Default tab clicked');

	// Initialize language switcher
	const langSwitch = document.getElementById('langSwitch');
	if (langSwitch) {
		console.log('Language switch button found');
		langSwitch.addEventListener('click', function(e) {
			console.log('Language switch clicked');
			e.preventDefault();
			toggleLanguage();
		});
	} else {
		console.log('Language switch button NOT found!');
	}
});

// Language switching functionality
let currentLang = 'en';

function toggleLanguage() {
	console.log('toggleLanguage called, current language:', currentLang);
	
	// Toggle the language
	currentLang = currentLang === 'en' ? 'pt' : 'en';
	console.log('New language set to:', currentLang);
	
	// Update the button text
	const langSwitch = document.getElementById('langSwitch');
	if (langSwitch) {
		langSwitch.textContent = currentLang === 'en' ? 'PT' : 'EN';
		console.log('Button text updated to:', langSwitch.textContent);
	}
	
	// Update all translatable content
	updateLanguage();
}

function updateLanguage() {
	console.log('updateLanguage called');
	
	// Update all elements with data attributes
	const elements = document.querySelectorAll('[data-en], [data-pt]');
	console.log('Found elements to translate:', elements.length);
	
	elements.forEach(element => {
		const newText = element.getAttribute(`data-${currentLang}`);
		console.log('Element:', element.tagName, 'Current text:', element.textContent, 'New text:', newText);
		
		if (newText) {
			if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
				element.value = newText;
			} else if (element.tagName === 'LI') {
				// For list items, update the text content directly
				element.textContent = newText;
			} else {
				// For other elements, update the text content
				element.textContent = newText;
			}
		}
	});

	// Special handling for list items that might have nested elements
	document.querySelectorAll('.work li').forEach(li => {
		const newText = li.getAttribute(`data-${currentLang}`);
		if (newText) {
			li.textContent = newText;
		}
	});
}

function openInfo(evt, infoName) {
	console.log('openInfo called for tab:', infoName);
	
	// Hide all tab content
	const tabcontent = document.getElementsByClassName("tabcontent");
	for (let i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Remove active class from all tab buttons
	const tablinks = document.getElementsByClassName("tablinks");
	for (let i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the selected tab content and mark the button as active
	document.getElementById(infoName).style.display = "block";
	evt.currentTarget.className += " active";

	// Handle animations based on the selected tab
	if (infoName === "Languages") {
		console.log('Animating Languages tab');
		setTimeout(() => {
			const skillBars = document.querySelectorAll("#Languages .skill-progress");
			console.log('Found language bars:', skillBars.length);
			skillBars.forEach(bar => {
				const level = bar.getAttribute("data-level");
				// Reset animation
				bar.classList.remove("animate");
				// Force reflow
				void bar.offsetWidth;
				// Set progress and add animation
				bar.style.setProperty("--progress", `${level}%`);
				bar.classList.add("animate");
			});
		}, 100);
	}
	
	if (infoName === "Skills") {
		console.log('Animating Skills tab');
		setTimeout(() => {
			const skillBars = document.querySelectorAll("#Skills .skill-progress");
			console.log('Found skill bars:', skillBars.length);
			skillBars.forEach(bar => {
				const level = bar.getAttribute("data-level");
				// Reset animation
				bar.classList.remove("animate");
				// Force reflow
				void bar.offsetWidth;
				// Set progress and add animation
				bar.style.setProperty("--progress", `${level}%`);
				bar.classList.add("animate");
			});
		}, 100);
	}
}

// Get the element with id="defaultOpen" and click on it

