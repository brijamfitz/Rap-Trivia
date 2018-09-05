$(document).ready(function () {
// GLOBAL VARIABLES
// ==========================================================================
// Game counters and timers
var timer = 60;
var intervalId;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

// Array of question objects that contain the question string, the array of answer options, and the correct answer string (from the answer options array)
var triviaQuestions = [
    { question: "Which rapper's government name is O'Shea Jackson?",
      choices: ['Snoop Dogg', 'Ice Cube', 'Eazy-E', 'Lil Wayne'],
      correctAnswer: 'Ice Cube',
    },
    { question: 'How many members were in the original Wu-Tang Clan lineup?',
      choices: ['4', '12', '7', '9'],
      correctAnswer: '9',
    },
    { question: 'What Las Vegas casino was Tupac Shakur leaving when he was shot and killed in 1996?',
      choices: ['Caesars Palace', 'Bellagio', 'MGM Grand', 'Mandalay Bay'],
      correctAnswer: 'MGM Grand',
    },
    { question: 'Which rapper is currently serving a life sentence for murder?',
      choices: ['C-Murder', 'Bizzy Bone', 'Meek Mill', 'Master P'],
      correctAnswer: 'C-Murder',
    },
    { question: 'What city is Kanye West from?',
      choices: ['New York', 'Miami', 'Detroit', 'Chicago'],
      correctAnswer: 'Chicago',
    }
];

// FUNCTIONS 
// ==========================================================================
// Start the countdown 
function startCountdown() {
    clearInterval(intervalId);

    // Set the interval to decrease the timer by one second
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timer--;
    var timerDiv = $('<h2>');
    timerDiv.attr('id', 'countdown');
    $('#title').append(timerDiv);
    $('#countdown').html('Time remaining: ' + timer + ' seconds');
    if (timer === 0) {
        stopCountdown();
        // displayResults();
    }
}

function stopCountdown() {
    clearInterval(intervalId);
    
    $('#game-start').hide();
    $('#game').hide();
}

function generateQuestions() {
    for (var i = 0; i < triviaQuestions.length; i++) {
        $('#game').append('<div>' + triviaQuestions[i].question + '</div>');               
        for (var j = 0; j < triviaQuestions[i].choices.length; j++) {
            $('#game').append('<p><input type="radio" name="question-' + i + '"value="' + triviaQuestions[i].choices[j] + '">' + ' ' + triviaQuestions[i].choices[j] + '</p>');
        }  
    }
    
    // Create Done button
    $('#game').append('<button id="done-button" type="submit">Done</button>');
}

function displayResults() {
    $('#done-button').on('click', function() {  
        
        $('#game-start').hide();
        $('#game').hide();

        for (var i = 0; i < triviaQuestions.length; i++) {
            var radioValue = $('input[name="question-' + i + '"]:checked').val();
            // var isNotChecked = ($('input').is(':not(:checked)'))
            if (radioValue === triviaQuestions[i].correctAnswer) {
                correct++; 
            }
            // else if (isNotChecked) {
            //     unanswered++;
            // }
            else {
                incorrect++;
            }
        }

        $('#results').append('<h1>Rap Trivia</h2>');
        $('#results').append('<h2>Results</h2>');
        $('#results').append('<p>Correct: ' + correct + '</p>');
        $('#results').append('<p>Incorrect: ' + incorrect + '</p>');
        // $('#results').append('<p>Unanswered: ' + unanswered + '</p>');
    })
}

// MAIN 
// ==========================================================================
// Game start screen with h1 and start button
$('#game-start').append('<h1 id="title">Rap Trivia</h2>');
$('#game-start').append('<button id="start-button">Start</button>');

// On-click event function to start the game
$('#start-button').on('click', function() {
    // Remove start button
    $('#start-button').remove();

    startCountdown();
    generateQuestions();
    displayResults();    
})
})