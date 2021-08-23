const total = document.querySelector('#total');
const digits = Array.from(document.querySelectorAll('.digit'));
const operations = Array.from(document.querySelectorAll('.operation'));
const modifier = document.querySelector('.modifier');

let first = '';
let second = '';
let operator = '';

// AC
const clear = modifier.addEventListener('click', () => {
    total.textContent = '0';
    first = '';
    second = '';
    operator = '';
})

// 계산하는 숫자 show
const showTotal = (num) => {
    if(operator) {
        // 처음에 '.' 클릭 시 0.x로 시작 
        if(second === '' && num === '.') {
            total.textContent = '0';
        } else if(second === '') {
            total.textContent = '';
        } 
        // 0클릭 후 또 0클릭하면 0으로 고정, 그 뒤 다른 숫자 클릭하면 0 사라지기
        if (second.length === 1 && second[0] === '0' && num === '0') {
            total.textContent = '0';
        } else if (second.length === 1 && second[0] === '0' && num === '.') {
            second += num;
            total.textContent += num ;
        } else if (second.length === 1 && second[0] === '0' && num !== '0') {
            second += num;
            total.textContent = num;
        } else if (!(num === '.' && second.indexOf('.') >= 0)) {
            total.textContent += num;
            second += num;
        }
    } else if (first === '') {
        if (num === '.') {
            total.textContent = "0" + num  ;
        } else {
            total.textContent = '';
            total.textContent += num;
        }
        first += num
    } else {
        if (first.length === 1 && first[0] === '0' && num === '0') {
            total.textContent = '0';
        } else if (first.length === 1 && first[0] === '0' && num === '.') {
            first += num;
            total.textContent += num;
        } else if (first.length === 1 && first[0] === '0' && num !== '0') {
            first = num;
            total.textContent = num;
        } else if (!(num === '.' && first.indexOf('.') >= 0)) {
            first += num;
            total.textContent += num;
        } 
    }
}

// 사칙연산
const cal = () => {
    let decimal = 0;
    
    if (first.indexOf('.') !== -1) {
        decimal = first.length -  (first.indexOf('.') + 1);
    }
    if (second.indexOf('.') !== -1) {
        if(decimal  < second.length -  (second.indexOf('.') + 1)) {
            decimal = second.length -  (second.indexOf('.') + 1);
        }
    }
    first = Number(first)
    second = Number(second)

    switch(operator) {
        case '+':
            first = (first + second).toFixed(decimal)
            break;
        case '-':
            first = (first - second).toFixed(decimal);
            break;
        case 'X':
            first = String(first * second);
            break;
        case '/':
            first = String(first / second);
            break;
    }
    second = '';
 
    // 무한 소수점 해결
    if (first.indexOf('.') !== -1 && first.length > 8) {
        first = Number(first).toFixed(4);
    }

    // XXX.000 -> XXX 처리
    if (first.indexOf('.') !== -1) {
       if (Number(first.slice(first.indexOf('.') + 1, first.length)) === 0) {
           first =  first.slice(0, first.indexOf('.'))
       }
    }  

    total.textContent = first
    decimal = 0
}

// 숫자 클릭
const handleNumber = (event) => {
    showTotal(event.target.textContent);
}

// 연산자 클릭
const handleOperate = (event) => {
    if (second !== '') {
        cal();
        operator = event.target.textContent;
    } else {
        operator = event.target.textContent;   
    }
}

function init() {
    operations.forEach(element => element.addEventListener('click', handleOperate));
    digits.forEach(element => element.addEventListener("click", handleNumber));
}

init();