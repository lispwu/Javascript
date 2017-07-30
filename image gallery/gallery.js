//将结构和行为分离
function prepareGallery(){
  if(!getElementById) return false
  if(!getElementsByTagName) return false
  if(!getElementById('imagegallery')) return false

  var gallery = document.getElementById('imagegallery')
  //a元素下不是还有很多属性吗，难道默认的是第一个href？
  var links = gallery.getElementsByTagName('a')
  for(var i = 0;i < links.length;i++){
    links[i].onclick = function {
      return showPic(this)? false:true
    }
  }
}


//有什么比较好的调试方法呢？
function showPic(whichpic){
  if(!document.getElementById("placeholder")) return false
  var source = whichpic.getAttribute("href")
  var placeholder = document.getElementById("placeholder")

  //将图片放在placeholder上
  placeholder.setAttribute("src",source)

  //替换图片下的描述文本
  if(document.getElementById("description")){
    var text = whichpic.getAttribute("title")?whichpic.getAttribute('title'):"";
    var description = document.getElementById("description")
    if(description.firstChild.nodeType == 3){
        description.firstChild.nodeValue = text
    }
  }

}



window.onload = prepareGallery
