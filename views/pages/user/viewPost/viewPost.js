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
function exitComment(){
    $('.commentLayout').css({display:'none'})
}

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
let queryStringArr = window.location.href.split('/')
let queryString = queryStringArr[queryStringArr.length-1]
async function AddComment(postId){
    let content = $('#comment-content').val()
    const res = await $.ajax({
        url:'/api/comment/add-comment',
        type: 'POST',
        data:{ content,postId }
    })
    const cmtRes = await $.ajax({
        url:`/api/comment/get-cmt-by-post-id/${queryString}`
    })
    $('.commentLayout').html(cmtRes)
    
}
async function RemoveComment(commentId){
    const res = await $.ajax({
        url:`/api/comment/remove-comment/${commentId}`,
        type:'DELETE'
    })
    const cmtRes = await $.ajax({
        url:`/api/comment/get-cmt-by-post-id/${queryString}`
    })
    $('.commentLayout').html(cmtRes)
    //alert(res.mess);
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
    const cmtRes = await $.ajax({
        url:`/api/comment/get-cmt-by-post-id/${queryString}`
    })
    
    $('.commentLayout').html(cmtRes)
    //alert(res.mess)
}                 