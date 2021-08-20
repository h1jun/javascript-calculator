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
        if(second === '' && num === '.') {
            total.textContent = '0'
        } else if(second === '') {
            total.textContent = ''
        }
        total.textContent += num
        second += num;
    } else if (first === '') {
        if (num === '.') {
            total.textContent += num    
        } else {
            total.textContent = ''
            total.textContent += num
        }
        first += num
    } else {
        first += num
        total.textContent += num
    }
}

// 사칙연산
const cal = () => {
    first = new BigNumber(Number(first))
    second = Number(second)
    switch(operator) {
        case '+':
            first = first.plus(second)
            // first = String(Math.round((first + second) * 10) / 10)
            second = '';
            total.textContent = first
            break
        case '-':
            first = first.minus(second)
            second = '';
            total.textContent = first
            break
        case 'X':
            first = first.multipliedBy(second)
            second = '';
            total.textContent = first
            break
        case '/':
            first = first.dividedBy(second)
            second = '';
            total.textContent = first
            break
    }
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