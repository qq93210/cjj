	$(function(){
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
         onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    swiperAnimateCache(swiper); //隐藏动画元素 
    swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    			var a=$("#chan").css("display");
    			if(a=="block"){
    				$("#chan").css("display","none");
    				$("#chan").slideDown(600);
    			}
    			if(swiper.activeIndex!=0){
    				$("#chan").css({
    					"background":"black",
    					"opacity":"0.75",
    					"color":"white",
    				});
    				$("#logos")[0].src="./imgs/logo1.png";
    				$("#logos").css({
    					"width": "10%",
						"height": "62%",
    				})
    			}else{
    				$("#chan").css({
    					"background":"#d7dadf",
    					"opacity":"1",
    					"color":"#016",
    				});
    				$("#logos")[0].src="./imgs/nav-logo.png";
    				$("#logos").css({
    					"width": "32%",
						"height": "64%",
    				})
    			}                   
            }
        });

    // 显示用户名

    var user = localStorage.getItem('user');
            $('#user').html( user );
            if( user ){

                $('.hide').css('display','block');
                $('.load').css('display','none');

            }else{
                $('.hide').css('display','none');
                $('.load').css('display','block');
            }

    $('.exit').click(function  () {
                 localStorage.removeItem('user'); 
                 window.location.href="./index.html"
            })








})
