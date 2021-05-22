//checking todos
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//delete todo
$("ul").on("click", "li span", function(event){
	$(this).parent().fadeOut(300, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//listening
$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		var text = $(this).val();
		$(this).val("");
		if(text != "")
			$("ul").append("<li> <span><i class='fas fa-trash-alt'></i></span> " + text + "</li>");
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(400);
})