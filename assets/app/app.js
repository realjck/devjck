$("#bt3").on("click", function(){
	ShowContact(true);
});
$("#bt-back").on("click", function(){
	ShowContact(false);
});

function ShowContact(shows){
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