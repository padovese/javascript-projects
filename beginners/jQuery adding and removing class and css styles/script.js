$(document).ready(function () {
    //$(".parentone").children().last().css("color", "red"); //add a css attribute
    $("p").click(function(){
    	//$(this).css("background","blue");		//add a css attribute
    	
    	/*if($(this).hasClass("myClassA")){ // add or remove an entire css class
    		$(this).removeClass("myClassA");
    	} else{
    	$(this).addClass("myClassA");
    	}*/

    	$(this).toggleClass("myClassA");
    	$(this).toggleClass("myClassB");
    });

    $("#myImage").click(function(){
    	var myOutput = $(this).attr("src");
    	$("#output").html(myOutput);
    	$(this).attr("src", "image2.jpg");
    });

});