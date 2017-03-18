

var typeChoice;
var active = true;
var testarea;
var selectedfont;
var navopen;
var right=true;
var hidediv;

//textarea height
var wtx = $(".typeout").css("height");

//testarea height
var theight = $(".control").css("height") ;

//autosize textarea
autosize(document.querySelectorAll('.typeout'));



$(".nav-link.about").on("click", function(){
	$(".popup.about").toggle();
	$(".popup.news").hide();
});

$(".nav-link.news").on("click", function(){
	$(".popup.news").toggle();
	$(".popup.about").hide();
});


///burger nav

$(".hamburger").on("click", function(){
  $("header nav").animate({
    left: 0
  });
});


$(".side.about .insemititle").on("click",aboutOpen);

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


$(".side.news .newstitle").on("click",newsOpen);

function newsOpen(){
	if(!right){
		right = true;
	$(".side.news").animate({width:"5%"},"slow")
	$(".main_innerwrapper").animate({width:"88%"},"slow")
	$("header").animate({width:"88%"},"slow")
	$(".popup.news").hide();
	$(".inusetitle").hide();
	$(".popup.about").hide();

	}else{
		right=false;
	$(".side.news").animate({width:"30%"},"slow")
	$(".main_innerwrapper").animate({width:"65%"},"slow")
	$("header").animate({width:"65%"},"slow");
	$(".popup.news").delay(800).fadeIn(10);
	$(".inusetitle").delay(800).fadeIn(10);
	}
}



// function showcontent(){
// 	if(!active){
// 		testarea = $(this).attr('id');
// 		console.log(testarea);
// 		active = true;
// 		//dotted line
// 		// $(this).css("border-bottom","2px dotted black");
// 		console.log(theight);
// 		console.log($(".typetesting").css("height"));
// 		$(".typetesting" +"."+testarea).slideDown(400);
// 		$(".typetesting" +"."+testarea).css("display","inline-block");
// 		console.log(".typetesting" +"."+testarea);
// 		// reset();
// 	}else{
// 		active=false;
// 		$(".typetesting" +"."+testarea).slideUp(400);
// 		// reset();
// 	}
// }








function showcontent(){
	if(!active){
		testarea = $(this).attr('id');
		console.log(testarea);
		active = true;
		//dotted line
		// $(this).css("border-bottom","2px dotted black");
		// console.log(theight);
		// console.log($(".typetesting").css("height"));
	
		$(".typetesting" +"."+testarea).slideDown(500);
		console.log($(".typetesting" +"."+testarea));
		$(".typetesting" +"."+testarea).css("display","inline-block");
		// console.log(".typetesting" +"."+testarea);
		// reset();
	}else{
		active=false;
		$(".typetesting" +"."+testarea).slideUp(400);


	}


		
}

$( ".type" ).click(function() {
	testarea = $(this).attr('id');
	var visible = $(".typetesting" +"."+testarea).css("display")
	console.log(visible);
  $(".typetesting" +"."+testarea).slideToggle(function(){
  	 	if(visible === "inline-block"){

		active = true;
		$(".typetesting" +"."+testarea).slideUp(400);
		$(".typetesting" +"."+testarea).css("display","none");
		console.log(".typetesting" +"."+testarea);
		// reset();
	}else if(visible === "none"){
		active=false;
		$(".typetesting" +"."+testarea).slideDown(500);
		$(".typetesting" +"."+testarea).css("display","inline-block");

	}


  });
});


// $(".type").on("click",showcontent);

// $(".typetesting" +"."+testarea).css("display","inline-block")
// reset 

function reset(){
	$(".typeout").css({"font-family":testarea+"bold","font-size":"60px"});
	console.log(testarea);
	$("output").text("60");
	$(".sizing").val("60");
	$(".typeout").val('');
	$(".size li").css("color","black");
	$(".typetesting" +"."+testarea).css("height","500px");
}








var range = $('.sizing'),
value = $('output');
	    
value.html(range.attr('value'));
	
range.on("change", function(){
		var alt = $(this).attr("alt");
		console.log($(this));
		console.log($(this).attr("class"));

		// value.text($(this).val());
		$("output"+"."+alt).text($(this).val());

		// console.log($(this).parent().parent().parent());
	
		console.log(alt);
		console.log(wtx);
	 	$(".typeout"+"."+alt).css({
	 		"font-size":  $(this).val() + "px"

	 });	

});


// console.log($(".typetesting").css("height"));
	
$(".inusetitle").on("click",function(){
	$(".typeinuse").show();

});

$(".closeout").on("click",function(){
	$(".typeinuse").hide();

});




$(".size li").on("click", function(){
	
	typeChoice = $(this).attr("id");
	sizeChoice = $(this).attr("alt");

	console.log(typeChoice);
    console.log(sizeChoice);
	$(".size li").css("color","black");
	$(this).css("color","red");
	console.log(".typeout"+"."+sizeChoice)
	$(".typeout"+"."+sizeChoice).css("font-family",typeChoice);


});


