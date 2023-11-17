function hideshow(){
    var password = document.getElementById("password1");
    var slash = document.getElementById("slash");
    var eye = document.getElementById("eye");
    
    if(password.type === 'password'){
        password.type = "text";
        slash.style.display = "block";
        eye.style.display = "none";
    }
    else{
        password.type = "password";
        slash.style.display = "none";
        eye.style.display = "block";
    }

};


          