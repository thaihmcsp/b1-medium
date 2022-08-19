async function viewDetails(id){
    try{
        // let data = $.ajax({
        //     url:"/api/post/viewDetails",
        //     type: "GET",
        //     data:{
        //         id
        //     }
        // })
        window.location.href = `/api/post/viewDetails/${id}`;
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
  




