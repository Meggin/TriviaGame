
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
var questionID;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var section = "";
var timeNumber = 5
var timeIntervalID;

// Event listeners.
//____________________________________________________________________________________

// Fires when start button clicked.
function addStartClickListener() {
	$("#start").on("click", function() {
		console.log("Start button clicked");
		
		questionID = questionsArray[0];

		// Shows question page.
		showSection(questionPage);

		// Displays question and possible answers.
		displayQuestion();

		// Start question countdown.
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

// Displays question and list of possible answers in DOM.
function displayQuestion() {
	$("#question").html(questionID.question);

	// Displays question's possible answers.
	displayQuestionAnswers();
};

// Starts question timer.
//function startQuestionTimer() {
	//timeIntervalID = 30;
	//startTimer(timeIntervalID);
//}

// Starts timer on question page.
function startTimer() {
	timeIntervalID = setInterval(decrement, 1000);
};

// Decrements time on question page.
function decrement() {
	timeNumber--;

	//  Show time in time span.
     $(".time").html(timeNumber);

     // If time runs out, set question to unanswered.
     if (timeNumber === 0) {
     	setQuestionUnanswered();
     }
};

// Set question unanswered.
function setQuestionUnanswered() {
	showSection(answerPage);
	selectedAnswer = false;
	createAnswerSection(selectedAnswer);
};

// Stops timer.
function stopTimer() {
	clearInterval(timeIntervalID);
};

// Displays question's possible answers.
function displayQuestionAnswers() {

	// Creates new list of answers for question.
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


// Calls startTimer passing in answer countdown amount.
// When startTimer returns,
// If question ID ++ exists (so there's still more questions to ask),
// Call showSection for question section, passing in question ++ as question ID.
// else call showSection for results section passing in unanswered, answered, and incorrect.

// Displays content in answer section.
function createAnswerSection(selectedAnswer) {
	
	// Stops timer.
	stopTimer();

	// Get correct answer for question.
	var correctAnswer = questionID.correctAnswer;

	// Selected answer correct.
	if (correctAnswer === selectedAnswer) {
		
		// Update correct answers count.
		correctAnswers++;
		$("#answer-assessment").html("Correct!");
	
	// No answer selected.
	} else if (selectedAnswer === false) {
		// Update unanswered answers count.
		unanswered++;
		$("#answer-assessment").html("Out of Time!");

		// Display correct answer information.
		$("#correct-answer-info").html("The correct Answer was: " + correctAnswer);

	// Selected answer incorrect.
	} else {
		// Update incorrect answers count.
		incorrectAnswers++;
		$("#answer-assessment").html("Nope!");

		// Display correct answer information.
		$("#correct-answer-info").html("The correct Answer was: " + correctAnswer);
	}

	// Display question's video.
	displayVideo();

	setTimeout(answerTimeOut, 5000);

	// Show Trivia results.
	//showTriviaResults();
};

function answerTimeOut() {
	//showTriviaResults();
	var index = questionsArray.indexOf();

	if (index >= 0 && index  questionsArray.length - 1) {
		questionID = questionsArray[index + 1];
		goToNextQuestion();
	} else {
		showTriviaResults();
	}
}

// Display correct answer count in correct-answers span.
// Display incorrect answers count in incorrect-answers span.
// Display unanswered count in unanswered span.
function showTriviaResults() {
	showSection(resultsPage);
	$("#correct-answers").html(correctAnswers);
	$("#incorrect-answers").html(incorrectAnswers);
	$("#unanswered").html(unanswered);
}

// Displays video for correct answer.
function displayVideo() {
	var correctVideoLink = questionID.videoLink;
	console.log("value of src = " + correctVideoLink);
	$("#answer-media").attr("src", correctVideoLink);
};

function goToNextQuestion(){

	showSection(questionPage);

	// Empties out existing answers from previous question.
	$( ".answer-choices" ).empty();

	// Displays question and possible answers.
	displayQuestion();

	resetTimer();

}

function resetTimer() {
	timeNumber = 5;
	startTimer();
}

$(document).ready(function() {

	// Displays start page.
	showSection(startPage);

	// Listens for stark click event.
	addStartClickListener();
	
	// Listens for restart click event
	addRestartClickListener();

});