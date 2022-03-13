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


// preload image
function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

preload([
    'assets/images/html/jck-portrait.jpg'
]);