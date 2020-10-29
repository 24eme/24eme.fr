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

$.fn.shuffle = function() {

    var allElems = this.get(),
        getRandom = function(max) {
            return Math.floor(Math.random() * max);
        },
        shuffled = $.map(allElems, function(){
            var random = getRandom(allElems.length),
                randEl = $(allElems[random]).clone(true)[0];
            allElems.splice(random, 1);
            return randEl;
       });

    this.each(function(i){
        $(this).replaceWith($(shuffled[i]));
    });

    return $(shuffled);

};

$("#lien_shuffle_equipe").on('click', function() {$(".container-shuffle .bloc-shuffle").shuffle(); return false;});
$(".container-shuffle .bloc-shuffle").shuffle();

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
