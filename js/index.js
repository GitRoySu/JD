//寻找div下面的所有i集合
var iObj=document.getElementById('imglogo').getElementsByTagName('i');
var aObj=document.getElementsByName('l');
var divObj=document.getElementById('imgbox').children;//获取所有图片
var divObj2=document.getElementById('img_1');//获取到idv对象
var sum=0;//开关
var timeBox=null;//定义一个定时器容量
var left1=document.getElementById('left1');
var right1=document.getElementById('right1');
//循环给小球添加上鼠标放上去变色事件
for(var i=0;i<divObj.length;i++)
{
	iObj[i].setAttribute('index',i);//给小球添加一个下标值
	iObj[i].onmousemove=function()
	{
		var index=this.getAttribute('index');//获取自定义属性index值
		sum=index;
		//循环给小球的class名清空 也就是变白
		for(var j=0;j<iObj.length;j++)
		{
			iObj[j].setAttribute('class','');
		}
		//循环清空图片的class名
		for(var k=0;k<divObj.length;k++)
		{
			divObj[k].setAttribute('class','');
		}
		//this指的是当前鼠标放上去的i
		this.setAttribute('class','on');
		divObj[index].className='block';	
	}
}
 //鼠标放上去div 左右两边箭头出来
	divObj2.onmouseover=function()
	{
		for(var j=0;j<aObj.length;j++)
        {
		    aObj[j].style.display='block';
	    }
        //停止定时器
        clearInterval(timeBox);
	}
	//鼠标移开时  左右两边箭头隐藏
	divObj2.onmouseout=function()
	{
		for(var j=0;j<aObj.length;j++)
        {
		    aObj[j].style.display='none';
	    }
        //鼠标移开定时器继续
        timeBox=setInterval(
		function()
		{
			clock();
		},1000
	)
	}
	
	//设置一个定时器，第一个参数是每隔一段时间运行的函数，第二个参数是时间间隔
	timeBox=setInterval(
		function()
		{
			clock();
		},1000
	);
	
	//定义一个时间函数
	function clock()
	{
		sum++;
		if(sum==iObj.length)
		{
			sum=0;
		}
		//先循环把小球的class名清空，就是小球白色
		for(var j=0;j<iObj.length;j++)
		{
			iObj[j].className='';
		}
		//循=循环清空图片的class名
		for(var k=0;k<divObj.length;k++)
		{
			divObj[k].className='';
		}
		divObj[sum].className='block';
		iObj[sum].className='on';
		
	}
	//设置鼠标点击右边循环下一张图
	right1.onclick=function()
	{
		clock();
	};
	//设置鼠标点击左边循环上一张
	left1.onclick=function()
	{
		sum--;
		if(sum<0)
		{
			sum=iObj.length-1;
		}
		//先循环把小球的class名清空，就是小球白色
		for(var j=0;j<iObj.length;j++)
		{
			iObj[j].className='';
		}
		//循=循环清空图片的class名
		for(var k=0;k<divObj.length;k++)
		{
			divObj[k].className='';
		}
		
		divObj[sum].className='block';
		iObj[sum].className='on';
		
	};
	
//	购物车页面跳转
var settleObj=document.getElementById('settle');
settleObj.onclick=function()
{
	window.location.href='shopping_cart.html'
};
/*倒计时*/
var startTime=new Date('2017/06/11 10:49:00');//开始时间
var endTime=new Date('2017/06/11 23:59:15');//结束时间
//从毫秒转化为秒
var leaveTime=(endTime.getTime()-startTime.getTime())/1000;
var time=0;
//86400秒
time=setInterval(function(){
	if(leaveTime>=0) {
        var theHour = Math.floor(leaveTime / 60 / 60);//秒数转化为小时
    	var theMinute=Math.floor((leaveTime/60)%60);//用秒数转化分钟
		var theSecond=Math.floor(leaveTime-(theHour*3600))%60;//秒数 取模
		leaveTime--;
		$('.time_1 .hour').text(parseInt(theHour)<10?'0'+theHour:theHour);
		$('.time_1 .minute').text(parseInt(theMinute)<10?'0'+theMinute:theMinute);
		$('.time_1 .second').text(parseInt(theSecond)<10?'0'+theSecond:theSecond);
    }
},1000);
/*倒计时end*/


/*京东秒杀无缝切换*/
var liNum=$('.mainlist li').length;//获取主分屏列表的长度
var w=liNum*200;//整个ul的宽度
$('.swaplist').html($('.mainlist').html());//将主分屏的列表赋值到交换区域
$('.ul_1').css('width',w+'px');//赋值宽度

