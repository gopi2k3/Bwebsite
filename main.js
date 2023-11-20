$('.brand').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})


let btn=document.querySelector(".header-icon");

let change=document.querySelector(".total")


btn.addEventListener('click',function(){
	
	
	change.classList.toggle("active");

    console.log(change)
	
	
	
})
	



let allBtn=document.querySelectorAll('.nav2-content')
 
console.log(allBtn)
allBtn.forEach(e=>{
			
    e.addEventListener('click',function(){
        
        change.classList.remove("active")
    })
})