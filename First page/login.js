
function getinfo(){
    const name = document.getElementById("inputname").value
    const password = document.getElementById("password").value
    if (name=='admin' && password=='admin'){
            window.open('../admin/admin.html')
            return false
    }
    else if(name=='user' && password=='user'){
            window.open('../user/user.html')
            return false
    }
    else{
        alert("Login failed Please try again! ")
    }
}
console.log('k')