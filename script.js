const btnNumber = document.querySelectorAll("[data-number]");
const display = document.querySelector('.display');
const btnOperator = document.querySelectorAll("[data-operator]");
const equal = document.querySelector(".equal");
const smallScreen = document.querySelector(".small-screen");
const ac = document.querySelector(".ac");
const del = document.querySelector(".del");
const decimal = document.querySelector(".decimal");

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

let result;

function operate(a, op, b){
    if(op === '+'){
        result =  add(a,b);
    }
    if( op === '-'){
        result = subtract(a,b);
    }
    if(op === '*'){
        result =  multiply(a,b);
    }
    if(op === '/'){
        result = divide(a,b);
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
                    if(display.textContent === '0.'){
                        display.textContent = '0.' + item.textContent;
                    }
                    else display.textContent = '' + item.textContent;
                    
                }
                else{
                    display.textContent += item.textContent;
                }
                clickCount += 1;
            })
        })
        takeDecimal();

}
function takeDecimal(){
    decimal.addEventListener("click",() =>{
        if(display.textContent === '0'){
            display.textContent = '0' + decimal.textContent;
        }
        else display.textContent += decimal.textContent;
        
    },)
}


let numbers = [];
let operator = [];
let operatorClickCount = 1;

function takeOperator(){
    btnOperator.forEach(item => {
        item.addEventListener('click',()=>{
            /*
            if(display.textContent != ''){
                numbers.push(display.textContent);
            }*/
            
            //smallScreen.textContent += ''+ numbers[numbers.length - 1]+ '';

            
            if(operatorClickCount === 1 && display.textContent != ''){
                operator.push(item.textContent);
                console.log('operator = '+ operator);
                numbers.push(display.textContent);
            }
            if(operatorClickCount !== 1 && display.textContent != ''){
                operator.push(item.textContent);
                console.log('operator = '+ operator);

                numbers.push(display.textContent);
                let initialSum = operate(Number(numbers[numbers.length - 2]), operator[operator.length - 2], Number(numbers[numbers.length-1]));
                display.textContent = initialSum;
                numbers.push(initialSum);
            }
            
            console.log(numbers);
            console.log(operatorClickCount);
            operatorClickCount += 1;
            clickCount= 1;
        })
    })
}
function printResult(){
    equal.addEventListener("click",() => {
        numbers.push(display.textContent);
        //smallScreen.textContent += display.textContent + '';

        display.textContent = operate(Number(numbers[numbers.length - 2]), operator[operator.length -1], Number(numbers[numbers.length-1]));

        console.log(numbers);
        numbers = [];
        operator = [];
        clickCount = 1;
        operatorClickCount = 1;

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
    
});
del.addEventListener("click",()=>{
    display.textContent = display.textContent.slice(0, -1);
    if(display.textContent === ''){
        display.textContent = '0'
    }
})




