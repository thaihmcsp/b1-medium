async function changePassword(id){
    try{
        let data = await $.ajax({
            url: "/admin/changePassword",
            type: "POST",
            data:{
                id
            }
        })
        if(data.status == 200){
            console.log('changePassword');
        }else{
            console.log('changePassword failed');
        }
    }catch(e){
    console.log(e);    
    }
}


async function changInfo()
{
    let username = $("#username").val();
    const form = $("form")[0];
    const formData = new FormData(form);
    if (username.length > 5) {
      let data1 = await $.ajax({
        url: "/admin/changeProfile",
        type: "POST",
        data: {formData,id},
        processData: false,
        contentType: false,
      });
      if (data1.status == 200) {
        console.log("create successful");
        window.location.href = `/manga/viewAllManga`;
      }
    } else {
      alert("nhap name lon hon 5");
    }
}