//LOGIN PART
document.getElementById("login-btn").addEventListener('click',function(){
    //get email
    const emailId = document.getElementById('mail')
    //get password
    const pass = document.getElementById('pass')
    // check email & password
    if(emailId.value == 'al.noman1620@gmail.com' && pass.value == '12345'){
        window.location.href = 'bank.html'
    } 
    // if invalid pass or email
    else{
        const error = document.createElement('p');
        error.classList.add('errorCss')
        error.innerText = 'Invalid Id or Password'
        const errorMsg = document.getElementById('error-msg');
        errorMsg.appendChild(error);
    }
   
})

