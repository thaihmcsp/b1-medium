async function viewDetails(id){
    try{
        let data = $.ajax({
            url:"/post/viewDetails",
            type: "GET",
            data:{
                id
            }
        })
    }catch(err){
        console.log(err);
    }
}

async function pagination(page, limit) {
    const data = await $.ajax({
      url: `post/getPaginationPost?page=${page}&limit=${limit}`,
      type: "GET",
    });
    $(".pagination").html(data);
  }
  
async function changeStatus(id){
    try{
        let data = await $.ajax({
            url: 'post/changeStatusPost',
            type: "POST",
            data: {
                id
            }
        })
        if(data.status == 200){
            console.log("change status successful");
        }
    }catch(e){
        console.log(e);
    }
}




