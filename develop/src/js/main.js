$(window).on('resize',function(){
  resize();
})
$(function() {
  $(".menu_btn").click(function() {
    if (!$(this).hasClass('is-active')) {
      $(this).addClass('is-active');
      $('.cv_nav').addClass('active');
    } else {
      $(this).removeClass('is-active');
      $('.cv_nav').removeClass('active');
      ('.cont_r').addClass('hidecontent');
    }
  });
});
