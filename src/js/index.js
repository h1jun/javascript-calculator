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
const clickNumber = digits.forEach(element => {
    element.addEventListener("click", () => {
        showTotal(element.textContent);
    })
})

// 연산자 클릭
const clickOperate = operations.forEach(element => {
    element.addEventListener('click', () => {
        if (element.textContent === '=') {
            cal();
        }
        operator = element.textContent;
    })
})