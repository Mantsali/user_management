const username = sessionStorage.getItem("viewUser");
let users = JSON.parse(localStorage.getItem('Users'));
let user = users.find(user => user.username === username);

const deleteBtn = document.querySelector(".delete");
//const saveBtn = document.querySelector(".save");
const saveForm = document.getElementById("view-form");





document.addEventListener("DOMContentLoaded", () => {
    const displayprofile = document.getElementById("profile");
    const profile_url = document.getElementById("profile_url");
    const usernameTag = document.getElementById("username");
    const fullname = document.getElementById("name");
    const email = document.getElementById("email");

    displayprofile.setAttribute("src",user.profile_url ? user.profile_url : "assets/images/pic1.png" );
    profile_url.value = user.profile_url ? user.profile_url : "";
    usernameTag.value = username;
    fullname.value = user.name;
    email.value = user.email;
});

saveForm.addEventListener("submit", (event) => {
   
    event.preventDefault();

    const formData = new FormData(event.target);

    let updatedUser = Object.fromEntries(formData);
  
    updatedUser['password']= user.password;
   
 // console.log(updatedUser);
    //remove older username entry
    users = users.filter(user => user.username !== username);

    //add updated user information to local storage
    users.push(updatedUser);

   
    localStorage.setItem('Users', JSON.stringify(users));
    sessionStorage.setItem("viewUser", updatedUser.username);
    location.reload();
});






deleteBtn.addEventListener("click", () => {
    users = users.filter(user => user.username !== username);
	localStorage.setItem("Users", JSON.stringify(users));
    location.href = "/";
});
