
var typeChoice;
var active = true;
var testarea;
var selectedfont;
var navopen;
var right=true;

//textarea height

var theight = $(".control").css("height") ;

//autosize textarea
autosize(document.querySelectorAll('textarea'));



$(".nav-link.about").on("click", function(){
	$(".popup.about").toggle();
	$(".popup.news").hide();
});

$(".nav-link.news").on("click", function(){
	$(".popup.news").toggle();
	$(".popup.about").hide();
});






$(".side.about").on("click",aboutOpen);

function aboutOpen(){
	if(!active){
		console.log(!active);
		active = true;
		console.log(active);
	$(".side.about").animate({width:"5%"},"slow")
	$(".main_innerwrapper").animate({width:"88%"},"slow")
	$("header").animate({width:"88%"},"slow")
	$(".popup.about").hide();
	$(".popup.news").hide();

}else{
		active=false;
	
	$(".side.about").animate({width:"30%"},"slow")
	$(".main_innerwrapper").animate({width:"65%"},"slow")
	$("header").animate({width:"65%"},"slow")
	$(".popup.about").delay(600).fadeIn(10);

	}
}


$(".side.news").on("click",newsOpen);

function newsOpen(){
	if(!right){
		right = true;
	$(".side.news").animate({width:"5%"},"slow")
	$(".main_innerwrapper").animate({width:"88%"},"slow")
	$("header").animate({width:"88%"},"slow")
	$(".popup.news").hide();
	$(".popup.about").hide();

	}else{
		right=false;
	$(".side.news").animate({width:"30%"},"slow")
	$(".main_innerwrapper").animate({width:"65%"},"slow")
	$("header").animate({width:"65%"},"slow")
	$(".popup.news").delay(800).fadeIn(10);
	}
}











function showcontent(){
	if(!active){
		testarea = $(this).attr('id');
		console.log(testarea);
		active = true;
		//dotted line
		// $(this).css("border-bottom","2px dotted black");
		console.log(theight);
		console.log($(".typetesting").css("height"));
		$(".typetesting" +"."+testarea).slideDown(400);
		$(".typetesting" +"."+testarea).css("display","inline-block");
		console.log(".typetesting" +"."+testarea);
		reset();
	}else{
		active=false;
		//dotted line
		// $(this).css("border-bottom","1px solid black");
		$(".typetesting" +"."+testarea).slideUp(400);
		reset();
	}
}




// reset 

function reset(){
	$(".typeout").css({"font-family":testarea+"bold","font-size":"60px"});
	console.log(testarea);
	$("output").text("60");
	$(".sizing").val("60");
	$("textarea").val('');
	$(".size li").css("color","black");
	$(".typetesting" +"."+testarea).css("height","500px");
}



$(".type").on("click", showcontent);




var range = $('.sizing'),
value = $('output');
	    
value.html(range.attr('value'));
	
range.on("change", function(){
		value.text($(this).val());
	 	$(".typeout").css("font-size", $(this).val() + "px");

	
});


// console.log($(".typetesting").css("height"));
	





$(".size li").on("click", function(){
	
	typeChoice = $(this).attr("id");
	console.log(typeChoice);
	console.log(testarea);
	$(".size li").css("color","black");
	$(this).css("color","red");
	$(".typeout").css("font-family",testarea+typeChoice);
	console.log(testarea+typeChoice)

});



