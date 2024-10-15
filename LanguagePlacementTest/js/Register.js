var user_firstName=document.getElementById("inputFirstName")
var user_lastName=document.getElementById("inputLastName")
var user_Email=document.getElementById("inputEmail")
var user_Password=document.getElementById("inputPassword");
var Register=document.getElementById("Register");
var val_span=document.getElementById("s1");
let usersData;
let adminData;
var ss;
var isexist=false;
function onload()
{
    const searchParams = new URLSearchParams(window.location.search);
    ss=searchParams.get('log')
}

if(localStorage.users!=null)
{
    usersData=JSON.parse(localStorage.users)
}
else{
   usersData=[];
}
if(localStorage.admins!=null)
    {
        adminData=JSON.parse(localStorage.admins)
    }
    else{
       adminData=[];
    }

Register.addEventListener("click",function(e){
    e.preventDefault();

if(user_firstName.value=="" ||user_lastName=="" ||user_Email==""||user_Password=="")
    alert("please fill data")
else 
{
    if(ss=="user")
   {
    userRegister();
   }
else if(ss=="admin")
{
    
   adminRegister();
}
   
}
})
;


function userRegister()
{
     let user={
        firstName:user_firstName.value,
        lastName:user_lastName.value,
        Email:user_Email.value,
        Password:user_Password.value,
       


    }
    for(var i=0;i<usersData.length;i++)
      {  if(user.Email==usersData[i].Email)
        {
isexist=true;
        }
  
}
if(isexist==true)
    alert("already found")
else
 {usersData.push(user);
    localStorage.setItem('users',JSON.stringify(usersData))
    window.location.replace("StudentInterface.html")
     }
     user_Email.addEventListener("input",function(){
        check_valid(user_Email)
            
    })
}

function adminRegister()
{
    let admin={
        firstName:user_firstName.value,
        lastName:user_lastName.value,
        Email:user_Email.value,
        Password:user_Password.value,
    
    }
    for(var j=0;j<adminData.length;j++)
{
  
    if(admin.Email==adminData[j].Email)
        {
            isexist=true;
        }
}
if(isexist==true)
    alert("already signed")
else
{adminData.push(admin);
    localStorage.setItem('admins',JSON.stringify(adminData))
    localStorage.setItem('admin_id',JSON.stringify(admin.Email))
    window.location.replace("AdminInterface.html")}
}

user_Email.addEventListener("input",function(){
    check_valid(user_Email)
        
})
user_Password.addEventListener("input",function(){

    document.getElementById('togglePassword').style.visibility = 'visible';
})
document.getElementById('togglePassword').addEventListener('click', function () {

    if(user_Password.type=="password")
        {  user_Password.type="text";
            document.getElementById('toggleIcon').classList.remove("fa-eye")
            document.getElementById('toggleIcon').classList.add("fa-eye-slash")
        }
     else if(user_Password.type=="text")
         {
             user_Password.type="password";
             document.getElementById('toggleIcon').classList.remove("fa-eye-slash")
             document.getElementById('toggleIcon').classList.add("fa-eye")
         }
})

function check_valid(input)
{
    var emailreg= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(emailreg.test(input.value)==false)
    {
        val_span.innerHTML="Invalid Gmail address. Please enter a valid Gmail address."     

    }
    else
    {
        val_span.innerHTML="";
    }
}