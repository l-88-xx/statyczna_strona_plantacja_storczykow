const btn = document.querySelector("#theme-btn");

if(btn){

btn.addEventListener("click", function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
localStorage.setItem("theme","dark");
}else{
localStorage.setItem("theme","light");
}

});
}

if(localStorage.getItem("theme") === "dark"){
document.body.classList.add("dark");
}