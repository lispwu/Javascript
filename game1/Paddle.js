var Paddle = function(){
  var image = imageFromPath('images/paddle.png');
  var o = {
    image:image,
    x:150,
    y:250,
    speed:15,
  }

  o.moveLeft = function(){
    o.x -= o.speed;
    if(o.x < 0){
      o.x = 0;
    }
  }

  o.moveRight = function(){
    o.x += o.speed;
    if(o.x > 400 - o.image.width){
      o.x = 400 - o.image.width;
    }
  }
  o.collide = function(b){
    return rectIntersect(o,b) || rectIntersect(b,o);
  }
  return o;
}
