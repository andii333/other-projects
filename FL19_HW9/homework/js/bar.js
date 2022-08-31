export default function bar() {

const days28 = []
for (let index = 1; index < 29; index++) {
    days28.push(index)
}
const days30 = []
for (let index = 1; index < 31; index++) {
    days30.push(index)
}
const days31 = []
for (let index = 1; index < 32; index++) {
    days31.push(index)
}

const january = { name: 'January', days: [27, 28, 29, 30, 31, ...days31, 1, 2, 3, 4, 5, 6] }
const february = { name: 'February', days: [31, ...days28, 1, 2, 3, 4, 5, 6] }
const march = { name: 'March', days: [28, ...days31, 1, 2, 3] }
const april = { name: 'April', days: [28, 29, 30, 31, ...days30, 1] }
const may = { name: 'May', days: [25, 26, 27, 28, 29, 30, ...days31, 1, 2, 3, 4, 5] }
const june = { name: 'June', days: [30, 31, ...days30, 1, 2, 3] }
const july = { name: 'July', days: [27, 28, 29, 30, ...days31] }
const august = { name: 'August', days: [...days31, 1, 2, 3, 4] }
const september = { name: 'September', days: [29, 30, 31, ...days30, 1, 2] }
const october = { name: 'October', days: [26, 27, 28, 29, 30, ...days31, 1, 2, 3, 4, 5, 6] }
const november = { name: 'November', days: [31, ...days30, 1, 2, 3, 4] }
const december = { name: 'December', days: [28, 29, 30, ...days31, 1] }

const monthName = document.querySelector(".month-name-add")
const monthField = document.querySelector(".month")
const next = document.querySelector('.next')
const previous = document.querySelector('.previous')

next.addEventListener('click', nextMonth)
previous.addEventListener('click', previousMonth)

let count = 0
let month = january

function choose() {
    if (count === 1) {
        month = january
    }
    if (count === 2) {
        month = february
    }
    if (count === 3) {
        month = march
    }
    if (count === 4) {
        month = april
    }
    if (count === 5) {
        month = may
    }
    if (count === 6) {
        month = june
    }
    if (count === 7) {
        month = july
    }
    if (count === 8) {
        month = august
    }
    if (count === 9) {
        month = september
    }
    if (count === 10) {
        month = october
    }
    if (count === 11) {
        month = november
    }
    if (count === 12) {
        month = december
    }
    return month
}

function showMonth() {
    month.days.forEach(e => {
        const day = document.createElement('div')
        day.classList.add('day')
        day.append(e)
        monthField.append(day)
        day.addEventListener('click', () => {
            if (day.classList.contains('background')) {
                day.classList.remove('background')
            } else {
                day.classList.add('background')
            }
        })
    });
    monthName.innerHTML = month.name
}

function nextMonth() {
    monthField.innerHTML = ''
    count++
    if (count > 12) {
        count = 1
    }
    if (count < 1) {
        count = 12
    }
    showMonth(choose())
}

nextMonth()

function previousMonth() {
    monthField.innerHTML = ''
    count--
    if (count > 12) {
        count = 1
    }
    if (count < 1) {
        count = 12
    }
    showMonth(choose())
} 

}