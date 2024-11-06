const resultTxt = document.querySelector(".resultTxt");
const buttons = document.querySelectorAll(".btn-num");
const resetBtn = document.querySelector(".btn-reset");
const delBtn = document.querySelector(".btn-del");
const equals = document.querySelector(".btn-calculate");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const calculator = document.querySelector(".calculator");

function render(){
    resultTxt.innerText += this.innerText;
}
for (const btn of buttons) {
    btn.addEventListener("click", render);
}

function reset(){
    resultTxt.innerText = "";
}
resetBtn.addEventListener("click", reset);

function getdelete(){
   resultTxt.innerText = resultTxt.innerText.slice(0,-1)
}

delBtn.addEventListener("click",getdelete);

function getResult(){
    try{
        resultTxt.innerText = eval(resultTxt.innerText);
    } catch{
        alert("eksik işlem var");
    }
}
equals.addEventListener("click", getResult);

one.addEventListener('click', function() {
  body.classList.remove('lightTheme');
  body.classList.remove('purpleTheme');
  header.classList.remove('lightTheme');
  header.classList.remove('purpleTheme');
  calculator.classList.remove('lightTheme');
  calculator.classList.remove('purpleTheme');
});

two.addEventListener('click', function() {
  body.classList.add('lightTheme');
  body.classList.remove('purpleTheme');
  header.classList.add('lightTheme');
  header.classList.remove('purpleTheme');
  calculator.classList.add('lightTheme');
  calculator.classList.remove('purpleTheme');
});

three.addEventListener('click', function() {
  body.classList.add('purpleTheme');
  body.classList.remove('lightTheme');
  header.classList.remove('lightTheme');
  header.classList.add('purpleTheme');
  calculator.classList.remove('lightTheme');
  calculator.classList.add('purpleTheme');
});
