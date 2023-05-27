const btnNumber = document.querySelectorAll("[data-number]");
const display = document.querySelector('.display');
const btnOperator = document.querySelectorAll("[data-operator]");


function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

function operate(a, op, b){
    if(op === '+'){
        return add(a,b);
    }
    if( op === '-'){
        return subtract(a,b);
    }
    if(op === '*'){
        return multiply(a,b);
    }
    if(op === '/'){
        return divide(a,b);
    }
}

let num1 = "";
let operator = '';
let num2 = '';

function takeNum1(){
    btnNumber.forEach(item => {
        item.addEventListener('click',()=>{
            num1 += item.textContent;
            display.textContent = num1;
        })
    })
}
function takeOperator(){
    btnOperator.forEach(item => {
        item.addEventListener('click',()=>{
            operator = item.textContent;
            display.textContent = operator;
        })
    })
}
/*
function takeNum2(){
    for(i=0; i< btnNumber.length; i++){
        let j = i;
        btnNumber[i].addEventListener('click',()=>{
            num2 += btnNumber[j].textContent;
            display.textContent = num2;

        })
    }
}*/
takeNum1()
takeOperator();

