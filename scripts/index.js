window.onload=function () {
	var headbanner=document.getElementsByClassName('head-banner'),
        spage=document.getElementsByClassName('slider-pagination'),
	    front=document.getElementById('xm-slider-front'),
	    next=document.getElementById('xm-slider-next'),
	    Big=document.getElementById('hero-big'),
		preBanner=headbanner[0],preSpage=spage[0],
	    index=1,kaiguan=true;

// 自动轮播
	var fn=function(){
		if(kaiguan){
			preBanner.setAttribute('class','head-banner');
			headbanner[index].setAttribute('class','head-banner show');
			preBanner=headbanner[index];
			preSpage.setAttribute('class','slider-pagination');
			spage[index].setAttribute('class','slider-pagination now');
			preSpage=spage[index];
			index++;
			if(index==headbanner.length){
				index=0;
			}
		}
		
	};
	var timerId=setInterval(fn,2000);
// 点击小圆点
	for(var i=0;i<spage.length;i++){
		
		spage[i].onclick=function(){
			clearInterval(timerId);
			preSpage.setAttribute('class','slider-pagination');
			this.setAttribute('class','slider-pagination now');
			preSpage=this;

			preBanner.setAttribute('class','head-banner');
			headbanner[index].setAttribute('class','head-banner show');
			preBanner=headbanner[index];
			
		};
	}

// 鼠标移动到banner
	Big.onmouseover=function(e){
		if(e.target.getAttribute('class')=='head-banner show'){
			clearInterval(timerId);
		}
	}
	Big.onmouseout=function(e){
		if(e.target.getAttribute('class')=='head-banner show'){
			preBanner=e.target;
			timerId=setInterval(fn,2000);
		}
	}
// 左右箭头	
	var next=document.getElementById('jt-next'),
		prev=document.getElementById('jt-front');
	next.onclick=function(){
		preBanner.setAttribute('class','head-banner');
		var currentBanner=preBanner.nextElementSibling;
		currentBanner=(currentBanner)?currentBanner:headbanner[0];
		currentBanner.setAttribute('class','head-banner show');
		preBanner=currentBanner;

		
		preSpage.setAttribute('class','slider-pagination');
		var currentLink=preSpage.nextElementSibling;
		currentLink=(currentLink)?currentLink:spage[0];
		currentLink.setAttribute('class','slider-pagination now');
		preSpage=currentLink;

		kaiguan=false;
	};
	prev.onclick=function(){
		preBanner.setAttribute('class','head-banner');
		var currentBanner=preBanner.previousElementSibling;
		currentBanner=(currentBanner)?currentBanner:headbanner[headbanner.length-1];
		currentBanner.setAttribute('class','head-banner show');
		preBanner=currentBanner;

		preSpage.setAttribute('class','slider-pagination');
		var currentLink=preSpage.previousElementSibling;
		currentLink=(currentLink)?currentLink:spage[spage.length-1];
		currentLink.setAttribute('class','slider-pagination now');
		preSpage=currentLink;

		kaiguan=false;
	};
	document.onmousedown=function(e){
		e.preventDefault();
	};

};



// (function(){
	// xxxxxxxxxxxxxxxx
	// xxxxxxxxxxxxxxxx
	// xxxxxxxxxxxxxxxx
// })();

// 刷新页面的时候函数自动调用一次，返回一个函数赋给pre.onclick,从此onclick事件就=返回的函数，i从0走到2停掉
// prev.onclick=(function(){
// 	var i=0;
// 	console.log(i);
// 	return function(){
// 		if (i==3){
// 			return;
// 		}
// 		i+=1;
// 	};
// })();
// };