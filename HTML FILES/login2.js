function validate()
{
    var username=document.getElementById("username").Value;
    var password=document.getElementById("password").Value;
    if(username=="yaswanth"&& password=="Tyaswanth@1")
    {
        alert("login succesfully");
        return false;


    }
else
{
    alert("login failed");
}
}