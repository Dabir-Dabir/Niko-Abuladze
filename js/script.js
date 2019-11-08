/////////////////////
// config.js
/////////////////////

// Gallery grid
var columnsMargin = 5;
var columnImage = 5;

var top_line_height = 50;

// Devices widths
var mobileWidth = 400;
var tabletWidth = 767;
var laptopWidth = 959;
var desktopWidth = 1500;
var desktopFullWidth = 1921;

//////////////////////

// Variables
var windowWidth = $(window).width();
var windowHeight = $(window).height();


// Detect portrait or landscape
var window_orientation = '';

function windowOrientation() {
	if ($(window).width() > $(window).height()) {
		window_orientation = 'landscape';
	} else {
		window_orientation = 'portrait';
	}
}

// Ajax load page
var lasturl=""; //here we store the current URL hash


/////////////////////
//// Gallery Grid
/////////////////////

function createGalleryGrid() {

	var column = 0;
	var column1 = 0;
	var column2 = 0;
	var column3 = 0;
	var column4 = 0;

	function chooseColumnCount(columns) {
		switch (columns) {
			case 1:
				column += top_line_height;

				$('.image-container').each(function(index) {

					var imageWidth = $(this).data('width');
					var imageHeight = $(this).data('height');
					var calcImageWidth = $(this).width();
					var calcImgHeight = calcImageWidth * imageHeight / imageWidth;

					$(this).css({
						top: column,
						height: calcImgHeight,
						left: '0'
					})
					column += calcImgHeight + columnImage;
				});
				return;

				break;

			case 2:
				column1 += top_line_height;
				column2 += top_line_height;

				$('.image-container').each(function(index) {

					var imageWidth = $(this).data('width');
					var imageHeight = $(this).data('height');
					var calcImageWidth = $(this).width();
					var calcImgHeight = calcImageWidth * imageHeight / imageWidth;

					if (column1 <= column2) {
						$(this).css({
							top: column1,
							height: calcImgHeight,
							left: '0'
						});
						column1 += calcImgHeight + columnImage;

					} else {
						$(this).css({
							top: column2,
							height: calcImgHeight,
							left: 'calc(50% + ' + columnsMargin * 2 + 'px)'
						});
						column2 += calcImgHeight + columnImage;

					}
				});

				if (column1 >= column2) {
					var longestColumn = column1;
				} else {
					var longestColumn = column2;
				}
				$('#images-grid').height(longestColumn);
				return;

				break;

			case 3:
				$('.image-container').each(function(index) {

					var imageWidth = $(this).data('width');
					var imageHeight = $(this).data('height');
					var calcImageWidth = $(this).width();
					var calcImgHeight = calcImageWidth * imageHeight / imageWidth;

					if (column1 <= column2 && column1 <= column3) {
						$(this).css({
							top: column1,
							height: calcImgHeight,
							left: '0'
						});
						column1 += calcImgHeight + columnImage;

					} else if (column2 < column1 && column2 <= column3) {
						$(this).css({
							top: column2,
							height: calcImgHeight,
							left: 'calc(33.3% + ' + columnsMargin + 'px)'
						});
						column2 += calcImgHeight + columnImage;

					} else {
						$(this).css({
							top: column3,
							height: calcImgHeight,
							left: 'calc(66.6% + ' + columnsMargin * 2 + 'px)'
						});
						column3 += calcImgHeight + columnImage;

					}
				});

				if (column1 >= column2 && column1 >= column3) {
					var longestColumn = column1;
				} else if (column2 > column1 && column2 >= column3) {
					var longestColumn = column2;
				} else {
					var longestColumn = column3;
				}
				$('#images-grid').height(longestColumn);
				return;

				break;

			case 4:
				$('.image-container').each(function(index) {

					var imageWidth = $(this).data('width');
					var imageHeight = $(this).data('height');
					var calcImageWidth = $(this).width();
					var calcImgHeight = calcImageWidth * imageHeight / imageWidth + columnImage;

					if (column1 <= column2 && column1 <= column3 && column1 <= column4) {
						$(this).css({
							top: column1,
							left: '0'
						});
						column1 += calcImgHeight;

					} else if (column2 < column1 && column2 <= column3 && column2 <= column4) {
						$(this).css({
							top: column2,
							left: 'calc(25% + ' + columnsMargin + 'px)'
						});
						column2 += calcImgHeight;

					} else if (column3 < column1 && column3 < column2 && column3 <= column4) {
						$(this).css({
							top: column3,
							left: 'calc(50% + ' + columnsMargin * 2 + 'px)'
						});
						column3 += calcImgHeight;

					} else {
						$(this).css({
							top: column4,
							left: 'calc(75% + ' + columnsMargin * 2 + 'px)'
						});
						column4 += calcImgHeight;

					}
				});

				if (column1 >= column2 && column1 >= column3 && column1 >= column4) {
					var longestColumn = column1;
				} else if (column2 > column1 && column2 >= column3 && column2 >= column4) {
					var longestColumn = column2;
				} else if (column3 > column1 && column3 > column2 && column3 >= column4) {
					var longestColumn = column3;
				} else {
					var longestColumn = column4;
				}
				$('#images-grid').height(longestColumn);
				return;

				break;
		}
	}	

	// Columns count on screen sizes
	if ($(window).width() > desktopWidth) {

		chooseColumnCount(4);

	} else if ($(window).width() > laptopWidth) {

		chooseColumnCount(3);

	} else if ($(window).width() > tabletWidth) {

		chooseColumnCount(2);

	} else {

		chooseColumnCount(1);

	}

}


