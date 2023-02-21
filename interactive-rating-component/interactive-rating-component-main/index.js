const btns = document.querySelectorAll(".btn");
const Rating = document.getElementById("ratings");
const hide = document.querySelector(".click-submit")
const cardButton = document.querySelector(".card__button");
const hidde = document.querySelector(".hidden");

btns.forEach((btn) =>{
    btn.addEventListener("click",function(){
     Rating.innerText =  btn.innerText   
        
     
    })
})  


cardButton.addEventListener("click",function(){
   hide.style.display = "none"
    
   if(hidde.style.display = "none"){
     hidde.style.display ="block"
   }
   else{
     hidde.style.display = "none"
     hide.style.display = "block";
   }
      
})


