function generateRandNumber(){
    let  num =Math.floor(Math.random()*100)+1  
    // betweewn 1 and 100 (both inclusive)
console.log(num);
return num

}
let randNumber = generateRandNumber()

let inputGuess = document.querySelector('#guess')
let showMessageDiv = document.querySelector('.showMsg')
let guessesRem = document.querySelector('.guessesRem')
let prevGuesses = document.querySelector('.prevGuesses')
const submit = document.querySelector('#submit');
const start = document.querySelector('#start');
const newGame = document.querySelector('#newGame');

let game=false

start.addEventListener('click', () =>{
    inputGuess.disabled=false
    submit.disabled=false
    game=true
    start.disabled =true
    newGame.disabled=false
})


inputGuess.disabled=true
submit.disabled=true


// let inputGuess;
let attempts = 0;
let guessRem = 10;
let prevGuess=[]

newGame.addEventListener('click',()=>{
    randNumber = generateRandNumber()
     attempts = 0;
 guessRem = 10;
 prevGuess=[]
 guessesRem.innerHTML=`Guesses Remaining : 10`
 prevGuesses.innerHTML= `Prev Guesses : `
 showMessageDiv.innerHTML=''
 inputGuess.disabled=false
    submit.disabled=false
    game=true
    document.querySelector('#guess').value=''

})


console.log(submit);

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    let inputGuessValue = inputGuess.value
    console.log(inputGuessValue);

    validateGuess(inputGuessValue)

 
})

const validateGuess =(inputGuess)=>{
    console.log(Number(inputGuess));
    
    if(inputGuess==='' || isNaN(Number(inputGuess)) ){
        alert('Please enter a valid Number')
    }
    else if( (Number(inputGuess) <1) ||  (Number(inputGuess)>100)){
        alert('Please enter  Number b/w 1 and 100')
    }
    else{
        processGuess( Number(inputGuess))
    }

}

function processGuess(inputGuess){
    attempts++
    guessRem--
    checkGuess(inputGuess)
    prevGuess.push(inputGuess)
    prevGuesses.innerHTML+= `${inputGuess}, `
    guessesRem.innerHTML=`Guesses Remaining : ${guessRem}`
    if(inputGuess!==randNumber){
        
        document.querySelector('#guess').value=''
    }
    isGameOver()

}

const checkGuess =function(inputGuess){
    if(inputGuess===randNumber){
        showMessage(`Congratulations! You have guessed the number ${randNumber} in ${attempts} attempts!`)
        document.querySelector('#guess').disabled=true
        submit.disabled =true
    }
    else if(inputGuess<randNumber){
        showMessage(`Your Number is too low! Try again`)
    }
    else if(inputGuess>randNumber){
        showMessage(`Your Number is too high! Try again`)
    }
    else{
        alert(`Something went wrong`)
    }

}

const isGameOver=()=>{
    if(game && (attempts>10 || guessRem <1 )){
        showMessage(`Game Over!`)
        inputGuess.setAttribute('disabled','')
        submit.disabled =true
    }
}

const showMessage=(text)=>{
    showMessageDiv.innerHTML = `${text}`

}
