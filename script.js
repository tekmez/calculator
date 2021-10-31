// Selecting Buttons
let numbers = document.querySelectorAll('.num');
let operators = document.querySelectorAll('.operator');
// operating
let leftPart = '';
let rightPart = '';
let selectedOperator = '';

for (let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', function () {
        document.getElementById('result').innerHTML += this.value;
        if (selectedOperator == ''){
            leftPart += this.value;
        }
        else if (selectedOperator != ''){
            rightPart += this.value;
            
        }
    });
}

for (let i = 0; i<operators.length; i++){
    operators[i].addEventListener('click', function (){
        document.getElementById('result').innerHTML += this.value;
        selectedOperator = this.value;
    });
}

document.getElementById('equation').addEventListener('click', function(){
    if(selectedOperator == '+'){
        document.getElementById('result').innerHTML = parseInt(leftPart) + parseInt(rightPart);
    }
    else if(selectedOperator == '-'){
        document.getElementById('result').innerHTML = parseInt(leftPart) - parseInt(rightPart);
    }
    else if(selectedOperator == '*'){
        document.getElementById('result').innerHTML = parseInt(leftPart) * parseInt(rightPart);
    }
    else if(selectedOperator == '/'){
        document.getElementById('result').innerHTML = parseInt(leftPart) / parseInt(rightPart);
    }
});

document.getElementById('delete').addEventListener('click', function(){
    leftPart = '';
    rightPart = '';
    selectedOperator = '';
    document.getElementById('result').innerHTML = '';
});