function ShowHomeFeature(homeFeatureId){
    $(`#${homeFeatureId}`).toggle()
}
//block author
async function BlockAuthor(authorId){
    let res = await $.ajax({
        url:`/api/block/block-author/${authorId}`,
        type:'POST'
    })
    alert(res.mess)
}
//for-you and following postList
async function PostRender(option,element){
    document.querySelector('.tabActive').classList.remove('tabActive')
    element.classList.add('tabActive')

    let res = await $.ajax({
        url:`/api/post/get-all-${option}-post`
    })
    $('.homePost-container').html(res)
}