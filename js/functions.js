$('.home__dropdown-arrow').click(function() {
    
    $('.home__nav-box').slideToggle(500, function() {
        $('.home__nav').css('display', 'flex');
    });

    $(this).toggleClass('closeup-arrow');

    $('.home__top-user-panel').toggleClass('opened-nav-panel-color');

});


$('.fa-search').click(function() {
	$('.home__search').css('z-index', 1);
	$('.input-search').addClass('search-active').focus();
	$('.home__search-icon').addClass('icon-fade');
	$('.close-search').addClass('close-btn');
});


$('.close-search').click(function() {
	$('.input-search').removeClass('search-active').val('');
	$('.home__search-icon').removeClass('icon-fade');
	$('.close-search').removeClass('close-btn');
	$('.home__search').css('z-index', -1);
});


$('.home__purchases').click(function() {
	$('.home__basket').toggleClass('opened');
});


$('.home__close-basket').click(function() {
	$('.home__basket').removeClass('opened');
});