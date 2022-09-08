NewUser = (e) =>{
    e.preventDefault();

    const formData = new FormData(e.target);

    const newUser = Object.fromEntries(formData);


    const users = JSON.parse(localStorage.getItem('Users'));
users.push(newUser);// = [...users, ...newUser];
localStorage.setItem('Users', JSON.stringify(users));
sessionStorage.removeItem('viewUSer');
location.href = "/";

}