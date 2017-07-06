// JavaScript Document
var wrap=document.getElementById("wrap");
var heights=document.documentElement.clientHeight;
var Home=document.getElementById("Home");
var time=0;
var item=document.getElementById("item"+time);
var x
documentHeight=window.screen.availHeight;

window.onload=function(){
	wrap.style.height=heights+"px";
	show()
	}

document.body.addEventListener("mousewheel",function(event){
	if(event.wheelDelta<0){
		var item=document.getElementById("item"+time)
		item.className=" "
		time++
		if(time>=4){
			time=4
			}
		var item=document.getElementById("item"+time)
		item.className="active"
		Home.style.marginTop=-heights*time+'px'
		}
	else{
		var item=document.getElementById("item"+time)
		item.className=" "
		if(time==0){
			time=0
			}
		else{
			time--
		}
		var item=document.getElementById("item"+time)
		item.className="active"
		Home.style.marginTop=(0+time*-heights)+'px'
		item.className="active"
	}
	
	})
document.body.addEventListener("DOMMouseScroll",function(event){ 
		if(event.detail>0){
		var item=document.getElementById("item"+time)
		item.className=" "
		time++
		if(time>4){
			time=4
			}
		var item=document.getElementById("item"+time)
		item.className="active"
		Home.style.marginTop=-heights*time+'px'
		}
	else{
		var item=document.getElementById("item"+time)
		item.className=" "
		if(time==0){
			time=0
			}
		else{
			time--
		}
		var item=document.getElementById("item"+time)
		item.className="active"
		Home.style.marginTop=(0+time*-heights)+'px'
	}

})
$(document).keydown(function(event){
	switch(event.keyCode){
		case 38://向上
		   event.preventDefault()//z阻挡原本的默认效果
		   var item=document.getElementById("item"+time)
		   item.className=" "
		   time--
		   if(time<=0){
			   time=0
			   }
			var item=document.getElementById("item"+time)
		    item.className="active" 
			showMoveAnimation(heights,time)  
			
		   break;
		case 40 ://向下
		    event.preventDefault()//z阻挡原本的默认效果
			var item=document.getElementById("item"+time)
		    item.className=" "
			time++
			if(time>=4){
				time=4
				}
			var item=document.getElementById("item"+time)
		    item.className="active" 
			showMoveAnimation(heights,time)
		  break;
		default:
		  break;
		   
		}

	})
function Lis(x){
	var Rnav=document.getElementById("right-nav")
	var RnavLis=Rnav.getElementsByTagName("li");
	var Rlis=document.getElementById("item"+x);
	var Llis=document.getElementById("item"+"-"+x);
	Rlis.onmouseover=function(){
		Llis.style.visibility="visible"
		}
	Rlis.onmouseout=function(){
		Llis.style.visibility="hidden"
		}
    
	Rlis.onclick=function(){
		for(var i=0;i<RnavLis.length;i++){
			RnavLis[i].className=" "
			}
	Home.style.marginTop=-heights*x+"px"
	Rlis.className="active"
    time=x
		}
	
	}
function show(){
	Lis(0)
	Lis(1)
	Lis(2)
	Lis(3)
	Lis(4)
}