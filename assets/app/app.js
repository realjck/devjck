// buttons
$("#bt3").on("click", function(){
	showContact(true);
});
$("#bt-back").on("click", function(){
	showContact(false);
});

function showContact(shows){
	if (shows){
		$("#main-buttons").hide();
		$("#contact-frame").fadeIn();
		$("#secondary-buttons").fadeIn();
	} else {
		$("#main-buttons").show();
		$("#contact-frame").hide();
		$("#secondary-buttons").hide();
	}
}


// preload
preloadXHR([
    'assets/images/html/jck-portrait.jpg',
    'assets/libs/fontawesome/webfonts/fa-solid-900.woff2',
    'assets/libs/fontawesome/webfonts/fa-brands-400.woff2'
]);

function preloadXHR(assetsAr){
	for (i=0; i<assetsAr.length; i++){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', assetsAr[i]);
		xhr.send('');
	}
}