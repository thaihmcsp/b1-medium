function toggle(id,option){
    $(`#${option}-${id}`).toggle()
}
async function UnfollowAandUnblock(authorId,route){
    await $.ajax({
        url:`/api/${route}/un${route}-author/${authorId}`,
        type:'DELETE'
    })
}