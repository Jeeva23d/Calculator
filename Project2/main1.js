function Conformation(){
    const name=document.getElementById("uname").value;
    const email=document.getElementsById("email").value;
    const pass=document.getElementById("pws").value;
    const conpws=document.getElementById("conpws").value;
    if(name==" " || name==null){
        alert("Enter  a valid Name...");
        return false;
    }
    if(pass!=conpws){
        alert("Entered Password and Confirm Password is not match");
        return false;
    }
    else if(pass.length<6){
        alert("Password must contain atleast 6-char or 6-dig");
    }
    var result=confirm("Verify your details.\n Name:"+name+"\n Email: "+email);
    return result;
}