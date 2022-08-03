//scroll to show things
$(window).scroll((e)=>{
    var scroll = $(window).scrollTop()
    var height = $(window).height()
    var beyondPoint = $('.viewPost__bottomFeature').offset().top
    if(scroll+height<beyondPoint)
        $('.stickyBarContainer').css({opacity:1})
    else
        $('.stickyBarContainer').css({opacity:0}) 
})
//show morefeature by toggle
document.querySelector('.infoRight__moreFeature').onclick = (e)=>{
    document.querySelector('.moreFeature__top').classList.toggle('displayClass')
}
document.querySelector('.bottomFeatureRight__moreFeature').onclick = (e)=>{
    document.querySelector('.moreFeature__bottom').classList.toggle('displayClass')
}
document.querySelector('.stickyBar__moreFeature').onclick = (e)=>{
    document.querySelector('.moreFeature__stickyBar').classList.toggle('displayClass')
}
//auto height textarea
$('textarea').on('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  });
//show comment
$('.stickyBar__comment').on('click',(e)=>{
    $('.commentLayout').css({display:'flex'})
})
$('.bottomFeatureLeft__comment').on('click',(e)=>{
    $('.commentLayout').css({display:'flex'})
})
//hide comment
$('.exitComment__Btn').on('click',(e)=>{
    $('.commentLayout').css({display:'none'})
})
//Bold
// document.querySelector('.bold-btn').onclick = (e)=>{
//     document.querySelector('textarea').classList.toggle('boldClass')
// }  