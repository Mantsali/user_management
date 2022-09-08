const errorAlert = document.querySelector(".error");

async function getDefaulUsers(){
    let defaultUsers = [];
    
    await fetch("../default_user.json")
    .then(res => res.json())
    .then(data => {
     
        defaultUsers = [...defaultUsers, ...data['users']];
       
        localStorage.clear();
        
        localStorage.setItem('Users', JSON.stringify(defaultUsers));
    });
}

LoginUser = (e) =>{
    e.preventDefault();

    const formData = new FormData(e.target);

    const newUser = Object.fromEntries(formData);


    if(JSON.parse(localStorage.getItem('Users')) === null){
        getDefaulUsers();
       }

    const users = JSON.parse(localStorage.getItem('Users'));

    const loginUser = users.find(user => user.username === newUser["username"]);
    if(loginUser){
        if(loginUser.password === newUser["password"]){
            sessionStorage.setItem("loggedin", "true");
            sessionStorage.setItem("username", newUser["username"]);
            location.href = "/";
        }else{
            errorAlert.innerHTML = `<div class="alert alert-danger" role="alert">
            Wrong password entered
            </div>` ; 
        }

    }else{
        errorAlert.innerHTML = `<div class="alert alert-danger" role="alert">
        User does not exist
        </div>` ;
    }

}