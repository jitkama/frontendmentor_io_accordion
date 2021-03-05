const accordions = document.querySelectorAll('.accordion'); 

accordions.forEach(function(accordion){
 accordion.addEventListener('click', function(){
       accordion.classList.toggle('active');
       var panel = accordion.nextElementSibling
       console.log(panel.innerHTML);
       if(panel.style.maxHeight){
          panel.style.maxHeight = null;
       }else{
         panel.style.maxHeight = panel.scrollHeight + "px";
       }
       console.log(panel.style.maxHeight);
       
    })
 
})