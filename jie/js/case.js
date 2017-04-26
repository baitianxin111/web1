window.onload = function() {
	//点击edu出现弹框
	var oA1 = document.getElementById('edu');
	oA1.onclick = function() {
			alert('详细内容。参看官方网站');
		}
		//鼠标悬停会出现阴影和下一个链接
		//定时下落
	function mask() {
		var oDiv1 = document.getElementsByClassName('case_li1_box1');//放图片的div
		var oDiv2 = document.getElementsByClassName('case_mask');//蒙版
		var oA6 = document.getElementsByClassName('case_a1');  //链接a
		for (var i = 0; i < oDiv1.length; i++) { //
			oDiv1[i].index = i;
			oDiv1[i].onmouseover = function() {
				this.style.marginTop = '-28px';
				oDiv2[this.index].style.display = 'block';
				oDiv2[this.index].style.marginTop = '-1px';
				
				
				//oA6是干嘛的？
				oA6[this.index].style.opacity = '1';
//				alert(oA6[this.index]);
				oA6[this.index].style.display = 'block';
				oA6[this.index].style.marginTop = '-110px'

			}
			oDiv1[i].onmouseout = function() {
				this.style.marginTop = '0px';
				oDiv2[this.index].style.display = 'none';
				oDiv2[this.index].style.marginTop = '0px';
				oA6[this.index].style.display = 'block';
				oA6[this.index].style.marginTop = '-158px'
				oA6[this.index].style.opacity = '0';
			}

		}
	}
	mask();
//点击web 4 个按钮实现图片切换到下一个div，并实现图片的重新排列
	var oA7 = document.getElementsByClassName('case_btn_1');//得到4个按钮
	var oBtnDiv = document.getElementsByClassName("dd"); //得到4个按钮下的4个隐藏的盒子
	var oInitialDiv = document.getElementById('case_initial_box');
	//让按钮点击是按钮不动立在那里	
	var oA7 = document.getElementsByClassName('case_btn')[0].getElementsByTagName("a");//4个超级按钮的链接
	for(var i=0;i<oA7.length;i++){
		 oA7[i].index=i;		  
		 oA7[i].onclick=function(){	
	 		for(var i=0;i<oA7.length;i++){
	 			 oA7[i].style.height='65px';
	 			 oA7[i].style.backgroundPositionY='0';
	 			 oBtnDiv[i].style.display = 'none';
	 			 
	 		}
		 		 this.style.height='96px';
	 			 this.style.backgroundPositionY='-100px';
	 			 oInitialDiv.style.display = 'none';
				oBtnDiv[this.index].style.display = 'block';
		 	}
		}
	//点击7个按钮实现图片切换到7个div，并实现图片的重新排列 
	var oA8 = document.getElementsByClassName('case_a11'); //7个按钮
	var oADiv = document.getElementsByClassName('case_link_div'); //7个隐藏快
	var oInitialDiv = document.getElementById('case_initial_box'); //默认显示快 	 
	for (var i = 0; i < oA8.length; i++) {
		oA8[i].index = i;
		oA8[i].onclick = function() {	 
			for (var j = 0; j <oA8.length; j++) { 
				oADiv[j].style.display = 'none';
					for(var k=0;k<oBtnDiv.length;k++){//最先清除4个盒子，然后在清除7个盒子
						oBtnDiv[k].style.display='none';					
					}
				}
// 			oBtnDiv[this.index].style.display='none';
		oADiv[this.index].style.display = 'block';		
		oInitialDiv.style.display='none';			 	 		 			
		}
	}
	 //logo的效果，与导航栏的效果logo的js
    var home_logoa_a = document.getElementById('home_logoa_a');
    function home_logomov() {
        home_logoa_a.style.opacity = '1'
    }
    function home_logoout() {
        home_logoa_a.style.opacity = '0'
    }
    home_logoa_a.addEventListener('mouseover', home_logomov);
    home_logoa_a.addEventListener('mouseout', home_logoout);
     
//图片的随着鼠标移动
	var oWrap=document.getElementById('wrapp');
 	var bImg=document.getElementsByClassName('home_banner_bg');
    var iMax=4;
    //获取图片的初始位置
    for(var y=0;y<bImg.length;y++){
    	 
        bImg[y].startX=parseInt(getStyle(bImg[y],'left'))
    }
    wrapp.onmousemove=function(ev){
        ev=ev||window.event;
        //获取鼠标的位置与大盒子中心点位置的距离
        var iX=ev.clientX-(oWrap.offsetLeft+this.offsetWidth/2);
        for(var y=0;y<bImg.length;y++){
            //获取每个img的z-index
            var iZindex=getStyle(bImg[y],'zIndex');
            //Zindex越大移动的相对距离越小
            var iDisL=-parseInt(iX/iMax*(iMax-iZindex)/5);
            //图片的距离等于原先的距离加上计算的距离
            bImg[y].style.left=bImg[y].startX+iDisL+'px'
//          alert(bImg[y].style.left);
        }
    }
    function getStyle(obj,attr)
    {
        if( obj.currentStyle){
            return obj.currentStyle[attr];
        }
        return getComputedStyle(obj)[attr];
    }
	 
	//底部的效果
	 function getScrollTop(){
        var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
        if(document.body){
            bodyScrollTop = document.body.scrollTop;
        }
        if(document.documentElement){
            documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
        return scrollTop;
    }

//文档的总高度

    function getScrollHeight(){
        var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
        if(document.body){
            bodyScrollHeight = document.body.scrollHeight;
        }
        if(document.documentElement){
            documentScrollHeight = document.documentElement.scrollHeight;
        }
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
        return scrollHeight;
    }

//浏览器视口的高度
    var home_foot = document.getElementById('home_foot');
    function getWindowHeight(){
        var windowHeight = 0;
        if(document.compatMode == "CSS1Compat"){
            windowHeight = document.documentElement.clientHeight;
        }else{
            windowHeight = document.body.clientHeight;
        }
        return windowHeight;
    }

    window.onscroll = function(){
        if(getScrollTop() + getWindowHeight() == getScrollHeight()){
            home_foot.style.opacity = '1';
        }
        else {
            home_foot.style.opacity = '0';
        }
    };
//底部链接的图标变换
	var oIcon=document.getElementsByClassName('case_out_con_a1'); 
	for(var i=0;i<oIcon.length;i++){
		oIcon[i].addEventListener('mouseover',change3);
		oIcon[i].addEventListener('mouseout',change4);		
	}
	function change3(){
		this.style.backgroundPositionY='-95px';
	}
	function change4(){
		this.style.backgroundPositionY='0px';
	}
	
	
	


	 
}