let FirstN =document.getElementById('FirstN')
let LastN=document.getElementById('LastN')
let email =document.getElementById('email')
let pass =document.getElementById('password')
let pass2 =document.getElementById('password2')
let check =document.getElementById('check')
let btnn = document.getElementById('btnn')

btnn.onclick = function(e){
    if(FirstN.value=="")
    {
        e.preventDefault()
        window.alert('Please enter your first name')
        
    }
    else if(LastN.value=="")
    {
        e.preventDefault()
        window.alert('Please enter your last name')
    }
    else if(email.value=='')
    {
        e.preventDefault()
        window.alert('Please enter your email')
        
    }
    else if (pass.value=="")
    {
        e.preventDefault()
        window.alert('Please enter your password')
       
    }
    else if (pass2.value=="")
    {
        e.preventDefault()
        window.alert('Please enter your confirm password')
        
    }
    else if(check.value!=0)
    {
        window.alert('press on check ')
        e.preventDefault()
        
    }
    else
    {
        window.alert('Thanks for sign up with us please check your email to Confirm your account  ')
    }
}
