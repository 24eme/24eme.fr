$(document).ready(function() {
     $('.tel').each(function() {
         var tel = $(this).text().split(' ').reverse().join(' ');
         $(this).text(tel);
         $(this).attr('href', 'tel:+33' + tel.substring(1).replace(/ /g, ''));
     });

     var email = $('#email').text().replace('[at]', '@');
     $('#email').text(email);
     $('#email').attr('href', 'mailto:' + email);
});
