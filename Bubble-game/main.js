
let startbtn=document.querySelector(".start")
let savebtn=document.querySelector(".save")
let stopbtn=document.querySelector(".stop")
let input= document.querySelector("input")
let balonplace=document.querySelector(".balonplace")
let checkboxs=document.querySelectorAll(".checkbox")
let main =document.querySelector('main') 
 let time=3000;



// take count from user
let count=0
let addtime
let user
let balons

startbtn.addEventListener('click', addbubble)

function addbubble(){
    // main.style.zIndex=4
    // startbtn.style.display='none'
  user = prompt("Please enter your name");
  let p=document.createElement('p')
  let text= ` Hi ,${user} `
  p.innerHTML=text
  main.append(p)
  
  
checkboxs.forEach(item=>{
    if(item.checked && item.nextElementSibling.textContent=="Easy"){
     addtime= setInterval(()=>{
            let div= document.createElement("div")
               div.classList.add("balon")
               balonplace.appendChild(div) 
               balons=document.querySelector(".balon")
               div.addEventListener('click',()=>{
                div.style.display='none'               })
         
           }, time)
        console.log(item.nextElementSibling.textContent)
    }
    else if (item.checked&& item.nextElementSibling.textContent=="Medium"){
        time=2000;
        addtime= setInterval(()=>{
            let div= document.createElement("div")
               div.classList.add("balon")
               balonplace.appendChild(div)
               div.addEventListener('click',()=>{
div.style.display='none'               })
           }, time)
    }
    else if (item.checked&& item.nextElementSibling.textContent=="Hard"){
        time=1000

        addtime=   setInterval(()=>{
            let div= document.createElement("div")
               div.classList.add("balon")
               balonplace.appendChild(div) 
               div.addEventListener('click',()=>{
                div.style.display='none'               })
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
// balons.addEventListener('click', ()=>{
//     console.log('salam')
// })