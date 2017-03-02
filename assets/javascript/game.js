
// Data
//_____________________________________________________________________________________
// Create array of questions.
// Each question is an object with a question, array of answers, and correct answer.
// Each question also has a youtube video id.

var questions = {
	q1 : {
		question: "Testing question 1",
		answers: ["Testing answer 1.1", "Testing answer 1.2", "Testing answer 1.3"],
		correctAnswer: "questions.q1.answers[0]",
		src: "https://www.youtube.com/embed/-gOMfsWefVA?list=PLysEUMhoon6cA16AhpYW96KvlRgEXBUE9"
	},
	q2 : {
		question: "Testing question 2",
		answers: ["Testing answer 2.1", "Testing answer 2.2", "Testing answer 2.3"],
		correctAnswer: "questions.q2.answers[0]",
		src: "https://www.youtube.com/embed/-gOMfsWefVA?list=PLysEUMhoon6cA16AhpYW96KvlRgEXBUE9"
	},
	q3 : {
		question: "Testing question 3",
		answers: ["Testing answer 3.1", "Testing answer 3.2", "Testing answer 3.3"],
		correctAnswer: "questions.q3.answers[0]",
		src: "https://www.youtube.com/embed/-gOMfsWefVA?list=PLysEUMhoon6cA16AhpYW96KvlRgEXBUE9"
	},
	q4 : {
		question: "Testing question 4",
		answers: ["Testing answer 4.1", "Testing answer 4.2", "Testing answer 4.3"],
		correctAnswer: "questions.q4.answers[0]",
		src: "https://www.youtube.com/embed/-gOMfsWefVA?list=PLysEUMhoon6cA16AhpYW96KvlRgEXBUE9"
	},
	q5 : {
		question: "Testing question 5",
		answers: ["Testing answer 5.1", "Testing answer 5.2", "Testing answer 5.3"],
		correctAnswer: "questions.q5.answers[0]",
		src: "https://www.youtube.com/embed/-gOMfsWefVA?list=PLysEUMhoon6cA16AhpYW96KvlRgEXBUE9"
	}
};


var questionsArray = [questions.q1, questions.q2, questions.q3, questions.q4, questions.q5];

// Control which page is displayed.
var startPage = $("#start-page");
var questionPage = $("#question-page");
var answerPage = $("#answer-page");
var resultsPage = $("#results-page");

// Variables.
//____________________________________________________________________________________
var ranOutofTime = false;
var questionID;
// answerID;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var section = "";

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
	});
};

// Fires when answer list item selected.
function addAnswerClickListener() {
	$("li").on("click", function() {
		console.log("Answer list item clicked");
		showSection(answerPage);
		// Set question ID to question page ID.
		// Set answer ID to the selected answer.
		// Calls showSection passing in question ID and answer ID.
	});
};

// Fires when start over? button clicked.
function addRestartClickListener() {
	$("#restart").on("click", function() {
		console.log("Start Over? button clicked");
		showSection(startPage);
		// This is essentially the same as 'start' button at start of game.
		// But given ids are once-off, and maybe there are some differences,
		// So I've created this listener too.
		// Before calling showSection, set question ID to first question.
		// Calls showSection passing in question Section and question ID.
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
	displayQuestion();
}

// Displays question in #question.
// Displays list of answers for question in #answer-choices.
function displayQuestion() {
	questionID = questionsArray[0];
	console.log(questionID);
	$("#question").html(questionID.question);

	// Displays question's possible answers.
	displayQuestionAnswers();
}

// Displays question's possible answers.
function displayQuestionAnswers() {
	for (var i = 0; i < questionID.answers.length; i++) {

		// Create answer option list item.
		var answerOption = $("<li>");

		// List item selectable.
		answerOption.addClass("ui-widget-content");

		// Set answer option text to answer in questions array.
		answerOption.text(questionID.answers[i]);

		// Append answer option to the list of answer choices.
		answerOption.appendTo(".answer-choices");

		// Listens for answer click event.
		addAnswerClickListener();
	}
}


// Function: createAnswerSection
// Call stopTimer.
// If answer is correct,
// correctAnsers++
// Display answer correct message in answer-assessment.
// Don't display correct answer info.
// Else if answer not correct,
// incorrectAnswers++,
// Display answer wrong message in answer-assessment.
// Display correct answer info.
// else answer is null (or unanswered)
// unanswered++,
// Display in answer-assessment the time ran out message.
// Display correct answer info.
// For all answer results, call displayVideo with question ID video ID.
// Calls startTimer passing in answer countdown amount.
// When startTimer returns,
// If question ID ++ exists (so there's still more questions to ask),
// Call showSection for question section, passing in question ++ as question ID.
// else call showSection for results section passing in unanswered, answered, and incorrect.
// I might need to set these values here, to make sure they pass accordingly.
// It may be a little tricky to save values for these variables as questions get answered.

// Function: createResultsSection
// Call stopTimer.
// Display correct answer count in correct-answers span.
// Display incorrect answers count in incorrect-answers span.
// Display unanswered count in unanswered span.

// Function: startTimer
// Takes in parameter of timer amount.
// Starts timer countdown from this amount.
// If time reaches zero,
// return ranOutOfTime boolean to true.

// Function: stopTimer
// If ranOutofTime is true, or 
// Displays stopped time value in the timer span on answer Section.

// Function: displayVideo
// Takes in question ID and question's video ID as parameters.
// Displays and automatically displays video in answer-media section.

$(document).ready(function() {
	console.log(questionsArray[0]);
	
	// Displays start page.
	showSection(startPage);

	// Listens for stark click event.
	addStartClickListener();
	
	// Listens for restart click event
	addRestartClickListener();

});