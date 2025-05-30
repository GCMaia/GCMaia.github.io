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

	// Initialize language switcher
	const langSwitch = document.getElementById('langSwitch');
	if (langSwitch) {
		langSwitch.addEventListener('click', function(e) {
			e.preventDefault();
			toggleLanguage();
		});
	}

});

// Language switching functionality
let currentLang = 'en';

function toggleLanguage() {
	// Toggle the language
	currentLang = currentLang === 'en' ? 'pt' : 'en';
	
	// Update the button text
	const langSwitch = document.getElementById('langSwitch');
	if (langSwitch) {
		langSwitch.textContent = currentLang === 'en' ? 'PT' : 'EN';
	}
	
	// Update all translatable content
	updateLanguage();
}

function updateLanguage() {
	// Update all elements with data attributes
	document.querySelectorAll('[data-en]').forEach(element => {
		const newText = element.getAttribute(`data-${currentLang}`);
		if (newText) {
			if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
				element.value = newText;
			} else {
				// Store the original content if it's the first time
				if (!element.hasAttribute('data-original')) {
					element.setAttribute('data-original', element.textContent);
				}
				element.textContent = newText;
			}
		}
	});

	// Update tab buttons
	document.querySelectorAll('.tablinks').forEach(button => {
		const newText = button.getAttribute(`data-${currentLang}`);
		if (newText) {
			button.textContent = newText;
		}
	});

	// Update skill levels
	document.querySelectorAll('.skill-level').forEach(level => {
		const newText = level.getAttribute(`data-${currentLang}`);
		if (newText) {
			level.textContent = newText;
		}
	});

	// Update progress text
	document.querySelectorAll('.progressText').forEach(text => {
		const newText = text.getAttribute(`data-${currentLang}`);
		if (newText) {
			text.textContent = newText;
		}
	});

	// Update all elements with data-en and data-pt attributes
	document.querySelectorAll('[data-en], [data-pt]').forEach(element => {
		const newText = element.getAttribute(`data-${currentLang}`);
		if (newText) {
			element.textContent = newText;
		}
	});
}

function openInfo(evt, infoName) {
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
	if (evt && evt.currentTarget) {
		evt.currentTarget.className += " active";
	}

	// Handle animations based on the selected tab
	if (infoName === "Languages") {
		setTimeout(() => {
			const skillBars = document.querySelectorAll("#Languages .skill-progress");
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
		setTimeout(() => {
			const skillBars = document.querySelectorAll("#Skills .skill-progress");
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

