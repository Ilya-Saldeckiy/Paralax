$(document).ready(function(){

  var scrolled = $(window).scrollTop()
  $('.parallax').each(function() {
      var imageSrc = $(this).data('image-src')
      var imageHeight = $(this).data('height')
      $(this).css('background-image','url(' + imageSrc + ')')
      $(this).css('height', imageHeight)

      var initY = $(this).offset().top
      var height = $(this).height()
      var diff = scrolled - initY
      var ratio = Math.round((diff / height) * 100)
      $(this).css('background-position','center ' + parseInt(-(ratio * 1.5)) + 'px')
  })

  $(window).scroll(function() {
    var scrolled = $(window).scrollTop()
    $('.parallax').each(function() {
      var initY = $(this).offset().top
      var height = $(this).height()

      var visible = isInViewport(this)
      if(visible) {
        var diff = scrolled - initY
        var ratio = Math.round((diff / height) * 100)
        $(this).css('background-position','center ' + parseInt(-(ratio * 1.5)) + 'px')
      }
    })
  })
})
