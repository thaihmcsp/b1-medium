async function login(){
    let email = $('#email').val();
    let password = $('#password').val();
    // console.log(password);
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
            console.log('login successful');
            window.location.href = '/api/admin/profile'
        }
    }catch(e){
        console.log(e);
    }
    
}