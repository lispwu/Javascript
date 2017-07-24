
Date.prototype.shortFormat = function(){
	return (this.getMonth() + 1) + "/" + this.getDate() + "/" + this.getFullYear();
}

//博客的构造函数
function Blog(body,date,image){
//创建并初始化特性
	this.body = body;
	this.date = date;
	this.image = image;
}
	
	Blog.prototype.toString = function(){
		return "[" + this.date.shortFormat() +  "]" + this.body;
	};
	
	Blog.prototype.toHTML = function(highlight){
		var blogHTML = "";
		blogHTML += highlight ? "<p style='background-color:#EEEEEE'>" : "<p>";
		
		if(this.image){
			blogHTML += "<strong>" + this.date.shortFormat() + "</strong><br /><table><tr><td><img src='" +
				this.image + "'/></td><td style='vertical-align:top'>"	+ this.body + "</td></tr></table><em>" +
				this.signature + "</em></p>";
		}
		else{
			blogHTML += "<strong>" + this.date.shortFormat() + "</strong><br />" + this.body +
				"<br /><em>" + this.signature + "</em></p>";
		}
		
		return blogHTML;
	};
	
	Blog.prototype.containsText = function(text){
		return (this.body.toLowerCase().indexOf(text.toLowerCase()) != -1);
	};
	
	Blog.prototype.signature = "by Puzzler Ruby";
	
	Blog.blogSorter = function(blog1,blog2){
		return blog2.date - blog1.date;
	};
	


//创建对象的数组
  var blog = [ new Blog("Got the new cube I ordered. It's a real pearl.", new Date("08/14/2008")),
                   new Blog("Solved the new cube but of course, now I'm bored and shopping for a new one.", new Date("08/19/2008")),
                   new Blog("Managed to get a headache toiling over the new cube. Gotta nap.", new Date("08/16/2008")),
                   new Blog("Found a 7x7x7 cube for sale online. Yikes! That one could be a beast.", new Date("08/21/2008")),
                   new Blog("Met up with some fellow cubers to discuss the prospect of a 7x7x7 cube. Mixed feelings.", new Date("08/29/2008")),
                   new Blog("Went ahead and ordered the scary 7x7x7 cube. Starting a mental exercise regimen to prepare.", new Date("09/01/2008")),
                   new Blog("Attended a rally outside of a local toy store that stopped carrying cube puzzles. Power to the puzzlers!", new Date("09/03/2008")),
                   new Blog("Got the new 7x7x7 cube. Could be my last blog post for a while...", new Date("09/05/2008")),
                   new Blog("Wow, it took me a couple of weeks but the new cube is finally solved!", new Date("09/19/2008"), "cube777.png") ];

				   
function showBlog(numEntries){
	//先对日期排序
	blog.sort(Blog.blogSorter);
	
	if(!numEntries)
		numEntries = blog.length;
	var i = 0,blogListHTML = "";
	while(i < blog.length && i < numEntries){
		blogListHTML += blog[i].toHTML(i % 2 == 0);
			
		i++;
	}
	
	document.getElementById("blog").innerHTML = blogListHTML;
}

function searchBlog(){
	var searchText = document.getElementById("searchtext").value;
	for(var i = 0;i < blog.length;i++){
		if(blog[i].containsText(searchText)){
			alert(blog[i]);
			break;
		}
	}
	
	if(i == blog.length)
		alert("Sorry,there are no blog entries containing the search text.");
}

function randomBlog(){
	var i = Math.floor(Math.random() * blog.length);
	alert(blog[i]);
}