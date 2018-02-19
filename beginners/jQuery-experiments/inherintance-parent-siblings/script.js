$(document).ready(function(){
	console.log($(".two").parent());
	console.log($(".two").parents());

	console.log($(".parentOne").children());

	$(".parentOne").children().each(function(index){
		//$(this).append(index + " new one");//text
		//$(".parentOne").children("div.childTwo").html("CHILD ONE");
		//$(".parentOne").find("div p").html("PARAGRAPH");
		//$(".parentOne div.childOne").siblings().html("NEW HTML");
		$(".childOne").next().html("NEXT");
		$(".childOne").nextAll().html("nextAll");
	})
});