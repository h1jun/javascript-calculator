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
            total.textContent = '0'
        } else if(second === '') {
            total.textContent = ''
        } 
        // 0클릭 후 또 0클릭하면 0으로 고정, 그 뒤 다른 숫자 클릭하면 0 사라지기
        if (second.length === 1 && second[0] === '0' && num === '0') {
            total.textContent = '0'
        } else if (second.length === 1 && second[0] === '0' && num === '.') {
            second += num
            total.textContent += num 
        } else if (second.length === 1 && second[0] === '0' && num !== '0') {
            second += num;
            total.textContent = num
        } else if (!(num === '.' && second.indexOf('.') >= 0)) {
            total.textContent += num
            second += num;
        }
    } else if (first === '') {
        if (num === '.') {
            total.textContent = "0" + num  
        } else {
            total.textContent = ''
            total.textContent += num
        }
        first += num
    } else {
        if (first.length === 1 && first[0] === '0' && num === '0') {
            total.textContent = '0'
        } else if (first.length === 1 && first[0] === '0' && num === '.') {
            first += num
            total.textContent += num
        } else if (first.length === 1 && first[0] === '0' && num !== '0') {
            first = num
            total.textContent = num
        } else if (!(num === '.' && first.indexOf('.') >= 0)) {
            first += num
            total.textContent += num
        } 
    }
}

// 사칙연산
const cal = () => {
    first = new BigNumber(Number(first))
    second = Number(second)
    switch(operator) {
        case '+':
            first = first.plus(second)
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