function getinfo(){
    const name = document.getElementById("inputname").value
    const password = document.getElementById("password").value
    if (name=='admin' && password=='kham'){
        alert("Login susessfuly")
            return false
    }
    else{
        alert("Login failed ")
    }
}