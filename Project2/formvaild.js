// function Conformation(){
//     const name=String(document.getElementById("uname").value);
//     const email=String(document.getElementsById("email").value);
//     const pass=String(document.getElementById("psw").value);
//     const conpws=String(document.getElementById("conpws").value);
//     if(name==" " || name==null){
//         alert("Enter  a valid Name...");
//         return false;
//     }
//     if(pass!=conpws){
//         alert("Entered Password and Confirm Password is not match");
//         return false;
//     }
//     else if(pass.length<6){
//         alert("Password must contain atleast 6-char or 6-dig");
//         return false;
//     }
//     var result=confirm("Verify your details.\n Name:"+name+"\n Email: "+email);
//     return result;
// }
function confirmation(){
    const name=String(document.getElementById("uname").value);
    const email=String(document.getElementById("email").value);
    const pass = String(document.getElementById("psw").value);
    const conpws=String(document.getElementById("conpws").value);   

    if(name==" "|| name==null){
        alert("Enter a valid Name");
        return false
    }

   if(pass!=conpws){
    alert("The password and confirm-password is not Same");
    return false
}
else if(pass.length<6){
    alert("Password must contain atleast 6 character");
    return false
}
var result= confirm("Verify Your deatils.\n Name: "+name+"\n Email: "+email);
return result;

}
function demo(){
    alert("Thank you for login!!")
}