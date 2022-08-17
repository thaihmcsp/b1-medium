async function login(){
    let email = $('#email').val();
    let password = $('#password').val();
    console.log(password);
    try{
        let data = await $.ajax({
            url: '/api/auth/login',
            type: 'POST',
            data:{
                email,
                password,
            }
        })
        console.log(data);
        if(data.status == 200){
            console.log('login successful');
            window.location.href = '/api'
        }
    }catch(e){
        console.log(e);
    }
    
}