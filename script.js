var flashcards = [
    {
        Question: "What television show..........",
        Answer: "Big Bang Theory",
        cardImage: "images/binge-watching.jpg"
    },
    {
        Question: "What is the name of the huge movie and television streaming service that essentially put Blockbuster (if anybody remembers what that is) out of business in 2011. It was bought by Dish, who still has a few Blockbuster brick and mortar locations open",
        Answer: "Netflix",
        cardImage: "[saved in project folder]"
    },
    {
        Question: "What Netflix show – its first original series – has recently had a dramatic character and story line shakeup due to the personal life of one of the main actors?",
        Answer: "House of Cards",
        cardImage: "[saved in project folder]"
    },
    {
        Question: "What popular Hulu original show is based on the classic novel by Margaret Atwood and is the story of life in a totalitarian society in what was formerly the United States?",
        Answer: "The Handmaids Tale",
        cardImage: "[saved in project folder]"
    },
    {
        Question: "What extremely [popular] NBC show includes flashbacks [as a way to tell the story] in every episode and is known for giving viewers “all the feels”?",
        Answer: "This is Us",
        cardImage: "[saved in project folder]"
    },
    {
        Question: "What HBO show that premiered in 2017, features James Franco acting as his own twin and Method Man playing a pimp?",
        Answer: "The Deuce",
        cardImage: "[saved in project folder]"
    },
    {
        Question: "What is the name of the hit HBO show created and co-written by Youtube show creator and star of “The Misadventures of Awkward Black Girl”, Issa Rae? (This new show is a partially based on the above mentioned youtube series)",
        Answer: "Insecure",
        cardImage: "[saved in project folder]"
    },
    {
        Question: "What well-known HBO show – that is an adaptation of George R.R. Martin's fantasy novels – became so popular after its 6th season, that many new viewers began watching the show in its 7th season, without bothering to try and catch up?",
        Answer: "Game of Thrones",
        cardImage: "[saved in project folder]"
    }
    ];
// Example for array ^^ used from WDI pre-work Matching Game



var question1Answer = "Big Bang Theory"
// The required answer for 'question1' to be correct
var card1StartButton = document.querySelectorAll('button')[0]
card1StartButton.addEventListener('click', function () {
    
    let answer = document.querySelector('#answer-compilation').value
        console.log(answer)
    if (answer === "Big Bang Theory") {
        console.log("Correct! [BBT catch phrase]")
         alert("Correct! Move on to card #2")
    } else {
        console.log("Wrong!")
        alert("Wrong. Try again!")
    }
})



var question2Answer = "Netflix"
// The required answer for 'question ' to be correct
var card2Button = document.querySelectorAll('button')[1]
card2Button.addEventListener('click', function () {
   
    let answer = document.querySelector('#answer-blockbuster').value
        console.log(answer)
})

var question3Answer = "House of Cards"
// The required answer for 'question ' to be correct
var card3Button = document.querySelectorAll('button')[2]
card3Button.addEventListener('click', function () {
   
    let answer = document.querySelector('#answer-whitehouse').value
        console.log(answer)
})

var question4Answer = "The Handmaids Tale"
// The required answer for 'question ' to be correct
var card4Button = document.querySelectorAll('button')[3]
card4Button.addEventListener('click', function () {
   
    let answer = document.querySelector('#answer-hulu').value
        console.log(answer)
})

var question5Answer = "This is Us"
// The required answer for 'question ' to be correct
var card5Button = document.querySelectorAll('button')[4]
card5Button.addEventListener('click', function () {
    
    let answer = document.querySelector('#answer-tissues').value
        console.log(answer)
})

var question6Answer = "The Deuce"
// The required answer for 'question ' to be correct
var card6Button = document.querySelectorAll('button')[5]
card6Button.addEventListener('click', function () {
    
    let answer = document.querySelector('#answer-twins').value
        console.log(answer)
})

var question7Answer = "Insecure"
// The required answer for 'question ' to be correct
var card7Button = document.querySelectorAll('button')[6]
card7Button.addEventListener('click', function () {
    
    let answer = document.querySelector('#answer-issa').value
        console.log(answer)
})

var question8Answer = "Game of Thrones"
// The required answer for 'question ' to be correct
var card8Button = document.querySelectorAll('button')[7]
card8Button.addEventListener('click', function () {
    
    let answer = document.querySelector('#answer-iron').value
        console.log(answer)
})
// The card 1 - which is itself a button - button is clicked on to reveal the first question


// The game begins on a landing page with the title "The Golden Age of Television", the picture of the front of the first flashcard (compilation of show [pictures]) and the word "Start"

// Upon 'click'ing the 'Start' button (located on/within 'Card1), 'Card1' will flip over to reveal 'question1' - ""

// The user will enter their answer into [the text input box]
    // How to create a text input box

// If the answer is correct, an [alert] will pop up saying "Correct, now click on the NEXT flashcard" 
// Correct answers include [both capitalized and uncapitalized, ]

    // The acceptable answers for question1 include:
        // "The Big Bang Theory" 
        // "Big Bang Theory"
        // "big bang theory"
        // "TBBT"
        // "tbbt"
    // The acceptable answers for question2
        // "Netflix"
        // "netflix"
    // The acceptable answers for question3
        // "House of Cards"
        // "house of cards"
        // "HOC"
    // The acceptable answers for question4
        // "The Handmaid's Tale"
        // "Handmaid's Tale"
        // "the handmaid's tale"
        // "handmaid's tale"
        // "The Handmaids Tale"
        // "Handmaids Tale"
        // "handmaid tale"
    // The acceptable answers for question5
        // "This Is Us"
        // "this is us"
        // "This is us"
    // The acceptable answers for question6
        // "The Deuce"
        // "the deuce"
        // "Deuce"
        // "deuce"
    // The acceptable answers for question7
        // "Insecure"
        // "insecure"
    // The acceptable answers for question8
        // "Game of Thrones"
        // "The Game of Thrones"
        // "game of thrones"
        // "the game of thrones"
        // "GOT"

// If 'question1-question8' are incorrect, an [alert] will say "Wrong, try again", then disappear - reshowing the failed question

// If the answer to any of 'question1'-'question8' is not correct, prevent it from allowing the next sequence to continue



// This variable value that should go onto the back-side of the first card
