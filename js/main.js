

$("#about").on("click", function(){
	$(".aboutcontent").toggle();
	$(".newscontent").hide();


});


$("#news").on("click", function(){
	$(".newscontent").toggle();
	$(".aboutcontent").hide();


});



$(".type.knedge").on("click", function(){
	$(".knedgecontent").slideToggle("slow");


});