////////////////////////
/////// Lightbox
////////////////////////

function openLightbox() {

	var index = 1;


	// Maain functions
	function fitImageToHeight() {
		if (windowWidth < laptopWidth - 4) {
			var imageWidth = $('.image-container').eq(index).data('width');
			var imageHeight = $('.image-container').eq(index).data('height');
			var calcImageWidth = $('#lightbox-image-container').width();
			var calcImgHeight = calcImageWidth * imageHeight / imageWidth;

			if (calcImgHeight > windowHeight) {
				$('#lightbox-image').height(windowHeight - 4);
			} else {
				$('#lightbox-image').height('auto');
			}
		}
	}



	// 'Close' button
	$('#close-lightbox').click(function() {
		$('#lightbox').removeClass('opened');
		clearInterval(start_slideshow);
		$('#slideshow').removeClass('started');
		$('#slideshow-loader div').removeClass('started');
	});

	// Click on image in grid
	$('.image-container').click(function() {
		$('#lightbox').addClass('opened');
		index = $(this).index();
		fitImageToHeight();

		$('#next-image').css('visibility', 'visible');
		$('#prev-image').css('visibility', 'visible');
		if (index === 0) {
			$('#prev-image').css('visibility', 'hidden');
			$('#slideshow').css({
				visibility: 'visible',
				opacity: '1'
			});
		} else if (index === $('.image-container').length - 1) {			
			$('#slideshow').css({
				visibility: 'hidden',
				opacity: '0'
			});
			$('#next-image').css('visibility', 'hidden');
		} else {			
			$('#slideshow').css({
				visibility: 'visible',
				opacity: '1'
			});
		}


		var currentImage;
		if (windowWidth <= mobileWidth) {

			if ($('.image-container').eq(index).find('img').first().data('src') != undefined) {
				currentImage = $('.image-container').eq(index).find('img').first().data('src');
			} else {
				currentImage = $('.image-container').eq(index).find('img').first().attr('src');
			}

		} else if (windowWidth <= laptopWidth) {

			currentImage = $('.image-container').eq(index).find('img').first().data('medium-image');

		} else {

			currentImage = $('.image-container').eq(index).find('img').first().data('big-image');

		}

		var currentImageTitle = $('.image-container').eq(index).find('h3').first().text();
		$('#lightbox-image').attr('src', currentImage);
		$('#lightbox-image-title').text(currentImageTitle);
		$('#hashtags').text($('.image-container').eq(index).data('hashtags'));
	});

	// 'Previous' button
	$('#prev-image').click(function() {
		if (index > 0) {
			$('#lightbox-image').addClass('faid');
			clearInterval(start_slideshow);
			$('#slideshow').removeClass('started');			
			$('#slideshow-loader div').removeClass('started');

			index = index - 1;
			fitImageToHeight();
			
			// Lightbox nav arrows visibility
			if (index === 0) {
				$(this).css('visibility', 'hidden');
			}
			$('#next-image').css('visibility', 'visible');
			
			$('#slideshow').css({
				visibility: 'visible',
				opacity: '1'
			});
			
			

			if (windowWidth <= mobileWidth) {

				if ($('.image-container').eq(index).find('img').first().data('src') != undefined) {
					var currentImage = $('.image-container').eq(index).find('img').first().data('src');
				} else {
					var currentImage = $('.image-container').eq(index).find('img').first().attr('src');
				}

			} else if (windowWidth <= laptopWidth) {

				var currentImage = $('.image-container').eq(index).find('img').first().data('medium-image');

			} else {

				var currentImage = $('.image-container').eq(index).find('img').first().data('big-image');

			}

			var currentImageTitle = $('.image-container').eq(index).find('h3').first().text();
			$('#lightbox-image').attr('src', currentImage).on('load', function(){
				setTimeout(function(){$('#lightbox-image').removeClass('faid')}, 100);
			});
			var currentImageTitle = $('.image-container').eq(index).find('h3').first().text();
			$('#lightbox-image').attr('src', renderedImage).on('load', function(){
				setTimeout(function(){$('#lightbox-image').removeClass('faid')}, 100);
			});
			$('#lightbox-image-title').text(currentImageTitle);
			$('#hashtags').text($('.image-container').eq(index).data('hashtags'));
			$('#prev-image img').removeClass('clicked');
			setTimeout(function(){$('#prev-image img').addClass('clicked');}, 100);
		}
	});

	// 'Next' button
	$('#next-image').click(function() {
		if (index < $('.image-container').length - 1) {
			$('#lightbox-image').addClass('faid');
			index = index + 1;
			fitImageToHeight();
			
			// Lightbox nav arrows visibility
			if (index === $('.image-container').length - 1) {
				$('#next-image').css('visibility', 'hidden');
				$('#slideshow').css({
					visibility: 'hidden',
					opacity: '0'
				});
			}
			$('#prev-image').css('visibility', 'visible');


			if (windowWidth <= mobileWidth) {

				if ($('.image-container').eq(index).find('img').first().data('src') != undefined) {
					var currentImage = $('.image-container').eq(index).find('img').first().data('src');
				} else {
					var currentImage = $('.image-container').eq(index).find('img').first().attr('src');
				}

			} else if (windowWidth <= laptopWidth) {

				var currentImage = $('.image-container').eq(index).find('img').first().data('medium-image');

			} else {

				var currentImage = $('.image-container').eq(index).find('img').first().data('big-image');

			}

			var currentImageTitle = $('.image-container').eq(index).find('h3').first().text();
			$('#lightbox-image').attr('src', currentImage).on('load', function(){
				setTimeout(function(){$('#lightbox-image').removeClass('faid')}, 100);
			});
			var currentImageTitle = $('.image-container').eq(index).find('h3').first().text();
			$('#lightbox-image-title').text(currentImageTitle);
			$('#hashtags').text($('.image-container').eq(index).data('hashtags'));
			$('#next-image img').removeClass('clicked');
			setTimeout(function(){$('#next-image img').addClass('clicked');}, 100);
		}
	});

	// Lightbox Slidshow

	var start_slideshow;
	$('#slideshow').click(function() {
		$(this).toggleClass('started');

		if ($(this).hasClass('started')) {
			$('#slideshow-loader div').removeClass('started');
			setTimeout(function(){$('#slideshow-loader div').addClass('started');}, 100);
			start_slideshow = setInterval(goToNextImage, 3100);
		} else {
			clearInterval(start_slideshow);
			$('#slideshow-loader div').removeClass('started');
		}
	});

	function goToNextImage() {
		if (index < $('.image-container').length - 1) {
			$('#lightbox-image').addClass('faid');
			index = index + 1;
			fitImageToHeight();
			$('#prev-image').css('visibility', 'visible');

			

			if (windowWidth <= mobileWidth) {

				if ($('.image-container').eq(index).find('img').first().data('src') != undefined) {
					var currentImage = $('.image-container').eq(index).find('img').first().data('src');
				} else {
					var currentImage = $('.image-container').eq(index).find('img').first().attr('src');
				}

			} else if (windowWidth <= laptopWidth) {

				var currentImage = $('.image-container').eq(index).find('img').first().data('medium-image');

			} else {

				var currentImage = $('.image-container').eq(index).find('img').first().data('big-image');

			}

			var currentImageTitle = $('.image-container').eq(index).find('h3').first().text();
			$('#lightbox-image').attr('src', currentImage).on('load', function(){
				setTimeout(function(){$('#lightbox-image').removeClass('faid')}, 100);
			});
			var currentImageTitle = $('.image-container').eq(index).find('h3').first().text();
			$('#lightbox-image-title').text(currentImageTitle);
			$('#hashtags').text($('.image-container').eq(index).data('hashtags'));
			$('#slideshow-loader div').removeClass('started');
			$('#next-image').find('img').removeClass('clicked');
			setTimeout(function(){$('#next-image').find('img').addClass('clicked');}, 100);
			setTimeout(function(){$('#slideshow-loader div').addClass('started');}, 100);
			
			// Lightbox nav arrows visibility
			if (index === $('.image-container').length - 1) {
				clearInterval(start_slideshow);
				$('#next-image').css('visibility', 'hidden');
				$('#slideshow').removeClass('started').css({
					visibility: 'hidden',
					opacity: '0'
				});
				setTimeout(function(){$('#slideshow-loader div').removeClass('started');}, 100);
			}
		}
	}
}

