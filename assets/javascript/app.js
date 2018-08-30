// Global Variables
// =================================================================
// Game counters and timers
var timer = 60;
var intervalId;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

// Array of question objects that contain the question string, the array of answer options, and the correct answer string (from the answer options array)
var triviaQuestions = [

    { question: 'Placeholder question 1',
      choices: ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4'],
      correctAnswer: 'Choice 1',
    },

    { question: 'Placeholder question 2',
      choices: ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4'],
      correctAnswer: 'Choice 1',
    },

    { question: 'Placeholder question 3',
      choices: ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4'],
      correctAnswer: 'Choice 1',
    },

    { question: 'Placeholder question 4',
      choices: ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4'],
      correctAnswer: 'Choice 1'
    },

    { question: 'Placeholder question 5',
      choices: ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4'],
      correctAnswer: 'Choice 1',
    }

];


// Functions 
// =================================================================
// Start the countdown 
function startCountdown () {
    clearInterval(intervalId);

    // Set the interval to decrease the timer by one second
    intervalId = setInterval(decrement, 1000);
}

function decrement () {
    timer--;
    var timerDiv = $('<div>');
    timerDiv.attr('id', 'countdown');
    $('#title').append(timerDiv);
    $('#countdown').html('Time remaining: ' + timer + ' seconds');
    if (timer === 0) {
        stopCountdown();
    }
}

function stopCountdown () {
    clearInterval(intervalId);
}

function generateQuestions () {
    for (var i = 0; i < triviaQuestions.length; i++) {
        $('#game').append('<div>' + triviaQuestions[i].question + '</div>');
        // Create name value to apply to each question group
        var name = "question-" + (i + 1);
        
        for (var j = 0; j < triviaQuestions[i].choices.length; j++) {
            //Create unique value for each choice in a question group
            var value = (j + 1);

            $('#game').append('<p><input id="choices" type="radio" name="' + name + '" value="' + value + '">' + ' ' + triviaQuestions[i].choices[j] + '</input></p>');           
        }  

        // Above, use JQuery `.attr` to add input value `.attr('value', choices[i])`
        
        // Testing & Debugging
        console.log(triviaQuestions[i].question);
        console.log(triviaQuestions[i].choices);
    }

    // Create Done button
    $('#game').append('<button id="done-button">Done</button>');

    // Clear display when Done button is clicked
    $('#done-button').on('click', function() {  
        $('#game').empty();
        displayResults();
    })
    
}

function displayResults () {
    $('#game').append('<h1>Hello</h1>');

    // If / else statements to check if the input value matches the correctAnswer string

    // if: Update correct counter if true

    // else if: Update incorrect counter if false

    // else: Update unanswered counter if neither above conditions are met
    
}



// Main Game Logic
// =================================================================
// Game start screen with h1 and start button
$('#game').append('<h1 id="title">Totally Trivial Trivia!</h2>');
$('#game').append('<button id="start-button">Start</button>');

// On-click event function to start the game
$('#start-button').on('click', function() {
    // Remove start button
    $('#start-button').remove();

    startCountdown();
    generateQuestions();
    
});

$('#done-button').on('click', function() {  
    displayResults();
})

// TRIVIA GAME PSEUDO
// =================================================================

// Create Start Game screen
    // Title
    // Start button
        // Launches Game screen

// Create Game screen
    // Title
    // Time Remaining - use setTimeOut function to immediately start countdown at 1 second increments - starting at 30 seconds

    // Series of 5 multiple choice questions with checkbox options to select correct answer below each question

    // User can only select one box next to answers until either timer reaches 0 or they click Done button

    // Store user answers in array

        // Check if answer is correct (if) and push to correct array

        // Check is answer is incorrect (else if) and push to incorrect array

        // Push any unanswered questions to unanswered array

    // Once timer reaches 00:00 or Done button is clicked - new screen displays the results (correct, incorrect, unanswered)

    // Create Done button
        // Launces Results screen

// Create Results screen
    // Extract the information from the respective correct, incorrect, unanswered arrays and push them to the correct results 

    // Display reults

    // Play again button (reset game function)

// =================================================================

// Create a start game function

// Create a done function

// Create a countdown function

// When player clicks Start button, need to execute start game function

// When player clicks Done button, need to execute done function