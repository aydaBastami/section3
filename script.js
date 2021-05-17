// let button = document.querySelector("button")
// button.addEventListener("click", e => {alert ("hi there")})

// let button = document.querySelector("button")
// button.addEventListener("click", func)

// function func (){
//     alert("HaHaHa")
// }

// const makeColor = () => {
//     let r = Math.floor(Math.random() * 255) 
//     let g = Math.floor(Math.random() * 255) 
//     let b = Math.floor(Math.random() * 255) 
//     return `rgb(${r}, ${g}, ${b})`
// }

// let buttons = document.querySelectorAll("button");
// for (let button of buttons){
//     button.addEventListener("click", ColorMake)
// }


// function ColorMake () {
//     this.style.backgroundColor = makeColor()
// }

let button = document.querySelector("button")
let h1 = document.querySelector("h1")

button.addEventListener("click", () => {
    document.body.style.backgroundColor = makeColor()
    h1.innerText = makeColor()
})

const makeColor = () => {
        let r = Math.floor(Math.random() * 255) 
        let g = Math.floor(Math.random() * 255) 
        let b = Math.floor(Math.random() * 255) 
        return `rgb(${r}, ${g}, ${b})`
    }