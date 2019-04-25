const Letter = require("./letter.js");

//CONSTRUCTOR for a WORD object
function Word(){
    this.letters = [], //array of letter objects
    this.cleared = false, //whether the word has been fully guessed
    
    //METHOD to LOAD WORD takes a string
    this.load = function(word){
        //make a letter object for each letter in the string
        for (var i = 0; i < word.length; i++){
            this.letters.push(new Letter(word[i]));//push to the array
        };
    },
   
    //METHOD to SHOW WORD as underscores/letters
    this.update = function(){
        var display = "";//clear display
        //Call the show method of each letter
        for (var i = 0; i < this.letters.length; i ++){
            display += this.letters[i].show() + " ";
        }
        //if the display word no longer has underscores, user cleared the word
        if(display.indexOf("_") === -1){
            this.cleared = true;
        }
        console.log(display);
        return display;
    },
    
    //METHOD to CHECK GUESS takes single str character
    this.check = function(char){
        var correct = false;
        for (var i = 0; i < this.letters.length; i ++){
            var guessCheck = this.letters[i].check(char); //save the returned value as a variable
            if(guessCheck){
                correct = true;
            }
        }
        return correct; //return so main game logic can see
               
    };
}

module.exports = Word;