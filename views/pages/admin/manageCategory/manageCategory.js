async function createCategory(){
    let categoryName = $("#categoryName").val();
    console.log(categoryName);
    try{
        let data = await $.ajax({
            url: 'create-cat',
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
        let data = await $.ajax({
            url: `/api/category/get-cat-by-name/${name}`,
            type: 'GET',
        })
        window.location.href = `/api/category/get-cat-by-name/${name}`
    }catch(err) {
        console.log(err);
    }

}