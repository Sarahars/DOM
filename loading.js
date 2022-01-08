const parent = document.getElementById("parent");
const loading = document.getElementById("load");


// loading.remove(loading);
// loading.innerHTML = "Nothing";
// console.log(add)


// setTimeout(function(){
//     loading.innerHTML  ="Loded successfuly";
//     loading.style.color = "red";
//     loading.style.fontSize = "32px";
// }, 5000)



const listBtn = document.getElementsByTagName("button");
const loginBtn = listBtn[0];

loginBtn.addEventListener("click", () =>{
    loading.innerText = "Loading ...";
    loginBtn.style.display = "none";
    setTimeout( () => {
        loading.innerText = "please be patient";

    },5000);
    setTimeout( () => {
        loading.innerText = "Welcome";
        loginBtn.innerText ="Log out";
        loginBtn.style.display="block";
    }, 10000)
});
