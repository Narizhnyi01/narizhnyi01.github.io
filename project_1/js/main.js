$(window).scroll(function () {

	var st = $(this).scrollTop();

	$('.header' ).css({
		"transform" : "translate(0%, " + st/2 + "%"
	});


});

$('.btn_menu').click(function(){
  $('.menu ul').slideToggle();
});



$('.btn_menu').on('click', function(e){
  e.preventDefault;
  $(this).toggleClass('menu_active');
});



$('.slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,

  responsive: [{

  breakpoint: 768,
  settings: {
  	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
 	dots: true,
 	arrows: false
 }	

}]

});
