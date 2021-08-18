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
})

// 계산하는 숫자 show
const showTotal = (num) => {
    if(operator) {
        if(second === '') {
            total.textContent = ''
        }
        total.textContent += num
        second += num;
    } else if (total.textContent === '0') {
        total.textContent = ''
        total.textContent += num
        first += num
    } else {
        first += num
        total.textContent += num
    }
}

// 연산자 '=' 클릭
const cal = () => {
    console.log("test");
}

// 숫자 클릭
const handleNumber = (event) => {
    showTotal(event.target.textContent);
}

// 연산자 클릭
const handleOperate = (event) => {
    if (event.target.textContent === '=') {
        cal();
    } else {
        operator = event.target.textContent;   
    }
}

function init() {
    operations.forEach(element => element.addEventListener('click', handleOperate));
    digits.forEach(element => element.addEventListener("click", handleNumber));
}

init();