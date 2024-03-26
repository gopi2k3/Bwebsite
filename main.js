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
 

allBtn.forEach(e=>{
			
    e.addEventListener('click',function(){
        
        change.classList.remove("active")
    })
})



// // let f=document.getElementById('contact')
// let clickForm=document.querySelector('.form')
// console.log(clickForm)



//portfolio Section





let poValue=[{
    id:1,
    name:'WEB',

    imgs:'image/portfolio-1.jpg'
    },
    {
    id:2,
    name:'CARD',

    imgs:'image/portfolio-6.jpg'
    },
    {
    id:3,
    name:'WEB',

    imgs:'image/portfolio-2.jpg'
    },
    {
    id:4,
    name:'APP',

    imgs:'image/portfolio-5.jpg'
    },
    {
    id:5,
    name:'CARD',

    imgs:'image/portfolio-9.jpg'
    },
    {
    id:6,
    name:'WEB',

    imgs:'image/portfolio-3.jpg'
    },
    {
    id:7,
    name:'APP',

    imgs:'image/portfolio-4.jpg'
    },
    {
    id:8,
    name:'CARD',

    imgs:'image/portfolio-7.jpg'
    }
    
]


// port(poValue)
// function port(a){
//     let div=document.querySelector('.Portfolio-header')
//     let ul=document.createElement('ul')
//     a.forEach((e)=>{
//         ul.innerHTML+=`<li class='port-color' onClick={portFun(this)}>${e.name}</li>`
//         div.append(ul)
        
//     })

// }





ans(poValue)
function ans(a){
    
 
    a.forEach((e)=>{
        
        let col= document.createElement('div')
        col.classList.add('portfolio-col')
       col.innerHTML+=`<div class="Portfolio-card">
       <div class="Portfolio-item">
           <img src="${e.imgs}">
           <div class="portfolio-info">
               <div class="Portfolio-head">
                   <h2>${e.name}</h2>
                   <p>${e.name}</p>
               </div>
               <div class="Portfolio-icon">
                  <i class="bi bi-plus-circle"></i>
                  <i class="bi bi-plus-circle"></i>
               </div>
           </div>
       </div>
   </div>`

   document.querySelector('.portfolio-row').append(col)


    })
  

}

function funportAll(){
    let all=document.querySelectorAll('.portfolio-col')
    all.forEach(e=>e.remove())

    ans(poValue)
}


function funportApp(){
    let all=document.querySelectorAll('.portfolio-col')
    all.forEach(e=>e.remove())

    let a=poValue.filter((e)=>{
        return e.name=='APP'
    })
    
     ans(a)
}


function funportCard(){
    let all=document.querySelectorAll('.portfolio-col')
    all.forEach(e=>e.remove())

    let a=poValue.filter((e)=>{
        return e.name=='CARD'
    })
    
     ans(a)
}
function funportWeb(){
    let all=document.querySelectorAll('.portfolio-col')
    all.forEach(e=>e.remove())

    let a=poValue.filter((e)=>{
        return e.name=='WEB'
    })
    
     ans(a)
}