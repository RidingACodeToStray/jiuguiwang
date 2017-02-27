//插件初始化的JS
function init1(){

 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        loop:true,
        autoplayDisableOnInteraction: false
    });

  var swiper = new Swiper('.swiper-container1', {//最大的div类名
        pagination: '.swiper-pagination1',//
        direction: 'vertical',//竖直方向 不写就横向
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: -0, //调整轮播图滚动短距离
        loop:true,//是否循环滚动  不用返回第一个再滚动 而且直接从最后一个到第一个 不需要返回
        autoplay: 2000,//
    });

   var swiper = new Swiper('.swiper-container2', {
        scrollbar: '.swiper-scrollbar2',
        scrollbarHide: true,
        slidesPerView: 'auto',
        // centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true
    });




}
//多个方法
// function other1(){
//     console.log("方法测试")；
// }

export default{
    init2:function(){
        return init1();
    }
    // ，
    // other2:function(){
    //     return other1();
    // }
}