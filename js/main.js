
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



// $(".nav-link.about").on("click", function(){
// 	$(".popup.about").toggle();
// 	$(".popup.news").hide();
// });

// $(".nav-link.news").on("click", function(){
// 	$(".popup.news").toggle();
// 	$(".popup.about").hide();
// });



function aboutOpen(){
	if(!active){
		console.log(!active);
		active = true;
		console.log(active);
		 $(".popup.about").animate({ "right": "-100" }, "slow");
		 $(".popup.about").css("border-left", "18px solid white");
		 $(".content.about").hide();

	}else{
		active=false;
		$(".popup.about").animate({ "right": "50" }, "slow");
		$(".popup.about").css("border-left", "0px");
		$(".content.about").show();
	}
}

function newsOpen(){
	if(!right){
		console.log(!active);
		right = true;
		console.log(active);
		 $(".popup.news").animate({ "right": "-200" }, "slow");
		 $(".content.news").hide();

	}else{
		right=false;
		$(".popup.news").animate({ "right": "0" }, "slow");
		$(".content.news").show();
	}
}

$(".popup.about").on("click",aboutOpen);
$(".popup.news").on("click",newsOpen);



// $(".test.one").on("click",function(){
// 	 $(".popup.about").animate({ "right": "50" }, "slow");
// 	 $(".insemititle.one").animate({ "right": "50" }, "slow");
// });

// $(".popup.about").on("click",function(){
// 	 $(this).animate({ "right": "-300" }, "slow");
// 	 $(".insemititle.one").css("visibility","visible");

// });


// $(".test.two").on("click",function(){
// 	 $(".popup.news").animate({ "right": "0" }, "slow");
// });

// $(".popup.news").on("click",function(){
// 	 $(this).animate({ "right": "-300" }, "slow");
// });






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



