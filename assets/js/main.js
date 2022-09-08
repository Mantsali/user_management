const userList = document.querySelector(".user-list");



document.addEventListener("DOMContentLoaded", () => {

    const login = sessionStorage.getItem("loggedin");
    if(!login){
       location.href = "login.html";
    }

    //load default account if local storage is empty
 
   

console.log(JSON.parse(localStorage.getItem('Users')));

const users = JSON.parse(localStorage.getItem('Users'));
userList.innerHTML = "";
users.forEach(user => {
    
 avatar = user.profile_url ? user.profile_url : "assets/images/pic1.png";
 userList.innerHTML += ` <div class="card mb-3 col-md-10 col-sm-6" style="" >
 <div class="row g-0">
     <div class="col-md-2" onclick="return viewUser('${user.username}')">
         <img src="${avatar}" alt=""class="img-fluid rounded-start">
     </div>
     <div class="col-md-8" onclick="return viewUser('${user.username}')">
         <div class="card-body">
             <h5 class="card-title">${user.name}
              <br>   <small class="text-muted">${user.username}</small>
             </h5>
             
         </div>
       
     </div>
     <div class="col-md-2">
         <div class="card-body">
      
             <a href="#" class="btn btn-outline-success" style="border: none;" onclick="return viewUser('${user.username}')"><i class="fa-solid fa-pencil"></i></a>
             <a href="#" class="btn btn-outline-danger" style="border: none;"  onclick="return deleteUser('${user.username}')"><i class="fa-solid fa-trash-can"></i></a>
         </div>
       
     </div>
 </div>
</div>`;
});
   
});

viewUser = (username) => {
   // console.log(JSON.stringify(username));
  // console.log(username);
   sessionStorage.setItem("viewUser", username);
   location.href = "view.html";
}

deleteUser = (username) => {
    let users = JSON.parse(localStorage.getItem('Users'));
    users = users.filter(user => user.username !== username);
    localStorage.clear();
    localStorage.setItem("Users", JSON.stringify(users));
    location.reload();
}
logoutUser = () =>{
    sessionStorage.clear();
    location.href = "login.html";
}