function albumsImagesHeight() {
	$('.album').each(function() {		
		var imageWidth = $(this).data('width');
		var imageHeight = $(this).data('height');
		var calcImageWidth = $(this).width();
		var calcImgHeight = calcImageWidth * imageHeight / imageWidth + 5;

		$(this).height(calcImgHeight);
	});
}

function albumImagesHeight() {
	$('.album-image').each(function() {		
		var imageWidth = $(this).data('width');
		var imageHeight = $(this).data('height');
		var calcImageWidth = $(this).width();
		var calcImgHeight = calcImageWidth * imageHeight / imageWidth + 5;

		if (calcImgHeight < $(window).height() - top_line_height) {
			$(this).height(calcImgHeight);
		} else {
			$(this).height($(window).height() - top_line_height);
		}
	});
}

function ajaxLoadPage() {

	$('.ajax').click(function() {
		var url = $(this).data('href');
        history.pushState({url}, '', url);
		checkURL(url);
	});

	// $('.logo').click(function(e) {
	// 	e.preventDefault();
	// 	if ( !$('logo').first().attr('href') == window.location ) {
	// 		var url = $(this).attr('href');
	//         history.pushState({url}, '', url);
	// 		checkURL(url);
	// 	}
	// });

	$('.menu a').click(function(e) {
		e.preventDefault();

		if ( !$(this).parent().hasClass('menu-item-has-children') ) {
			$('#mobile-nav').removeClass('opened');
			$('.top-line').removeClass('opened');
			var url = $(this).attr('href');
        	history.pushState({url}, '', url);
			checkURL(url);
		}
	});

}

