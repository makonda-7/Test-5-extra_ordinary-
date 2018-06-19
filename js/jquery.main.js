/*jQuery(function(){
	initMenu();
});

function initMenu() {
	var opener = jQuery('.menu-open');
	var page = jQuery('html');
	var classActive = 'menu-active';

	var clickHandler = function(e) {
		e.preventDefault();
		page.toggleClass(classActive);
	};
	opener.on('click', clickHandler);
}
*/
$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

$(document).ready(function(){
	$('.header').removeClass('.default');
	$(window).scroll(function() {
		if($(this).scrollTop()>20) {
			$('.header').addClass('.default').fadeIn('.fast') 
		} else {
			$('.header').removeClass('.default').fadeIn('.fast') 
		};
	});
});