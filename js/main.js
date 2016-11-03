

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

$(".type").on("click", function(){
	// $(this).slideToggle();//hide 

	var range = $('.sizing'),
	value = $('output');
	    
	value.html(range.attr('value'));

	// range.on('input', function(){
	//     value.text(this.value);
	// }); 

	range.on("change", function(){
		value.text($(this).val());
	 	$(".typeout").css("font-size", $(this).val() + "px");
	});


});

 var typeChoice;


$(".size li").on("click", function(){
	
	typeChoice = $(this).attr("class");

	if(typeChoice==="regular"){
		$(".typeout").css("font-family","knedgeregular");
	} else if(typeChoice==="regularItalic"){
		$(".typeout").css("font-family","knedgeregular_italic");
	}else if(typeChoice==="bold"){
		$(".typeout").css("font-family","knedgebold");
	}else if(typeChoice==="book"){
		$(".typeout").css("font-family","knedgebook");
	}else if(typeChoice==="heavy"){
		$(".typeout").css("font-family","knedgeheavy");
	}else if(typeChoice==="heavyCondensed"){
		$(".typeout").css("font-family","knedgeheavy_condensed");
	}
});



$("button").on("click", function(){
	$(".typeout").css({"font-family":"knedgeregular","font-size":"85px"});
	$("output").text("85");
	$(".sizing").val("85");



}); 



// var range = $('.sizing'),
// value = $('output');
    
// value.html(range.attr('value'));

// range.on('input', function(){
//     value.text(this.value);
// }); 

// range.on("change", function(){
//   $(".typeout").css("font-size", $(this).val() + "px");
// });





