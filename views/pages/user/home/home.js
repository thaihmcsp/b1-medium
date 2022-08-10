document.querySelectorAll('.homeTab a').forEach(aNode=>{
    aNode.onclick = (e)=>{
        document.querySelector('.tabActive').classList.remove('tabActive')
        e.target.classList.add('tabActive')
    }
})
function ShowHomeFeature(homeFeatureId){
    $(`#${homeFeatureId}`).toggle()
}
//block author
async function BlockAuthor(authorId){
    let res = await $.ajax({
        url:`/api/block/block-author`,
        type:'POST',
        data:{authorId}
    })
    alert(res.mess)
}