//点击右边按钮
$('.j_sk2').click(function(){
    //先清空主要图片区域和交换区域的动画
    $('.swaplist,.mainlist').is(':animated')
    {
        $('.swaplist,.mainlist').stop(true, true);
    }
	//判断列表的数量是不是大于5
	if(liNum>4)
	{
		var ml=parseInt($('.mainlist').css('left'));//获取主分屏的left值
		var sl=parseInt($('.swaplist').css('left'));//获取交换区的left值
		if(ml<=0&&ml>w*-1)//判断主要分屏可移动的实际范围
		{
			//把交换区放到右边准备
			$('.swaplist').css('left','1000px');
			//默认图片滚动位置
			$('.mainlist').animate({
				left:ml - 1000+ 'px'
			},'slow');
			//判断离别的边界
			if(ml==(w-1000)*-1)
			{
				$('.swaplist').animate({
					left:'0px'
				},'slow');
			}
		}
        else//交换列表移动范围
        {
            //把主分屏放在到右边准备
            $('.mainlist').css('left', '1000px');
            $('.swaplist').animate({
                left: (sl - 1000) + 'px'
            }, 'slow');
            if(sl==(w-1000)*-1)
            {
                $('.mainlist').animate({
                    left:'0px'
                },'slow');
            }
        }
	}
});
//点击左边按钮
$('.j_sk1').click(function() {
    //先清空主要图片区域和交换区域的动画
    $('.swaplist,.mainlist').is(':animated')
    {
        $('.swaplist,.mainlist').stop(true, true);
    }
    if(liNum>4)
	{
        var ml=parseInt($('.mainlist').css('left'));//获取主分屏的left值
        var sl=parseInt($('.swaplist').css('left'));//获取交换区的left值
		if(ml<=0&&ml>w*-1&&sl!=0)
		{
			//先把交换图片区放在左边位置
			$('.swaplist').css('left',w*-1+'px');
			//默认主列表移动方式
			$('.mainlist').animate({
				left:ml+1000+'px'
			},'slow')
			//判断主列表区移动边界
			if(ml==0)
			{
				$('.swaplist').animate({
					left:(w-1000)*-1+'px'
				},'slow')
			}
		}
		else
		{
			//把主列表区放在左边位置
			$('.mainlist').css('left',w*-1+'px');
			//默认交换列表的运动方式
			$('.swaplist').animate({
				left:sl+1000+'px'
			},'slow')
			if(sl==0)
			{
				$('.mainlist').animate({
					left:(w-1000)*-1+'px'
				},'slow')
			}
		}
	}
});
/*京东秒杀无缝切换end*/

//促销公告下面的线条滑动事件
var index=$('.news>.news_1>.mob>.u-list>li.sp').index();
$('.mob .u-list .sp').mouseover(function()
{
    var index=$(this).index();
	var sum=index*35;
	$('.news .news_1 .mob .u-list .sp .mob_tab').stop().animate({
		left:sum+'px'
	},400);
	$('.news .news_1 .mob_2').eq(index).show().siblings('div').hide();
});
/*促销公告下面的线条滑动事件end*/
//鼠标拉下来显示导航条
$(window).scroll(function(){
	var s=document.documentElement.scrollTop||document.body.scrollTop;
	if(s>=700)
	{
		$('#d-search').stop().show().animate({
			height:48+'px'
		},600)
	}
	else
	{
        $('#d-search').stop().css('height','0px').hide();

	}
});
/*鼠标拉下来显示导航条end*/
/*点击交叉让顶部广告关闭*/
$('.imgbox .img-logo').click(function(){
	$('#topbox').stop().animate({
		height:0+'px'
	},200)
});
/*点击交叉让顶部广告关闭end*/
/*左边楼层导航条*/
var num='';
var liIndex=$('.lift_list .lift_item').length;
$(window).scroll(function() {
    var s = document.documentElement.scrollTop || document.body.scrollTop;
    if(s<1750||s>7500)
	{
		$('#lift').stop().fadeOut();
	}
	else
	{
        $('#lift').stop().fadeIn();
	}
	//1F 享品质
	if(s>=1800&&s<2550)
	{
        num=0
	}
	//2F 爱生活
	else if(s>=2550&&s<3200)
	{
		num=1;
	}
	//3F  手机家电
	else if(s>=3200&&s<3630)
	{
		num=2;
	}
	//4F  电脑数码
	else if(s>=3630&&s<4200)
	{
		num=3;
	}
	//5F  3C运动
	else if(s>=4200&&s<4700)
	{
		num=4;
	}
	//6F  爱吃
	else if(s>=4700&&s<5130)
	{
		num=5
	}
	//7F  母婴家居
	else if(s>=5130&&s<5640)
	{
		num=6;
	}
	//8F  图书汽车
	else if(s>=5630&&s<6250)
	{
		num=7;
	}
	//9F  虚拟
	else if(s>=6250&&s<6500)
	{
		num=8;
	}
	//10F 还没逛够
	else if(s>=6600&&s<6900)
	{
		num=9;
	}
    if(num>=0&&num<liIndex)
    {
        $('.lift_list li').eq(num).addClass('lift_item1').siblings().removeClass('lift_item1');
    }
});

