// fast typing test, epikly made by myself

let test = {
    words: [
        // 2 letters
        'go',
        'ex',
        'be',
        'no',
        // 3 letters
        'fun',
        'luc',
        'ham',
        'dip',
        // 4 letters
        'tree',
        'cute',
        'lake',
        'ikea',
        // 5 letters
        'hanna',
        'crowd',
        'music',
        'bread',
        // 6 letters
        'potato',
        'sweden',
        'coffee',
        'cheese',
        // 7 letters
        'ability',
        'airport',
        'bullion',
        'cookies',
        // 8 letters
        'licorice',
        'cinnamon',
        'beverage',
        'handsome',
        // 9 letters
        'stockholm',
        'meatballs',
        'midsummer',
        'raspberry',
    ],

    generatedWords: [],

    generateWord() {
        this.generatedWords.push(this.words[Math.floor(Math.random() * this.words.length)])
    },

    analyzeKeyPress() {
        // compares what letter user press to current letter of current word
    },

    wrongLetter() {
        // if user types incorrectly, make current letter red
    },

    rightLetter() {
        // if user types correctly, make current letter blue
    },

    skipWord() {
        // user can skip a word by clicking the spacebar
    },

    startTimer() {
        // starting the 1 minute timer
    },

    stopTimer() {
        // stopping the 1 minute timer
    }
}
