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
        password.value="";
    }
    if(password.value!= "12345")
    {
        console.log(password.value);
        // var passwordText = document.getElementById("passwordText");
        // passwordText.innerHTML = "Incorrect password";
        userName.value = "";
        password.value="";
    }
    return redirect(userName.value,password.value);
}

function redirect(userName,password)
{
    if(userName=="admin"&&password=="12345")
    {
        return true;
    }
    else
    {
        alert("Incorrect user name or password");
        return false;
    }
}