function checkURL(pathname) {
    if(!pathname) pathname=window.location.pathname;    //if no parameter is provided, use the pathname value from the current address

    if(pathname != lasturl) // if the pathname value has changed
    {
        $('.loader-wrap').addClass('loading');
        lasturl=pathname;   //update the current pathname
        loadPage(pathname); // and load the new page
    }
}

function loadPage(url) {

	$('#content').load(url + ' #content > *', function() {

		$("html, body").animate({ scrollTop: 0 }, 10);
		setTimeout(function(){$('.loader-wrap').removeClass('loading')}, 1000);

        var current_page_title = $('#inner').data('page-title');
		$(document).attr('title', current_page_title);
	});

}

// hilight current menu item
function currentMenuItem() {

	var cur_url = window.location.href;
	var firstChar = cur_url.indexOf("/", 7);
	var lastChar = cur_url.indexOf("/", firstChar + 1);

	if (lastChar > -1) {
		var cur_word = cur_url.substring(firstChar + 1, lastChar);
	} else {
		var cur_word = 'home';
	}

	$('.menu li').each(function(){

		if ( $(this).hasClass(cur_word) ) {

			$(this).addClass('active');

		} else if ( $(this).hasClass('active') ) {

			$(this).removeClass('active');

		}
	});
}



$(document).ready(function($) {

	createGalleryGrid();
	openLightbox();
	albumsImagesHeight();
	albumImagesHeight();
	ajaxLoadPage();
	currentMenuItem();

    $('.img').Lazy();

	$('#hamburger').click(function() {
		$('.top-line').toggleClass('opened');
		$('#mobile-nav').toggleClass('opened');
	});

	$('.menu-item-has-children > a').click(function(e) {
		$(this).parent().toggleClass('opened');
		e.preventDefault();
	});

});

$(window).on('resize', function() {

	createGalleryGrid();
	openLightbox();
	albumsImagesHeight();
	albumImagesHeight();
	
    $('.img').Lazy();

});

$(document).ajaxComplete(function() {

	createGalleryGrid();
	openLightbox();
	albumsImagesHeight();
	albumImagesHeight();
	ajaxLoadPage();
	currentMenuItem();
	
    $('.img').Lazy();

});

window.addEventListener('popstate', function(event) {
    loadPage(window.location);
});











