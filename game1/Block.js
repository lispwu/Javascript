var Block = function(){
  var image = imageFromPath('images/block.png');
  var o = {
    image:image,
    x:50,
    y:100,
    alive:true,
  }
  o.kill = function(){
    o.alive = false;

  }

  o.collide = function(b){

    return (o.alive && (rectIntersect(o,b) || rectIntersect(b,o)));
  }


  return o;
}
