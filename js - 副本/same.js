// hover 消息 显示mdg
$('.nav-fr>ul>li').hover(function(){
    $(this).find('.dropdown').show()           
},function(){
    $(this).find('.dropdown').hide()         
})
//hover nav>ul>li 显示dropdown
$('nav>ul>li').hover(function(){
    $(this).find('.dropdown').stop().show() 
},function(){
    $(this).find('.dropdown').stop().slideUp(500)         
})
// hover .shop-list .imgCon 显示 .info
$('.shop-list .imgCon').mouseenter(function(){
    $(this).parent().find('.info').show()     
})
$('.shop-list .info').mouseleave(function(){
    $(this).parent().find('.info').hide()     
})
//


$('.store-left>.shuiju').hover(function(){
    $('.classify').show();
    // $(this).find('.classify').show();
},function(){
    $('.classify').hide();
    // $(this).find('.classify').hide();
})


//判定   点击search-but search-input左移

var leftValue = $(".search>.search-input>input").css('left');
// console.log(leftValue);
if(leftValue){
    $('.header-but .search>.search-but').click(function(event){
    event.preventDefault();
    $('.search>.search-input>input').show();
    $('.search>.search-input>input').stop().animate({"left":0},500)})
}
else{
    $('.header-but .search>.search-but').click(function(event){
    event.preventDefault();
    $('.search>.search-input>input').stop().animate({"left":'258px'},500)})
}




// 滚动300 显示。back
// 点击。back 回到顶端
$('.back').click(function(){
    $('html').animate({scrollTop:0},500)
})
$(window).scroll(function(){
    var scroll=$(window).scrollTop()
    if(scroll>300){
        $('.back').fadeIn();
        $('header').stop().animate({"top":"-56px"},500);
    }else{
        $('.back').fadeOut();
        $('header').stop().animate({"top":0},500);
    }
})
// 点击 side>.close side消失
$('.side>.close').click(function(){
    $('.side').hide();
})


//.header .arrow 箭头 旋转 
$('.header .arrow').hover(function(){
    $('.header .arrow-down').show();
    
},function(){
    $('.header .arrow-down').hide();
})