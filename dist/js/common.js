/**
 * Created by sf on 2017/10/8.
 */
$(function(){
    $(window).scroll(function () {
        var topDis = $(this).scrollTop()
        if(topDis >= 200){
            $(".side").show();
        }else{
            $(".side").hide();
        }
    })

    /*侧边栏按钮点击效果*/
    $(".side .back-to-top").click(function(){
        $('body, html').animate({scrollTop:0},500);
    })
    $(".side .telephone, .side .two-dimension-code").click(function(){
        $('body, html').animate({scrollTop:10000},500);
    })
})