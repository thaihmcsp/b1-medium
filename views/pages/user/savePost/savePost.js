async function unSave(id) {
    console.log(id);
    try {
        let data = await $.ajax({
            type: 'DELETE',
            url: '/api/savePost/deletePost',
            data: {
                id
            }
        })
        if (data.status === 200) {
            alert('delete post successfully')
            window.location.reload()
        }
    } catch (e) {
        console.log(e)
    }
}
async function unsavePost(id){
    try {
        let res = await $.ajax({
            type:'DELETE',
            url:`/api/savePost/unsave-post/${id}`
        })
        alert(res.mess)
        window.location.reload()
    } catch (error) {
        alert(error)
    }
}
async function followAuthor(id){
    try {
        let res = await $.ajax({
            type:'POST',
            url:`/api/follow/follow-author/${id}`
        })
        alert(res.mess)
        window.location.reload()
    } catch (error) {
        alert(error)
    }
}