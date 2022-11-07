$(document).ready(function() {
	$('.modal-open').click(function() {
		$('.modal-fade').fadeIn(3000, function() {
    $( ".modal" ).fadeIn( 100 );
    });
		return false;
	});	
	
	$('.modal-close').click(function() {
		$(this).parents('.modal-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.modal-fade').fadeOut();
		}
	});
	
	$('.modal-fade').click(function(e) {
		if ($(e.target).closest('.modal').length == 0) {
			$(this).fadeOut();					
		}
	});
});