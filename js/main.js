// 入口文件
var flag= false
var flag2= true
var cHeight= document.documentElement.clientHeight
fn1() 
$(window).on('scroll',fn1)

function fn1(e){
	e= e || window.event
	var scrollT= document.documentElement.scrollTop || window.pageYOffset
		if(scrollT - cHeight >= 0){
		$('aside').addClass('fixed')
		$('main .button').css('position','fixed')
		}else{
			$('aside').removeClass('fixed')
			$('main .button').css('position','absolute')
		}	
}

$('main a').on('click',function(e){
	e= e || window.event
	e.preventDefault()
	var top= $($(this).attr('href')).offset().top
	 $("body,html").animate({
           scrollTop : top+'px'
    },400);
	 $('aside a').removeClass('active')
	 $('aside a[href="'+$(this).attr('href')+'"]').addClass('active')
})

$('.button').on('click',function(){
	var left= ''
	if(flag2){
		left= '-300px'
		$('main .content').css('margin-left', '0px')
		flag2= false
	}else{
		left= '0px'
		$('main .content').css('margin-left', '300px')
		flag2= true
	}
	$('main aside').animate({
		left
	},350)
})
