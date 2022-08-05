async function changeStatue(id){
    try{
        let data = $.ajax({
            url:"/admin/changeStatus",
            type: "POST",
            data:{
                id
            }
        })
    }catch(err){
        console.log(err);
    }
}
async function searchUser(){
    try{
        let username = $('#searchUser').val()
        console.log(username);
        // let data = await $.ajax({
        //     url: `/api/admin/findUserByName/${username}`,
        //     type: 'GET',
        // })
        window.location.href = `/api/admin/findUserByName/${username}`
    }catch(err){
        console.log(err)
    }

}

async function pagination(page, limit) {
    const data = await $.ajax({
      url: `admin/getPaginationUsers?page=${page}&limit=${limit}`,
      type: "GET",
    });
    $(".pagination").html(data);
  }
  