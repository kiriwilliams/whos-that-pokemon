//CONSTRUCTOR to make a LETTER object
function Letter(char){
    this.letter = char,
    this.guessed = false,
    
    //METHOD to SHOW LETTER
    this.show = function(){
        if(this.guessed){
            //reveal letter
            return this.letter;
        }
        else{
            //show underscore
            return "_";
        }
    },
    //METHOD to CHECL GUESS takes single str character
    this.check = function(guess){
        var guess = guess;
        var correct = false; //assume the guess is incorrect
        //set guessed to true if guess matches letter
        if (this.letter == guess){
            this.guessed = true;
            console.log(true);
            correct = true; //variable that isn't tied to a letter object

        }
        return correct;//return so the parent word object can see it
    }
}

//EXPORT LETTER OBJ
module.exports = Letter;