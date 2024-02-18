document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("burger").addEventListener("click",function(){
        document.querySelector(".header_top").classList.toggle("open")
    })
});