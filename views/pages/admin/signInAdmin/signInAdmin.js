async function login(){
    let email = $('#email').val();
    let password = $('#password').val();
    try{
        let data = await $.ajax({
            url: '/api/auth/loginAdmin',
            type: 'POST',
            data:{
                email,
                password,
            }
        })
        console.log(data);
        if(data.status == 200){
            alert('login successful');
            window.location.href = '/api/admin/profile'
        }else{
            alert('login failed');
        }
    }catch(e){
        console.log(e);
    }
    
}