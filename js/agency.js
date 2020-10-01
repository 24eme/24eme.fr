/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href').replace("/", "")).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(".container-shuffle").each(function () {
    // Remove all divs within, store in $d
    var $d = $(this).find(".bloc-shuffle").remove();
    // Sort $d randomnly
    $d.sort(function () { return Math.floor(Math.random() * $d.length); });
    // Append divs within $d to .shuffledv again
    $d.appendTo(this);
});

// Highlight the top nav as scrolling occurs
$('body#page-top').scrollspy({
    target: '.navbar-fixed-top',
    offset: 90
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});
