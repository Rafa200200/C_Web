function validate(){

    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

        if(username=="admin"&& password=="user"){
            alert("login succesfully");
            window.open("index.html");
            return false;
        }

        if(username=="user"&& password=="admin"){
            alert("login succesfully");
            window.open("indexalt.html");
            return false;
        }
        
        else{
            alert("login failed");
        }

}