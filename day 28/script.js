// sessionStorage.setItem("Name","Archana")
// let data = sessionStorage.getItem("Name")
// console.log(data);

// import Cookies from 'js-cookie';

// Cookies.set("Username","Archu")


Cookies.set('username', 'JohnDoe',{expires : 10});
const user = Cookies.get('username');
console.log(user);

// Cookies.remove('username');
