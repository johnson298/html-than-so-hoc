
// slide giải mã, đỉnh cao cuộc đời, dự báo thời vận
const $slideGiaiMa = $(".slider-mobile-only");
$slideGiaiMa.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    dots: false,
    responsive: [
        {
            breakpoint: 768,
            settings: 'unslick'
        }
    ],
    focusOnChange() {
        console.log('llll')
    }
})
    .init(function() {
        var currentSlide = $slideGiaiMa.slick('getSlick').getCurrent()
        var slideCount = $slideGiaiMa.slick("getSlick").getDotCount()
        $slideGiaiMa.append('<div class="slick-counter">'+ parseInt(currentSlide + 1, 10) +' / '+ slideCount +'</div>')
    })

$slideGiaiMa.on("afterChange", function(){
    var currentSlide = $slideGiaiMa.slick('getSlick').getCurrent()
    var slideCount = $slideGiaiMa.slick("getSlick").getDotCount()
    $slideGiaiMa.find('.slick-counter').html(currentSlide + 1 +' / '+ slideCount);
});




// slide feedback
$('#slide-feedback').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});




// slide blog
$('.slide-blog').slick({
    centerPadding: '60px',
    slidesToShow: 1,
    dots: true
});


// scroll to top
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});
// scroll body to 0px on click
$('#back-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 400);
    return false;
});