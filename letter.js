var Letter = function (character) {
    this.character = character;
    this.isLetterGuessed = false;

    this.display = function () {
        if (this.character == ' ') {
            return (' ');
        }

        else if (this.isLetterGuessed) {
            return (this.character)
        }

        else if (this.character == "'") {
            return ("'")
        }

        else if (this.character == "-") {
            return ("-")
        }

        else if (this.isLetterGuessed === false) {
            return ("_");
        }
    }

    this.processLetter = function(guess) {
        if (this.letterChosen === this.correctLetter) {
            console.log("you guessed correctly!");
            this.wasThisLetterAlreadyGuessed = false;
            this.placeholderForLetter(this.letterChosen);
        } else {
            console.log("you guessed INCORRECTLY")
            this.wasThisLetterAlreadyGuessed = true;
            this.placeholderForLetter(guess);
          }
        };
    
           this.processLetter(guess);
    
    }
    

module.exports = Letter;