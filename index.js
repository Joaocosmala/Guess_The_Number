let computerNumber
let userNumbers = []
let attempts = 0

function init(){
    computerNumber = Math.floor(Math.random() * 100 + 1)
    console.log(computerNumber)
}

function compareNumber(){
   const userNumber = Number(document.getElementById('inputBox').value)
   userNumbers.push(' ' + userNumber)
   document.getElementById('guesses').innerHTML = userNumbers

   if(userNumber > computerNumber){
    document.getElementById('textOutput').innerHTML = "Seu número é muito alto"
    document.getElementById('inputinbox').value = ''
    attempts++
    document.getElementById('attempts').innerHTML = attempts
   }
   else if (userNumber < computerNumber){
    document.getElementById('textOutput').innerHTML = "Seu número é muito baixo"
    document.getElementById('inputinbox').value = ''
    attempts++
    document.getElementById('attempts').innerHTML = attempts
   }
   else{
    document.getElementById('textOutput').innerHTML = "Parabéns, você ACERTOU!!"
    attempts++
    document.getElementById('attempts').innerHTML = attempts
   }
}