

$(".nav-link.about").on("click", function(){
	$(".popup.about").toggle();
	$(".popup.news").hide();


});


$(".nav-link.news").on("click", function(){
	$(".popup.news").toggle();
	$(".popup.about").hide();


});




$(".type.knedge").on("click", function(){
	$(".font.knedge").slideToggle();


});




