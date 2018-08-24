// Trivia Game Pseudocode
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

// GLOBAL VARIABLES
// =================================================================
//  Variable that will hold our setInterval that runs the stopwatch
var startTimer = 99;
var intervalId;
var clockRunning = false;


// MAIN GAME FUNCTION
// =================================================================
window.onload = function() {


function startClock() {
    intervalidId = setInterval(decrement, 1000)

}

function decrement() {
    startTimer--;
    $("#timer").html(startTimer);

    if (startTimer === 0) {
        stopTimer();
    }
}

function stopTimer() {

    clearInterval(intervalId);

}

startClock();

}