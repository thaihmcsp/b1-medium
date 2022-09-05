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