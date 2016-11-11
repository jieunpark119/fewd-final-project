
var typeChoice;
var active = true;
var testarea;
var selectedfont;




$(".nav-link.about").on("click", function(){
	$(".popup.about").toggle();
	$(".popup.news").hide();
	$(document).on('click', function(e) {
	$(".popup.about").hide();
	});
});

$(".nav-link.news").on("click", function(){
	$(".popup.news").toggle();
	$(".popup.about").hide();
});




function showcontent(){
	if(!active){
		
		testarea = $(this).attr('id');
		console.log(testarea);

		active = true;
		$(this).css("border-bottom","2px dotted black");
		$(".typetesting" +"."+testarea).slideDown(400);
		console.log(".typetesting" +"."+testarea);
		reset();
	}else{
		active=false;
		$(this).css("border-bottom","1px solid black");
		$(".typetesting" +"."+testarea).slideUp(400);
		reset();
	}
}

// reset 

function reset(){
	$(".typeout").css({"font-family":testarea+"regular","font-size":"85px"});
	console.log(testarea);
	console.log(testarea+"regular");
	$("output").text("85");
	$(".sizing").val("85");
	$("textarea").val('');
	$(".size li").css("color","black");
}


$(".type").on("click", showcontent);

var range = $('.sizing'),
value = $('output');
	    
value.html(range.attr('value'));
	
range.on("change", function(){
		value.text($(this).val());
	 	$(".typeout").css("font-size", $(this).val() + "px");
});






$(".size li").on("click", function(){
	
	typeChoice = $(this).attr("id");
	console.log(typeChoice);
	console.log(testarea);
	$(".size li").css("color","black");
	$(this).css("color","red");
	$(".typeout").css("font-family",testarea+typeChoice);

});




