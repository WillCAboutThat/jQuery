$(document).ready(function(){
	var size = prompt("How big a grid do you want?");
	var dimension = (800 / size) - 2;

	for(var i = 0; i < size; i++){
		for (var j = 0; j < size; j++){
			$('#container').append("<div class='square'></div>");
		}
	}
	$(".square").mouseenter(function(){
		$(this).addClass("highlighted");
	});

	$(".square").height(dimension);
	$(".square").width(dimension);
});