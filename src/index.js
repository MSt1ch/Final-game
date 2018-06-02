
import style from "./main.css";
import $ from 'jquery';






  $(".js-scroll-to").click(function(e) {
    let destination = $(this).attr('href');
    e.preventDefault();

    // Animate scroll to destination
    $('html, body').animate({
      scrollTop: $(destination).offset().top
    }, 1000);
  });
