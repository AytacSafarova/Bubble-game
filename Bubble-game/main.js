
let startbtn=document.querySelector(".start")
let savebtn=document.querySelector(".save")
let stopbtn=document.querySelector(".stop")
let input= document.querySelector("input")
let balonplace=document.querySelector(".balonplace")
let checkboxs=document.querySelectorAll(".checkbox")


localStorage.setItem("userName", input.va);


savebtn.addEventListener('click', takedata)
function takedata(){
    if(input.value){
        startbtn.disabled=false
    }
}


// take count from user
let count=0

function a(){
checkboxs.forEach(item=>{
    console.log(item.nextElementSibling)
    if(item.checked && item.nextElementSibling.textContent=="Easy"){
        count=3
    }
    else if (item.checked&& item.nextElementSibling.textContent=="Medium"){
        count=2
    }
    else if (item.checked&& item.nextElementSibling.textContent=="Hard"){
        count=1
    }
})}



startbtn.addEventListener('click', setInterval)
function createbalom() {
    let div= document.createElement("div")
    div.classList.add("balon")
    balonplace.appendChild(div)   
}

setInterval(createbalom, count)













