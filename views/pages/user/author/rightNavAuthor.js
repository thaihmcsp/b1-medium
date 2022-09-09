async function followAuthor(id){
    try {
        let res = await $.ajax({
            type:'POST',
            url:`/api/follow/follow-author/${id}`
        })
        alert(res.mess)
    } catch (error) {
        alert(error)
    }
}