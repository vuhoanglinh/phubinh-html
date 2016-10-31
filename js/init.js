// Carousel Slider
$(document).ready(function() {
	// Check dependent lib
	if(jQuery().owlCarousel) {
		if($('.header-slider .owl-carousel').length > 0) {
			// owl.carousel1
			$('.header-slider .owl-carousel').owlCarousel({
			    singleItem:true,
			    //Autoplay
			    autoPlay : true,
			    stopOnHover : true,
			    //Pagination
			    pagination : true,
			    paginationNumbers: true,
			});
			// owl.carousel2
			// $('.header-slider .owl-carousel').owlCarousel({
			//     loop:true,
			//     margin:0,
			//     nav:false,
			//     autoplay:true,
			//     autoplayTimeout:3000,
			//     autoplayHoverPause:true,
			//     responsive:{
			//         0:{
			//             items:1
			//         },
			//         600:{
			//             items:1
			//         },
			//         1000:{
			//             items:1
			//         }
			//     }
			// });
		}
	}
});

jQuery(document).on('click', '.mega-dropdown', function(e) {
  e.stopPropagation()
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scrolltop').fadeIn();
            $('.header-top').addClass('fixed-header-top');
            $('.header-nav').addClass('fixed-header top20');
        } else {
            $('#scrolltop').fadeOut();
            $('.header-top').removeClass('fixed-header-top');
            $('.header-nav').removeClass('fixed-header top20');
        }
    });

    $('#scrolltop').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});


/**
* Tab Slide
*/
$(document).ready(function () {
	if($('[role="tab"]').length > 0 && $('[role="tabslide"]').length > 0) {
		$('[role="tabslide"]').hide();
		$('.slider-tab.active').show();
		$('a[role="tab"]').click(function () {
			var href = $(this).attr('href');
			$('[role="tabslide"]').hide();
			$('[role="tabslide"]').removeClass('active');
			$('[data-id="' + href + '"]').show();
			$('[data-id="' + href + '"]').addClass('active');
		});
	}
});

/**
* Datepicker
* https://github.com/T00rk/bootstrap-material-datetimepicker
* Live example: http://t00rk.github.io/bootstrap-material-datetimepicker
*/
$(document).ready(function () {
	if(jQuery().bootstrapMaterialDatePicker) {
		if($('.datepicker').length > 0) {
			$('.datepicker').bootstrapMaterialDatePicker({ weekStart : 0, time: false, minDate : new Date() });
		}

		if($('.datepicker-end').length > 0 && $('.datepicker-start').length > 0) {
			$('.datepicker-end').bootstrapMaterialDatePicker({ weekStart : 0, time: false, format : 'DD/MM/YYYY', minDate : new Date()  });
			$('.datepicker-start').bootstrapMaterialDatePicker({ weekStart : 0, time: false, format : 'DD/MM/YYYY', minDate : new Date()  }).on('change', function(e, date){
				$('.datepicker-end').bootstrapMaterialDatePicker('setMinDate', date);
			});
		}
	}
});

/**
* JS Append top
*/
var appendtop = function(){
	if($('.post-top').length > 0) {
		var parent = $('.post-top').attr('data-parent');
		if($( window ).width() < 768) {
			$('.post-top').prependTo($(parent));
		}
	}
}
$(document).ready(function () {
	appendtop();
});

$( window ).resize(function() {
  appendtop();
});