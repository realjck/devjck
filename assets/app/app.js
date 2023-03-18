// sound management
var has_sound_off = "no";

if (localStorage.getItem("devJCK_soundOff")){
	has_sound_off = localStorage.getItem("devJCK_soundOff");
	checkButtonSound();
}

$("#sound-button").on("click", function(e){
	if (has_sound_off == "yes"){
		has_sound_off = "no";
	} else {
		has_sound_off = "yes";
	}
	checkButtonSound();
	localStorage.setItem("devJCK_soundOff", has_sound_off);
});

function checkButtonSound(){
	if (has_sound_off == "yes"){
		$("#sound-button").addClass("active");
	} else {
		$("#sound-button").removeClass("active");
	}
}

$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'assets/sounds/click.mp3');

    $('button').click(function() {
		if (has_sound_off != "yes"){
			audioElement.play();
		}
    });
});

// preload
preloadXHR([
    'assets/libs/fontawesome/webfonts/fa-solid-900.woff2',
    'assets/libs/fontawesome/webfonts/fa-brands-400.woff2',
	'assets/sounds/click.mp3'
]);

function preloadXHR(assetsAr){
	for (i=0; i<assetsAr.length; i++){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', assetsAr[i]);
		xhr.send('');
	}
}
console.log("🍔🌭🍔🌭🍔🌭🌭🌭 🍔🌭🍔🍔🍔🌭🍔🌭 🍔🍔🌭🍔🍔🍔🍔🍔 🍔🌭🍔🍔🍔🍔🍔🌭 🍔🌭🍔🍔🌭🌭🍔🍔 🍔🌭🍔🍔🌭🌭🍔🍔 🍔🍔🌭🍔🍔🍔🍔🍔 🍔🌭🍔🍔🌭🌭🍔🍔 🍔🌭🍔🍔🌭🍔🍔🌭 🍔🌭🍔🌭🍔🌭🌭🍔 🍔🌭🍔🍔🍔🌭🍔🌭 🍔🍔🌭🍔🍔🍔🍔🍔 🍔🌭🍔🍔🌭🍔🍔🌭 🍔🌭🍔🍔🌭🌭🌭🍔 🍔🍔🌭🍔🍔🍔🍔🍔 🍔🌭🍔🍔🍔🍔🍔🌭 🍔🍔🌭🍔🍔🍔🍔🍔 🍔🌭🍔🌭🌭🍔🍔🌭 🍔🌭🍔🍔🍔🌭🍔🌭 🍔🌭🍔🍔🌭🌭🍔🍔 🍔🌭🍔🍔🌭🌭🍔🍔 🍔🌭🍔🍔🌭🌭🌭🌭 🍔🌭🍔🌭🍔🌭🌭🌭 🍔🍔🌭🍔🍔🍔🍔🍔 🍔🌭🍔🌭🍔🍔🌭🌭 🍔🌭🍔🌭🍔🌭🍔🌭 🍔🌭🍔🍔🍔🍔🌭🍔 🍔🌭🍔🍔🌭🌭🍔🌭 🍔🌭🍔🍔🍔🍔🍔🌭 🍔🌭🍔🌭🍔🍔🌭🍔 🍔🌭🍔🍔🌭🍔🍔🌭 🍔🌭🍔🍔🌭🌭🌭🍔 🍔🌭🍔🍔🍔🌭🍔🌭");//why?