jQuery(function($){

    if($("#carousel-division").length){
        $("#carousel-division").slick({
        centerPadding: '60px',
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              dots: false,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });
      $('.carousel-division-btn.arrow-prev').click(function(){
        $('#carousel-division').slick('slickPrev');
      })
      $('.carousel-division-btn.arrow-next').click(function(){
        $('#carousel-division').slick('slickNext');
      })
  }// end if
  
  if ($("#carousel-timeline").length) {
    
    $("#carousel-timeline").slick({
      centerPadding: '60px',
      centerMode: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: false,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
    $('.carousel-timeline-btn.arrow-prev').click(function(){
      $('#carousel-timeline').slick('slickPrev');
    })
    $('.carousel-timeline-btn.arrow-next').click(function(){
      $('#carousel-timeline').slick('slickNext');
    })
    
    }// end if


  }); // end jquery