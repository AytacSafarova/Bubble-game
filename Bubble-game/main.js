
let startbtn=document.querySelector(".start")
let savebtn=document.querySelector(".save")
let stopbtn=document.querySelector(".stop")
let input= document.querySelector("input")
let balonplace=document.querySelector(".balonplace")
let checkboxs=document.querySelectorAll(".checkbox")
let check= document.querySelector(".check")
  let time=3000;
check.addEventListener('click',()=>{
    console.log('salaafdfvhgvoiu')
    localStorage.setItem("userName", input.va);

})


// take count from user
let count=0
let addtime



startbtn.addEventListener('click', addbubble)

function addbubble(){
checkboxs.forEach(item=>{
    // console.log(item.nextElementSibling)
    if(item.checked && item.nextElementSibling.textContent=="Easy"){
     addtime= setInterval(()=>{
            let div= document.createElement("div")
               div.classList.add("balon")
               balonplace.appendChild(div) 
         
           }, time)
        console.log(item.nextElementSibling.textContent)
    }
    else if (item.checked&& item.nextElementSibling.textContent=="Medium"){
        time=2000;
        addtime= setInterval(()=>{
            let div= document.createElement("div")
               div.classList.add("balon")
               balonplace.appendChild(div) 
             
           
           }, time)
    }
    else if (item.checked&& item.nextElementSibling.textContent=="Hard"){
        time=1000

        addtime=   setInterval(()=>{
            let div= document.createElement("div")
               div.classList.add("balon")
               balonplace.appendChild(div) 
           }, time)    }
})

}
  
stopbtn.addEventListener('click', stop)
function stop(){
clearInterval(addtime)
console.log('stop')
}








savebtn.addEventListener('click', takedata)
function takedata(){
    if(input.value){
        startbtn.disabled=false
        
    }
}

