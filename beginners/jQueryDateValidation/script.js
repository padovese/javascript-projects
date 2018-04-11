	 	$(document).ready(function(){
			$("#box").keyup(function(){
				//$("#box2").val($("#box").val().length);
				if($("#box").val().length == 10){
					var from = $("#box").val().split("/");
					var f = new Date(from[2] + "-" + from[1] + "-" + from[0]);

					var date = moment(f, 'DD-MM-YYYY');
					console.log(date.isValid());

					document.getElementById("result").innerHTML = f;
					document.getElementById("valid").innerHTML = date.isValid();

					if(f == "Invalid Date"){
						//Show tooltip
						$("#tooltip").text("Mostra tooltip");
						$("#tooltip").css("background-color", "grey");
					}
				}
			});

	 	});

