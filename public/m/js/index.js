// mui的轮播图初始化
$(function () {
    mui.init({
        swipeBack: true //启用右滑关闭功能
    });

    //设置mui的轮播图自动播放
    var gallery = mui('.mui-slider');
    gallery.slider({
        interval: 1000 //自动轮播周期，若为0则不自动播放，默认为0；
    });

    // swriper的轮播图初始化
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            //轮播方向
            el: '.swiper-pagination',
        },
        //自动轮播

        direction: 'horizontal',
        // autoplay:true,//等同于以下设置
        autoplay: {
            delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        //图片是否可以循环轮播
        loop: true,
    });

    //swriper内容滚动初始化,把类名修改掉,包括html里的对应类名一起修改,不然两个初始化会互相冲突,一起作用
    var swiper = new Swiper('.swiper-container-main', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        mousewheel: true,
      });
  
})