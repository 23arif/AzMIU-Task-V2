function changeTab(type,t) {
    if (type === 'news') {
        document.getElementById('announcement-container').classList.add('hide');
        document.getElementById('news-container').classList.remove('hide')
        document.getElementById('news').classList.add('active')
        document.getElementById('announcement').classList.remove('active')
    } else {
        document.getElementById('news-container').classList.add('hide')
        document.getElementById('announcement-container').classList.remove('hide')
        document.getElementById('announcement').classList.add('active')
        document.getElementById('news').classList.remove('active')
    }

}
$(document).ready(function(){

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
});
