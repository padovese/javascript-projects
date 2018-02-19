	$(document).ready(function() {
		var holder = "";
		$("li:eq(0)").mouseover(function(){
			holder = $(this).text();
			$(this).text("get off me!");
		});
		$("li:eq(0)").mouseout(function(){
			$(this).text(holder);
			//$(this).text("thanks.");
		});

		$('#myIcon').mouseover(function(){//click
            $('#warn').show();
		});

		$("#myIcon").mouseout(function(){
			$('#warn').hide();
			//$(this).text("thanks.");
		});

		$("#myInput").keydown(function(e){
			$("#output").html(e.which + " key is pressed.");
		});

		$("#myInput").focusout(function(){
			$("#output").html($(this).val() + " field contents.");
		})

	});