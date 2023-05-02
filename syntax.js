//**********************************Prouducts section */
let tablinks = document.getElementsByClassName("tab-links")
let tabcontents = document.getElementsByClassName("tab-contents")
let imgProduct =document.getElementById("img")
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
    
}
function product(x){
    imgProduct.src = "/images/img1.png"
    console.log(imgProduct)
}
function product2(y){
    imgProduct.src = "/images/img3.png"
    console.log(imgProduct)
}
function product3(z){
    imgProduct.src = "/images/img4.png"
    console.log(imgProduct)
}
//***********************end Prouducts */
// start Apout *********************
let nums =document.querySelectorAll(".text-Box .number")
console.log(nums)
let sectionA =document.querySelector('#About')
let started = false // function started no
window.onscroll = function () {
    if(window.scrollY >= sectionA.offsetTop*0.5){
        if(!started){
            nums.forEach((num) => startCount(num))
        }
        started = true
    }
}
function startCount(el){
    let goal = el.dataset.goal
    let count =setInterval(() => {
    el.textContent++
    if(el.textContent == goal){
        clearInterval(count)
    }
    },2000 / goal)

}
// End Apout ***********************
