// Global Variables
// ==========================================================================
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
// ==========================================================================
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
        // Create unique value to apply to each question group
        var name = i + 1;
        
        for (var j = 0; j < triviaQuestions[i].choices.length; j++) {

            $('#game').append('<p><input type="radio" name="question-' + name + '"value="' + triviaQuestions[i].choices[j] + '">' + ' ' + triviaQuestions[i].choices[j] + '</p>');
        }  
    }
    
    // Create Done button
    $('#game').append('<button id="done-button">Done</button>');

    // Clear display when Done button is clicked
    $('#done-button').on('click', function() {  
        $('#game').empty();
        displayResults();
    })  
}

function checkResults () {

    $('input[type="radio"]').one('click', function() {
            var radioValueOne = $('input[name="question-1"]:checked').val();
            if (radioValueOne == triviaQuestions[0].correctAnswer) {
                console.log(radioValueOne);
                correct++;
            } else {
                incorrect++;
            }      
    })

    $('input[type="radio"]').one('click', function() {
            var radioValueTwo = $('input[name="question-2"]:checked').val();
            if (radioValueTwo == triviaQuestions[1].correctAnswer) {
                console.log(radioValueTwo);
                correct++;
            } else {
                incorrect++;
            }
    })

    $('input[type="radio"]').one('click', function() {
            var radioValueThree = $('input[name="question-3"]:checked').val();
            if (radioValueThree == triviaQuestions[2].correctAnswer) {
                console.log(radioValueThree);
                correct++;
            } else {
                incorrect++;
            }
    })

    $('input[type="radio"]').one('click', function() {
            var radioValueFour = $('input[name="question-4"]:checked').val();
            if (radioValueFour == triviaQuestions[3].correctAnswer) {
                console.log(radioValueFour);
                correct++;
            } else {
                incorrect++;
            }
    })

    $('input[type="radio"]').one('click', function() {
            var radioValueFive = $('input[name="question-5"]:checked').val();
            if (radioValueFive == triviaQuestions[4].correctAnswer) {
                console.log(radioValueFive);
                correct++;
            } else {
                incorrect++;
            }       
    })
}

function displayResults () {
    $('#game').append('<h1>Totally Trivial Trivia!</h2>');
    $('#game').append('<h2>Results:</h2>');
    $('#game').append('<p>Correct Answers: ' + correct + '</p>');
    $('#game').append('<p>Incorrect Answers: ' + incorrect + '</p>');
    $('#game').append('<p>Unanswered: ' + (triviaQuestions.length - (incorrect + correct)) + '</p>');
}

// MAIN 
// ==========================================================================
// Game start screen with h1 and start button
$('#game').append('<h1 id="title">Totally Trivial Trivia!</h2>');
$('#game').append('<button id="start-button">Start</button>');

// On-click event function to start the game
$('#start-button').on('click', function() {
    // Remove start button
    $('#start-button').remove();

    startCountdown();
    generateQuestions();
    checkResults();
    
});

$('#done-button').on('click', function() {  
    displayResults();
})
