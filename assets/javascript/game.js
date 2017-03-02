
// Data
//_____________________________________________________________________________________
// The questions object contains question objects.
// Each question object has a question, array of answers, correct answer, and video ID.
var questions = {
	q1 : {
		question: "Testing question 1",
		answers: ["Testing answer 1.1", "Testing answer 1.2", "Testing answer 1.3"],
		correctAnswer: "Testing answer 1.1",
		videoLink: "https://www.youtube.com/embed/-gOMfsWefVA?list=PLysEUMhoon6cA16AhpYW96KvlRgEXBUE9"
	},
	q2 : {
		question: "Testing question 2",
		answers: ["Testing answer 2.1", "Testing answer 2.2", "Testing answer 2.3"],
		correctAnswer: "Testing answer 2.1",
		videoLink: "https://www.youtube.com/embed/-gOMfsWefVA?list=PLysEUMhoon6cA16AhpYW96KvlRgEXBUE9"
	},
	q3 : {
		question: "Testing question 3",
		answers: ["Testing answer 3.1", "Testing answer 3.2", "Testing answer 3.3"],
		correctAnswer: "Testing answer 3.1",
		videoLink: "https://www.youtube.com/embed/-gOMfsWefVA?list=PLysEUMhoon6cA16AhpYW96KvlRgEXBUE9"
	},
	q4 : {
		question: "Testing question 4",
		answers: ["Testing answer 4.1", "Testing answer 4.2", "Testing answer 4.3"],
		correctAnswer: "Testing answer 4.1",
		videoLink: "https://www.youtube.com/embed/-gOMfsWefVA?list=PLysEUMhoon6cA16AhpYW96KvlRgEXBUE9"
	},
	q5 : {
		question: "Testing question 5",
		answers: ["Testing answer 5.1", "Testing answer 5.2", "Testing answer 5.3"],
		correctAnswer: "Testing answer 5.1",
		videoLink: "https://www.youtube.com/embed/-gOMfsWefVA?list=PLysEUMhoon6cA16AhpYW96KvlRgEXBUE9"
	}
};

// Creates array of questions for questions object.
var questionsArray = [questions.q1, questions.q2, questions.q3, questions.q4, questions.q5];

// Control which page is displayed.
var startPage = $("#start-page");
var questionPage = $("#question-page");
var answerPage = $("#answer-page");
var resultsPage = $("#results-page");

// More global variables.
//____________________________________________________________________________________
var ranOutofTime = false;
var questionID;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var section = "";
var timeNumber = 30;
var timeIntervalID;

// Event listeners.
//____________________________________________________________________________________

// Fires when start button clicked.
function addStartClickListener() {
	$("#start").on("click", function() {
		console.log("Start button clicked");
		
		// Shows question page.
		showSection(questionPage);

		// Populates question section.
		createQuestionSection();

		startTimer();
	});
};

// Fires when answer list item selected.
function addAnswerClickListener() {
	$("li").on("click", function() {
		selectedAnswer = $(this).html();
		console.log("Selected Answer is " + selectedAnswer);
		showSection(answerPage);
		createAnswerSection(selectedAnswer);
	});
};

// Fires when start over? button clicked.
function addRestartClickListener() {
	$("#restart").on("click", function() {
		console.log("Start Over? button clicked");

		// Reset questionID to first question.
		questionID = questionsArray[0];
		showSection(startPage);
	});
};

// Functions
//_____________________________________________________________________________________

// Displays active page.
function showSection(section) {
	startPage.css({'display' : 'none'});
	questionPage.css({'display' : 'none'});
	answerPage.css({'display' : 'none'});
	resultsPage.css({'display' : 'none'});

	if (section) {
		section.css({'display' : 'block'});
	}
};

// Calls startTimer passing in question countdown amount.
// Calls displayTimer.
// If startTimer returns true (which means timer reached zero),
// Set answerID to null or something like that
// And call showSection passing in answer Section with question ID and null answer value.
// Displays content in question section
function createQuestionSection() {
	//startTimer(30);
	displayQuestion();
};

// Displays question in #question.
// Displays list of answers for question in #answer-choices.
function displayQuestion() {
	questionID = questionsArray[0];
	console.log(questionID);
	$("#question").html(questionID.question);

	// Displays question's possible answers.
	displayQuestionAnswers();
};

function startTimer() {
	timeIntervalID = setInterval(decrement, 1000);
	console.log("Time interval is getting set to: " + timeIntervalID);
};

function decrement() {
	timeNumber--;

	//  Show time in time span.
     $("#time").html(timeNumber);
};

// Function: startTimer
// Takes in parameter of timer amount.
// Starts timer countdown from this amount.
// If time reaches zero,
// return ranOutOfTime boolean to true.
/*function startTimer(){
	var timer = setInterval(decrement, 1000);
};

//  The decrement function.
function decrement(timeLeft) {

	var timeLeft = 30;
	//  Decrease time left by 1.
	timeLeft--;

	//  Show time left in the #time tag.
	$("#time").html(timeLeft);


	//  Once time left hits zero...
	if (timeLeft === 0) {

	//  ...run the stop function.
	//stop();
	console.log("Time is out.");
};
*/

// Displays question's possible answers.
function displayQuestionAnswers() {
	for (var i = 0; i < questionID.answers.length; i++) {

		// Create answer option list item.
		var answerOption = $("<li>");

		// List item selectable.
		answerOption.addClass("ui-widget-content");

		// Set answer option text to answer in questions array.
		answerOption.html(questionID.answers[i]);

		// Append answer option to the list of answer choices.
		answerOption.appendTo(".answer-choices");
	}
	// Listens for answer click event.
	addAnswerClickListener();
};


// Function: createAnswerSection
// Call stopTimer.
// If unanswered (answer is null or unanswered true),
// unanswered++,
// Display in answer-assessment the time ran out message.
// Display correct answer info.
// Calls startTimer passing in answer countdown amount.
// When startTimer returns,
// If question ID ++ exists (so there's still more questions to ask),
// Call showSection for question section, passing in question ++ as question ID.
// else call showSection for results section passing in unanswered, answered, and incorrect.

// Displays content in answer section.
function createAnswerSection(selectedAnswer) {
	var correctAnswer = questionID.correctAnswer;

	// Selected answer correct answer.
	if (correctAnswer === selectedAnswer) {
		
		// Update correct answers count.
		correctAnswers++;
		$("#answer-assessment").html("Correct!");
	
	// Selected answer incorrect answer.
	} else {
		
		// Update incorrect answers count.
		incorrectAnswers++;
		$("#answer-assessment").html("Nope!");

		// Display correct answer information.
		$("#correct-answer-info").html(correctAnswer);
	}
	displayVideo();
};

// Function: createResultsSection
// Call stopTimer.
// Display correct answer count in correct-answers span.
// Display incorrect answers count in incorrect-answers span.
// Display unanswered count in unanswered span.


// Function: stopTimer
// If ranOutofTime is true, or 
// Displays stopped time value in the timer span on answer Section.


// Displays video for correct answer.
function displayVideo() {
	var correctVideoLink = questionID.videoLink;
	console.log("value of src = " + correctVideoLink);
	$("#answer-media").attr("src", correctVideoLink);
};


$(document).ready(function() {
	console.log(questionsArray[0]);
	
	// Displays start page.
	showSection(startPage);

	// Listens for stark click event.
	addStartClickListener();
	
	// Listens for restart click event
	addRestartClickListener();

});