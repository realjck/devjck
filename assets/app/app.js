var isContactOpen;

$("#bt-contact").on("click", function(e){
	ShowContact(!isContactOpen);
});

function ShowContact(shows){
	if (shows){
		$("#bt-contact").addClass("active");
		$("#main-buttons").hide();
		$("#contact-frame").fadeIn();
	} else {
		$("#bt-contact").removeClass("active");
		$("#main-buttons").fadeIn();
		$("#contact-frame").hide();
	}
	isContactOpen = shows;
}