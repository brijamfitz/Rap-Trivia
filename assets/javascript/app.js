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

// FUNCTIONS 
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
        displayResults();
    }
}

function stopCountdown () {
    clearInterval(intervalId);
}

function generateQuestions () {
    for (var i = 0; i < triviaQuestions.length; i++) {
        $('#game').append('<div>' + triviaQuestions[i].question + '</div>');               
        for (var j = 0; j < triviaQuestions[i].choices.length; j++) {
            $('#game').append('<p><input type="radio" name="question-' + i + '"value="' + triviaQuestions[i].choices[j] + '">' + ' ' + triviaQuestions[i].choices[j] + '</p>');
        }  
    }
    
    // Create Done button
    $('#game').append('<button id="done-button" type="submit">Done</button>');

}

function displayResults () {
    $('#done-button').on('click', function() {  
        // $('#game').empty();

        var radioValueZero = $('input[name="question-0"]:checked').val();
        console.log(radioValueZero);
        if (radioValueZero === triviaQuestions[0].correctAnswer) {
            correct++;
        }
        else {
            incorrect++;
        }

        var radioValueOne = $('input[name="question-1"]:checked').val();
        console.log(radioValueOne);
        if (radioValueOne === triviaQuestions[1].correctAnswer) {
            correct++;
        }
        else {
            incorrect++;
        }

        var radioValueTwo = $('input[name="question-2"]:checked').val();
        console.log(radioValueTwo);
        if (radioValueTwo === triviaQuestions[2].correctAnswer) {
            correct++;
        }
        else {
            incorrect++;
        }

        var radioValueThree = $('input[name="question-3"]:checked').val();
        console.log(radioValueThree);
        if (radioValueThree === triviaQuestions[3].correctAnswer) {
            correct++;
        }
        else {
            incorrect++;
        }

        var radioValueFour = $('input[name="question-4"]:checked').val();
        console.log(radioValueFour);
        if (radioValueFour === triviaQuestions[4].correctAnswer) {
            correct++;
        }
        else {
            incorrect++;
        }

        $('#game').append('<h1>Totally Trivial Trivia!</h2>');
        $('#game').append('<h2>Results:</h2>');
        $('#game').append('<p>Correct Answers: ' + correct + '</p>');
        $('#game').append('<p>Incorrect Answers: ' + incorrect + '</p>');
        // $('#game').append('<p>Unanswered: ' + (triviaQuestions.length - (incorrect + correct)) + '</p>');
})
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
    displayResults();
    
});


