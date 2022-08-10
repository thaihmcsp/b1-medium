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
//show morefeature by toggle not use .displayClass
$('.infoRight__moreFeature').click((e)=>{
    $('.moreFeature__top').toggle()
})
$('.bottomFeatureRight__moreFeature').click((e)=>{
    $('.moreFeature__bottom').toggle()
})
$('.stickyBar__moreFeature').click((e)=>{
    $('.moreFeature__stickyBar').toggle()
})
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

//toggle Comment edit option
function ShowCommentEditOption(optionIndex){
    $(`#${optionIndex}`).toggle()
}
//show update button
function ShowUpdateBtn(updateIndex){
    $(`#update-${updateIndex}`).css({display:'block'})
    $(`#content-${updateIndex}`).attr({"contentEditable":'true',"style":"outline:none"})
    $(`#content-${updateIndex}`).focus()
}
//handle data functions
async function AddComment(postId){
    let content = $('#comment-content').val()
    const res = await $.ajax({
        url:'/api/comment/add-comment',
        type: 'POST',
        data:{ content,postId }
    })
    console.log(res)
}
async function RemoveComment(commentId){
    const res = await $.ajax({
        url:`/api/comment/remove-comment/${commentId}`,
        type:'DELETE'
    })
    alert(res.mess);
}   
async function UpdateComment(cmtId,index){
    let newContent = $(`#content-${index}`).html()
    const res = await $.ajax({
        url:'/api/comment/update-comment',
        type:'PATCH',
        data:{cmtId,newContent}
    })
    $(`#content-${index}`).attr({"contentEditable":'false'})
    $(`#update-${index}`).attr({"style":"display:none"})
    alert(res.mess)
}                 