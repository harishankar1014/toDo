function validate(redirect)
{
    var userName = document.getElementById("username");
    var password = document.getElementById("password");
    if(userName.value != "admin")
    {
        console.log(userName.value);
        // var userText = document.getElementById("userText");
        // userText.innerHTML = "Incorrect User name";
        userName.value = "";
    }
    if(password.value!= "12345")
    {
        console.log(password.value);
        // var passwordText = document.getElementById("passwordText");
        // passwordText.innerHTML = "Incorrect password";
        password.value="";
    }
    return redirect(userName.value,password.value);
}

function redirect(userName,password)
{
    if(userName=="admin"&&password=="12345")
    {
        console.log(false);
        return true;
    }
    else
    {
        console.log(true);
        return false;
    }
}