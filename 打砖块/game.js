var log = console.log.bind(console)
var canvas = document.queryselector('#mycanvas')
var context = canvas.getContext('2d')

var img = new Image()
img.src = '1.png'
log(img)
img.onload = function(){
    context.drawImage(img, 0, 0)
}
