//event listener 
window.onload = function () {
    var letters = document.getElementById("letters").children
    for (letter of letters) {
    letter.addEventListener("click", function(e){ 
        e.target.disabled = 'true'
        play(this.innerText)
        
    })
  }
}
//words
var words = ['deadpool', 'HULK', 'nova', 'rocket', 'groot', 'batman', 'hawkeye', 'starlord', 'spiderman', 'mysterio', 'redskull', 'galactus', 'captainamerica', 'wintersoldier', 'carnage', 'venom', 'hydroman']
//categories
var categories = ['marvel','DC',]

var random = Math.random()
var word = words[Math.floor(random * words.length)]
var hint = categories[Math.floor(random * words.length)]
//Answer array
var answerArray = []
//Replace letter 
for (let i = 0; i < word.length; i++){
    answerArray[i] = "_"
}
//Get elements
function id(str){
    return document.getElementById(str)
}
//Keys press
function words() {
    var words = document.getElementById("");
  }

var guessWord = id('guessWord')
var category = id('category')
var winLose = id('winNumber')
var triesLeft = id('guessed')

guessWord.innerHTML = answerArray.join(" ")
category.innerHTML = "<strong>Category:</strong><br>" + hint

var remainingLetters = word.length

var maxTries = 10

triesLeft.innerHTML = "<strong>Tries Left:</strong><br>" + maxTries
function play(letter){
    let found = false   
    
    if (remainingLetters > 0) {
        
        guessWord.innerTextHTML = answerArray
        
        var guess = letter
        for (let j = 0; j < word.length; j++){
            if (word[j] === guess){
                answerArray[j] = guess
                remainingLetters--
                found = true
            }
            // *WIN*
            if (remainingLetters === 0) {
                winLose.innerHTML = "DING DING ZING CORRECT"
                setTimeout(function(){
                    window.location.reload()
                }, 2000)
            }
        }
    }
    //Decrease 
    if (!found){
        maxTries--
    }
    // *LOSE* 
    if (maxTries === 0) {
        winLose.innerHTML = "GAMEOVER! TRY AGAIN 10 9 8 7"
        setTimeout(function(){
                    window.location.reload()
                }, 2000)
    }
    triesLeft.innerHTML = "<strong>Tries Left:</strong><br>" + maxTries
    guessWord.innerHTML = answerArray.join(" ")
}
