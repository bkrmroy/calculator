const btnNumber = document.querySelectorAll("[data-number]");
const display = document.querySelector('.display');
const btnOperator = document.querySelectorAll("[data-operator]");
const equal = document.querySelector(".equal");
const smallScreen = document.querySelector(".small-screen");
const ac = document.querySelector(".ac");
const del = document.querySelector(".del");
const decimal = document.querySelector(".decimal");

let numbers = [];
let operator = [];
let result;

function operate(a, op, b){
    if(op === '+'){
        result =  a + b;
    }
    if( op === '-'){
        result = a - b;
    }
    if(op === '*'){
        result = a * b;
    }
    if(op === '/'){
        result = a / b;
    }
    console.log(result)

    if(result === Math.trunc(result)){
        return result;
    }
    else{
        return result.toFixed(4);
    }
    
}


let clickCount = 1; 
function takeNum(){
        btnNumber.forEach(item => {
            item.addEventListener('click',()=>{

                if(clickCount === 1){
                    if(item.textContent === '.'){
                        display.textContent = '0' + item.textContent;
                    }
                    else display.textContent = '' + item.textContent;
                }
                else display.textContent += item.textContent;
                if(display.textContent.includes('.')){
                    decimal.disabled = true;
                }
                clickCount += 1;
            })
        })

}

let operatorClickCount = 1;

function takeOperator(){
    btnOperator.forEach(item => {
        item.addEventListener('click',()=>{
            if(operatorClickCount === 1 && display.textContent != '0'){
                operator.push(item.textContent);

                numbers.push(display.textContent);

            }
            if(operatorClickCount !== 1 && display.textContent != '0'){
                operator.push(item.textContent);
                numbers.push(display.textContent);
                let initialSum = operate(Number(numbers[numbers.length - 2]), operator[operator.length - 2], Number(numbers[numbers.length-1]));
                display.textContent = initialSum;
                numbers.push(initialSum);
            }
            // console.log(numbers);

            if(numbers.length !== 0){
                operatorClickCount += 1;
            }
            decimal.disabled = false;
            clickCount= 1;
        })
    })
}
function printResult(){
    equal.addEventListener("click",() => {
        if(numbers.length === 0) return;
        else{
            numbers.push(display.textContent);
            
            display.textContent = operate(Number(numbers[numbers.length - 2]), operator[operator.length -1], Number(numbers[numbers.length-1]));

            numbers = [];
            // console.log(numbers);
            operator = [];
            clickCount = 1;
            operatorClickCount = 1;
            decimal.disabled = false;
        }

    })
    
}
function calculate(){
    takeNum();
    takeOperator();
    printResult();
}
calculate()

ac.addEventListener("click",()=>{
    display.textContent = '0';
    numbers = [];
    operator = [];
    clickCount = 1;
    operatorClickCount = 1;
    decimal.disabled = false;
});
del.addEventListener("click",()=>{
    display.textContent = display.textContent.slice(0, -1);

    if(display.textContent === ''){
        display.textContent = '0';
    }
    if(!display.textContent.includes('.')){
        decimal.disabled = false;
    }
})




