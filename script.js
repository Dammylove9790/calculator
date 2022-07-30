

let inputArea = document.getElementById('inputarea');
let inputAnswer = document.getElementById('inputanswer');

function buttonClick(btnvalue){
    inputArea.style.opacity = 1;
    inputArea.innerHTML += btnvalue;
}


function calculate() {
    if (!inputArea.innerHTML) {
        inputArea.placeholder = "Invalid input";
    } else {
        inputAnswer.style.opacity = 1;
        inputAnswer.innerHTML = "= " + eval(inputArea.innerHTML);
    }
}

function buttonclr () {
    inputArea.innerHTML = " ";
}
