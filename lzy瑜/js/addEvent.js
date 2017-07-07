// JavaScript Document
//移动端滑动
var arrow=document.getElementById("arrow");
document.addEventListener('touchstart',function(event){
	  starty=event.touches[0].pageY;
	
	})	
document.addEventListener('touchmove',function(event){
	event.preventDefault();
	})
document.addEventListener('touchend',function(event){
	endy=event.changedTouches[0].pageY;
	
	var deltay=endy-starty;
	//X轴移动
	//当值小于一定的值时不移动
	if(Math.abs(deltay)<0.1*documentHeight){
		return
		}
	
	if(Math.abs(deltay)!=0){
	   if(deltay>0){//向下滑动
			if(time==0){
				time=0
				}
			else{
				time--
			}
			arrow.className="arrow"  
				//Home.style.marginTop=(0+time*-heights)+'px'
				showMoveAnimation(heights,time)
			 }
		   else{
			  time++
		      if(time>=4){
			  time=4
			  arrow.className=" "
			  
			  }else{
			  arrow.className="arrow"  
				  }
		       // Home.style.marginTop=-heights*time+'px'
			   showMoveAnimation(heights,time)
			 } 
		 }
	})		
function showMoveAnimation(heights,time){
	var Home=$("#Home")
	Home.animate({
		marginTop:-heights*time
		},500)
	}
