var GuaGame = function(){
  var canvas = document.getElementById('id-canvas');
  var context = canvas.getContext('2d');
  var g = {
    actions:{},
    //按键的状态
    keydowns:{},
  }
  g.canvas = canvas;
  g.context = context;
  //draw
  g.drawImage = function(guaImage){
    g.context.drawImage(guaImage.image,guaImage.x,guaImage.y);
  }

  //event
  window.addEventListener("keydown",function(event){
    g.keydowns[event.key] = true;
  })
  window.addEventListener("keyup",function(event){
    g.keydowns[event.key] = false;
  })
  //
  g.registerAction = function(key,callback){
    g.actions[key] = callback;
  }
  //timer
  setInterval(function(){
    //events
    var actions = Object.keys(g.actions);
    for(var i = 0;i < actions.length;i++){
      var key = actions[i];
      if(g.keydowns[key]){
        //如果按键被按下，调用注册的action
        g.actions[key]();
      }
    }
    //update
    g.update();
    //clear
    g.context.clearRect(0, 0, canvas.width, canvas.height);
    //draw
    g.draw();
  },1000/30)

  return g;
}
