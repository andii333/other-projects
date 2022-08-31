const btnStart = document.querySelector('.btn-lets')
const field = document.querySelector('.field')
const rezult = document.querySelector('.rezult')
let compChoose = ''
const rock = document.createElement('button')
rock.append('Rock')
rock.id = 'rock'

const paper = document.createElement('button')
paper.append('Paper')
paper.id = 'peper'

const scissors = document.createElement('button')
scissors.append('Scissors')
scissors.id = 'scissors'

const cancel = document.createElement('button')
cancel.append('Cancel')
cancel.id = 'cancel'

const go = () => {
    field.append(rock, paper, scissors, cancel)
    game()
}
btnStart.addEventListener('click', go)

function randomComputer () {
const random = Math.floor(Math.random()*3)
    
if (random === 0) {
    compChoose = "Rock"
} 
if (random === 1) {
    compChoose = "Peper"
} 
if (random === 2) {
    compChoose = "Scissors"
}
return compChoose
} 

function over(countWin, countLose) {
    if (countWin === 3) {
       setTimeout(() => {
        alert('You WON!')
        window.location.reload()
       }, 1);
    }
    if (countLose === 3) {
        setTimeout(() => {
        alert('You LOSE!')
        window.location.reload()
        }, 1);
    }
}

function game() {
    const btnRock = document.getElementById('rock')
    const btnPaper = document.getElementById('peper')
    const btnScissors = document.getElementById('scissors')
    const btnCancel = document.getElementById('cancel')
    btnCancel.onclick = ()=>{window.location.reload()}
    let countWin = 0
    let countLose = 0
    let round = 0
    

    const win = (youChoose, compChoose)=> (`Round ${round}, ${youChoose} vs. ${compChoose}, You’ve WON!`)
    const lose = (youChoose, compChoose) => (`Round ${round}, ${youChoose} vs. ${compChoose}, You’ve LOST!`)
    const drew = (youChoose, compChoose) => (`Round ${round}, ${youChoose} vs. ${compChoose}, You’ve Drew!`)
    
    btnRock.onclick = ()=>{
        const newP = document.createElement('p')
        rezult.append(newP)
         round++
            let youChoose = "Rock"
            randomComputer()
        if (compChoose === "Peper") {
            newP.append(lose(youChoose,compChoose))
            countLose++
            } 
        if (compChoose === "Scissors") {
            newP.append(win(youChoose, compChoose))
            countWin++
            } 
        if (compChoose === "Rock") {
            newP.append(drew(youChoose, compChoose))
            } 
        over(countWin, countLose)
        }

    btnPaper.onclick = ()=>{
        const newP = document.createElement('p')
        rezult.append(newP)
        round++
        let youChoose = "Peper"
        randomComputer()
        if (compChoose === "Scissors") {
            rezult.append(lose(youChoose,compChoose))
            countLose++
            } 
        if (compChoose === "Rock") {
            rezult.append(win(youChoose, compChoose))
            countWin++
            } 
        if (compChoose === "Peper") {
            rezult.append(drew(youChoose, compChoose))
            } 
        over(countWin, countLose)
        }

    btnScissors.onclick = ()=>{
        const newP = document.createElement('p')
        rezult.append(newP)
        round++
        let youChoose = "Scissors"
        randomComputer()
        if (compChoose === "Rock") {
            rezult.append(lose(youChoose,compChoose))
            countLose++
            } 
        if (compChoose === "Peper") {
            rezult.append(win(youChoose, compChoose))
            countWin++
            } 
        if (compChoose === "Scissors") {
            rezult.append(drew(youChoose, compChoose))
            } 
        over(countWin, countLose)
    }
    
}