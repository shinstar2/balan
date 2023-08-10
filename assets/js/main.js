


$(function(){




  /**비주얼슬라이드 */
  const visualSlide = new Swiper(".visual-slide", {
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    speed:1000,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
  });

  total =  $('.visual-slide .swiper-slide').length;
  $('.sc-visual .control-area .total').text(total);
  
  visualSlide.on('slideChange',function(){
    curr=this.realIndex+1;
    $('.sc-visual .control-area .curr').text(curr)
  })



//sc-best
  const bestSlide = new Swiper(".best-slide", {
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      slidesPerGroup:4,
      slidesPerView:4,
      spaceBetween:24,
    });

    //tab
    $('.sc-best .cate-list a').click(function(e){
      e.preventDefault();

      target=$(this).data('target');

      $('.sc-best .cate-list a').removeClass('on');
      $(this).addClass('on')

      $(target).addClass('active').siblings().removeClass('active')
    })

    // 북마크
    $('.sc-magazine .interior-item i').click(function(){
      

    })



  const brandSlide = new Swiper(".brand-slide", {
    touchRatio:0,
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      slidesPerView:2,
      spaceBetween:24,
      
    });

  const miniSlide = new Swiper(".mini-slide", {
      nested:true,
      slidesPerView:8,
      spaceBetween:3,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
    });

  const weekSlide = new Swiper(".week-slide", {
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      spaceBetween:24,
      slidesPerView:5,
      
    });

/**fixed-top */
$(window).scroll(function(){
  curr=$(this).scrollTop()

  if(curr >= 50){
      $('.fixed-top').addClass('show')
  }else{
      $('.fixed-top').removeClass('show');
  }
})


$('.fixed-top').click(function(e){
  e.preventDefault();
  window.scrollTo({top:0,behavior:"smooth"})
})


// const cursor = document.querySelector('.cursor');
// document.addEventListener('mousemove', (e) => {
//     cursor.style.left = e.pageX + 'px';
//     cursor.style.top = e.pageY + 'px';
// })




    
})//지우지말것 