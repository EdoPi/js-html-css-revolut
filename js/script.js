$('.right-menu >ul > li').click(function(){
  $(this).toggleClass('link-active')
  $(this).find('.dropdown').toggleClass('active');

})
