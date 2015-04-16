$(document).ready(function() {
	$('body').append("<div></div>");
	for(i = 0; i < 16; i++){
		$('div').append("<tr></tr>");
	};
	for(i = 0; i < 16; i++){
		$('tr').append("<td></td>");
	};
	$('td').append("<div></div>");
	$('td > div').addClass("red");

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
		}

	});
});