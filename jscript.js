function setSize(){
	var size = prompt("How big a grid do you want?");
	var dimension = (800 / size) - 2;

	for(var i = 0; i < size; i++){
		for (var j = 0; j < size; j++){
			$('#container').append("<div class='square'></div>");
		}
	}
	$(".square").height(dimension);
	$(".square").width(dimension);
};

function clearGrid(){
	$('.square').removeClass('highlighted');
	$('div').empty();
	setSize();
	hover();
};

function hover(){
	$(".square").mouseenter(function(){
		$(this).addClass("highlighted");
	});
}

$(document).ready(function(){

	setSize();
	hover();
});


