$(window).on "load", ->
  go = true
  stackBlurImage("image", "canvas", 60, false)
  $("#image").data("radius", 60)

  blur = () ->
    radius = $("#image").data("radius")
    stackBlurImage("image", "canvas", radius, false)
    if radius > 0 && go
      setTimeout(() ->
        $("#image").data("radius", radius-1)
        blur(radius-1)
      ,100)




  $('#blur-button').click ->
    go = true
    blur()

  $('#stop-button').click ->
    go = false
