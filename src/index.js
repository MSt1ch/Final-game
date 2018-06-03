
import style from "./main.css";
import $ from 'jquery';
import fullPage from 'fullPage.js/dist/jquery.fullPage.js'
import fullPageCss from 'fullPage.js/dist/jquery.fullPage.css'


$(document).ready(function() {
	$('#fullpage').fullpage({
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
  });
});



  // $(".js-scroll-to").click(function(e) {
  //   let destination = $(this).attr('href');
  //   e.preventDefault();
  //
  //   // Animate scroll to destination
  //   $('html, body').animate({
  //     scrollTop: $(destination).offset().top
  //   }, 1000);
  // });
