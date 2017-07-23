//博客的构造函数
function Blog(body,date){
//创建并初始化特性
	this.body = body;
	this.date = date;
	
	this.toString = function(){
		return "[" + (this.date.getMonth() + 1) + "/" + this.date.getDate() + "/" +
			this.date.getFullYear() + "]" + this.body;
	};
	
	this.toHTML = function(highlight){
		var blogHTML = "";
		blogHTML += highlight ? "<p style='background-color:#EEEEEE'>" : "<p>";
		
		blogHTML += "<strong>" + (this.date.getMonth() + 1) + "/" + this.date.getDate() + "/" +
			this.date.getFullYear() + "</strong><br />" + this.body + "</p>";
		return blogHTML;
	};
	
	this.containsText = function(text){
		return (this.body.toLowerCase().indexOf(text.toLowerCase()) != -1);
	};
}

//创建对象的数组
var blog = [ new Blog("Got the new cube I ordered. It's a real pearl.", new Date("08/14/2008")),
             new Blog("Solved the new cube but of course, now I'm bored and shopping for a new one.",new Date("08/19/2008")),
             new Blog("Managed to get a headache toiling over the new cube. Gotta nap.",new Date("08/16/2008")),
              new Blog("Found a 7x7x7 cube for sale online. Yikes! That one could be a beast.",new Date("08/21/2008")) ];

function showBlog(numEntries){
	//先对日期排序
	blog.sort(function(blog1,blog2) {return blog2.date - blog1.date; } );
	
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