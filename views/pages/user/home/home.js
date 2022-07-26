document.querySelectorAll('.homeTab a').forEach(aNode=>{
    aNode.onclick = (e)=>{
        document.querySelector('.tabActive').classList.remove('tabActive')
        e.target.classList.add('tabActive')
    }
})
$(document).on('click',(e)=>{
    if(e.target.parentNode == $('.homePost__otherInfoRight--moreFeature')[0])
        $('.moreFeature').css({display:'block'})
    else
        $('.moreFeature').css({display:'none'})
})