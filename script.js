$(document).ready(function(){

	var character = $('.text_1');
	var underText = $('.underText_1');
	var underTextActive = $('.underText_1-active');
	var sector = $('.sector:nth-child(1)');
	var sectorActive = $('.sector_1-active');

	var characterSecond = $('.text_2');
	var underTextSecond = $('.underText_2');
	var underTextActiveSecond = $('.underText_2-active');
	var sectorSecond = $('.sector:nth-child(2)');
	var sectorActiveSecond = $('.sector_2-active');

	var characterThird = $('.text_3');
	var underTextThird = $('.underText_3');
	var underTextActiveThird = $('.underText_3-active');
	var sectorThird = $('.sector:nth-child(3)');
	var sectorActiveThird = $('.sector_3-active');

	character.hover(function(){
		underText.toggleClass('underText_1--active')
		sectorSecond.toggleClass('sector_2--active')
		sectorThird.toggleClass('sector_3--not-so-active')
	});

	characterSecond.hover(function(){
		underTextSecond.toggleClass('underText_2--active')
		sector.toggleClass('sector_1--not-so-active')
		sectorThird.toggleClass('sector_3--active')

	});

	characterThird.hover(function(){
		underTextThird.toggleClass('underText_3--active')
		sector.toggleClass('sector_1--not-so-active')
		sectorSecond.toggleClass('sector_2--active')

	});


		// musicPanel


	$('.contactBtn').click(function(){
		$('.socialMedias').toggleClass('socialMedias_passive')
		$('.contactBtn').toggleClass('contactBtn_active')
		$('.contactNav').toggleClass('contactNav_active')
	});


	var brightText = $('.brightText');
	backBtn = $('.sidebar--back');
	closeBtn = $('.sidebar--close');

	$('.hamburger').click(function(){
		$('.sidebar__1').toggleClass('sidebar__active')
		$('.hamburger').toggleClass('hamburger__inactive')
	});

	brightText.click(function(){
		$('.sidebar__1').toggleClass('sidebar__active')
		$('.hamburger').toggleClass('hamburger__inactive')
	});
	backBtn.click(function(){
		if ($(".sidebar__1").hasClass('sidebar__active')) {
			$('aside').removeClass('sidebar__active')
			$('.hamburger').toggleClass('hamburger__inactive')
		} else {
			$('aside').removeClass('sidebar__active')
			$('.sidebar__1').toggleClass('sidebar__active')
		}
	});
	closeBtn.click(function(){
		$('aside').removeClass('sidebar__active')
		$('.hamburger').toggleClass('hamburger__inactive')
	});
});



	