/*左边楼层导航条end*/
/*左边导航条三级菜单*/
	var list_img_length=$('.nav_left li').length;
	for(var i=0;i<list_img_length;i++)
	{
		list_img(i);
	}
	function list_img(m){
        $('.nav_left li').eq(m).mouseover(function(){
        	$('.d-list-img').eq(m).show().siblings().hide();
        });
        $('.nav_left li').eq(m).mouseout(function(){
            $('.d-list-img').eq(m).hide();
        });
        $('.d-list-img').eq(m).mouseover(function()
		{
			$(this).show().siblings().hide();
		})
		$('.d-list-img').eq(m).mouseout(function(){
			$(this).hide()
		})
	}
/*左边导航条三级菜单end*/
/*排行版鼠标切换内容*/
$('.c_a a').mouseover(function(){
    var index=$(this).index();
    $('.c_a>div').stop().animate({
		left:(77*index)+'px'
	},300);
	$('.find_aa .d_a .d_b').eq(index).show().siblings().hide();
});
/*排行版鼠标切换内容end*/
/*中间右边十二宫格*/
$('.service_frame').hover(function()
{
	var index=$(this).index();//获取下标
    $(this).addClass('s_2').siblings().removeClass('s_2');//当前的元素添加class
    $('.service_pop').css('top','30px');//文字上去
    $('.service_frame a').addClass('service_lk');//
    $('.service_pop .u-service_pop .l-service_pop').eq(index).show().siblings().hide();
},function(){
    $(this).addClass('s_2').siblings().removeClass('s_2');
});
$('.service_pop').mouseover(function()
{
	$(this).show();
});
$('.service_pop').click(function(){
    $('.service_pop').css('top','');
    $('.service_frame a').removeClass('service_lk');
    $('.service_frame').removeClass('s_2');
});
/*中间右边十二宫格end*/
/*动态回到顶部*/
$(document).ready(function($) {
    $('#lift_item_top').click(function () {
        $('html,body').animate({scrollTop: '0px'}, 800);
    })
});
/*动态回到顶部end*/
/*发现好货中间的轮播图*/
//获取要切换的内容的长度
var findLength=$('.find_col .find_aa').length;

$('.find_col').hover(function(){//鼠标进入div时
	$('.sup_btn').show();//两边箭头显示
    clearInterval(findT);//停止定时器
},function(){
    $('.sup_btn').hide();//鼠标移出时 两边箭头消失
   setInterval(function(){
       findTime();
   },1000)
});
//鼠标经过小球时
$('.find_col .sup_ind .sup_ind_item').mouseover(function()
{
	//给小球添加样式
	$(this).addClass('sup_ind_item1').siblings('.sup_ind_item').removeClass('sup_ind_item1');
	var s=$(this).index();//当前小球的下标
	//对应的内容切换出来
	$('.find_col .find_aa').eq(s).addClass('find_aa1').siblings('.find_aa').removeClass('find_aa1');
});
//设置一个时间函数
var sumFind=0;//开关
function findTime()
{
	if(sumFind==findLength)
	{
		sumFind=0;
	}
	$('.find_col .find_aa').eq(sumFind).addClass('find_aa1').siblings('.find_aa').removeClass('find_aa1');
	$('.sup_ind .sup_ind_item').eq(sumFind).addClass('sup_ind_item1').siblings().removeClass('sup_ind_item1');
    sumFind++;
}
var findT=setInterval(function()
{
    findTime();
},1000);
//右箭头点击切换
$('.find_col .d-right').click(function(){
    findTime();
});
//左箭头点击切换
$('.find_col .d-left').click(function(){

	if(sumFind<0)
	{
        sumFind=findLength-1;
	}
    $('.find_col .find_aa').eq(sumFind).addClass('find_aa1').siblings('.find_aa').removeClass('find_aa1');
    $('.sup_ind .sup_ind_item').eq(sumFind).addClass('sup_ind_item1').siblings().removeClass('sup_ind_item1');
    sumFind--;
});
/*发现好货中间的轮播图end*/

