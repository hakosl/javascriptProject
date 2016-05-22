var $div = $('td > div');

$(document).ready(function() {
	creatGrid(16);

	$('td > div').mouseover(function(){
		if($(this).hasClass('red')){
			$(this).removeClass("red");
			$(this).addClass("blue");
		}else if($(this).hasClass("blue")){
			$(this).removeClass("blue");
			$(this).addClass("green");
		}else if($(this).hasClass("green")){
			$(this).removeClass("green");
			$(this).addClass("yellow");
		}/*else if($(this).hasClass("yellow")){
			$(this).removeClass("yellow");
			$(this).addClass("red");
		}*/

	});
});

function reset() {
	/*$('td > div').removeClass('blue');
	$('td > div').removeClass('yellow');
	$('td > div').removeClass('green');
	$('td > div').addClass('red');
	*/
	clearGrid();
};

function creatGrid(square){
	$('body').append("<div></div>");
	$('div').addClass("outerDiv");
	for(i = 0; i < square; i++){
		$('div').append("<tr></tr>");
	};
	$("<tr></tr>").addClass("outerDiv")
	for(i = 0; i < square; i++){
		$('tr').append("<td></td>");
	};
	$('td').append("<div></div>");
	$('td > div').addClass("red");
};

function deleteGrid(){
	$('div').remove();
}
function clearGrid(){
	$('td > div').removeClass('blue');
	$('td > div').removeClass('yellow');
	$('td > div').removeClass('green');
	$('td > div').addClass('red');
}
