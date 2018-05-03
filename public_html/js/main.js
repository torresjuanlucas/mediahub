/* 
    Created on : 2-May-2018
    Author     : Lucas Torres
 */

$(function () {
    var navbar = $('.navbar')
    var resBtn = $('.resbtn');
    var ulList = $('.navigation');
    resBtn.on('click', function () {
        if (ulList.height() === 0) {
            ulList.animate({height: '37em'}, 600);
        } else {
            ulList.animate({height: '0em'}, 600);
        }
    });

    $(window).resize(function () {

        if ($(window).width() > 1024) {

            navbar.css('overflow', 'hidden');

        } else {

            navbar.css('overflow', 'visible');
        }

    });
});



//  comment box

var main = function() {
  $('.btn').click(function() {
    var post = $('.status-box').val();
    $('<li>').text(post).prependTo('.posts');
    $('.status-box').val('');
    $('.counter').text('250');
    $('.btn').addClass('disabled');
  });
  $('.status-box').keyup(function() {
    var postLength = $(this).val().length;
    var charactersLeft = 250 - postLength;
    $('.counter').text(charactersLeft);
    if (charactersLeft < 0) {
      $('.btn').addClass('disabled');
    } else if (charactersLeft === 250) {
      $('.btn').addClass('disabled');
    } else {
      $('.btn').removeClass('disabled');
    }
  });
}
$('.btn').addClass('disabled');
$(document).ready(main)


