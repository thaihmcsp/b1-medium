async function createCategory(){
    let categoryName = $("#categoryName").val();
    console.log(categoryName);
    try{
        let data = await $.ajax({
            url: '/api/category/create-cat',
            type: 'POST',
            data:{
                categoryName
            }
        })
        if(data.status == 200){
            console.log('success');
        }
    }catch(err){
        console.log(err);
    }
}


async function search(){
    try{
        let name = $("#name").val()
        console.log(name);
        // let data = await $.ajax({
        //     url: `/api/category/get-cat-by-name/${name}`,
        //     type: 'GET',
        // })
        window.location.href = `/api/category/get-cat-by-name/${name}`
    }catch(err) {
        console.log(err);
    }
}


async function update(id){
    try{

        window.location.href = `/api/category/update-cat/${id}`
    }catch(err) {
        console.log('err');
    }
}

async function editCategory(){
    let categoryName = $('#categoryName').val()
    let id = window.location.href.split('/')[6]
    console.log(id);
    try{
        let data = await $.ajax({
            url: `/api/category/update-old-cat/${id}`,
            type: 'PATCH',
            data: {
                categoryName
            }
        })
        window.location.href = `/api/category/get-all-cat`
    }catch(err) {
        console.log(err);}
}