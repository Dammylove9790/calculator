// let x = document.getElementById().innerHTML;
let inputArea = document.querySelector("#input");
let button = document.querySelector("button");
let result = document.getElementById("demo");


function buttonClick(num){
    inputArea.value += num;
}


function calculate() {
    try {
        inputArea.value = eval(inputArea.value);
    } catch (error) {
        alert ("Input a valid number");
    } 
}


// button.forEach(button=>{
//     button.addEventListener("click",textArea);
// });

