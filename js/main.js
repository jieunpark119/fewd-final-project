

$(".nav-link.about").on("click", function(){
	$(".popup.about").toggle();
	$(".popup.news").hide();


});

$(".nav-link.news").on("click", function(){
	$(".popup.news").toggle();
	$(".popup.about").hide();
});



var active = true;
var testarea;

function showcontent(){
	if(!active){
		
		testarea = $(this).attr('id');
		console.log(testarea);

		active = true;
		$(this).css("border-bottom","2px dotted black");
		$(".typetesting" +"."+testarea).slideDown(600);
		console.log(".typetesting" +"."+testarea);


	}else{
	
		active=false;
		$(this).css("border-bottom","1px solid black");
		$(".typetesting" +"."+testarea).slideUp(600);
	}

}

$(".type").on("click", showcontent);

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



 var typeChoice;


$(".size li").on("click", function(){
	
	typeChoice = $(this).attr("id");
	console.log(typeChoice);
	console.log(testarea);
	$(".size li").css("color","black");
	$(this).css("color","red");
	$(".typeout").css("font-family",testarea+typeChoice);

});


$("button").on("click", function(){
	$(".typeout").css({"font-family":"knedgeregular","font-size":"85px"});
	$("output").text("85");
	$(".sizing").val("85");
	$("textarea").val('');
}); 



