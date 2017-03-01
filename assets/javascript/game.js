$(document).ready(function() {

	// Data
	// Create question object with each question containing an array of answers.
	// Each question also has a youtube video id.

	// Variables.
	// ranOutofTime boolean;
	// correctAnswer boolean;
	// unansweredQuestion boolean;
	// questionID;
	// answerID;
	// correctAnswers = 0;
	// incorrectAnswers = 0;
	// unanswered = 0;

	// Event listeners.

	// Implement event listener for start button:
	// Before calling showSection, set question ID to first question.
	// Calls showSection passing in question Section and question ID.

	// Implement event listener for click on answer:
	// Set question ID to question page ID.
	// Set answer ID to the selected answer.
	// Calls showSection passing in question ID and answer ID.

	// Implement event listener for restart button:
	// This is essentially the same as 'start' button at start of game.
	// But given ids are once-off, and maybe there are some differences,
	// So I've created this listener too.
	// Before calling showSection, set question ID to first question.
	// Calls showSection passing in question Section and question ID.

	// Functions.

	// Function: showSection
	// Shows active section and hides in-active sections.
	// Takes parameter sectionId and question ID. Might need to take in answerID,
	// And correctAnswers, incorrectAnswers, and unanswered too, if I can't keep the counts local.
	// Start section is the default active section. 
	// We don't have to do anything for it, other than make it active, as it displays everything in it,
	// and nothing else.
	// For question Section, call createQuestionSection, passing in questionID.
	// For answer Section, call createAnswerSection, passing in questionID and answerID.
	// For results Section, call createResultsSection, passing in correctAnswers, incorrectAnswers, unanswered.

	// Function: createQuestionSection
	// Calls displayQuestion passing in question object.
	// Calls startTimer passing in question countdown amount.
	// Calls displayTimer.
	// If startTimer returns true (which means timer reached zero),
	// Set answerID to null or something like that
	// And call showSection passing in answer Section with question ID and null answer value.

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

	// Function: displayQuestion
	// Takes parameter of question object.
	// Displays question in #question.
	// Displays list of answers for question in #answer-choices.

	// Function: startTimer
	// Takes in parameter of timer amount.
	// Starts timer countdown from this amount.
	// If time reaches zero,
	// return ranOutOfTime boolean to true.
	
	// Function: stopTimer
	// If ranOutofTime is true, or 
	// Displays stopped time value in the timer span on answer Section.

	// Function: isAnswerCorrect
	// Takes in answer as parameter.
	// Determines if answer is correct or not.
	// Returns a correctAnswer boolean result.
	// That boolean will get passed to answer Section.

	// Function: displayVideo
	// Takes in question ID and question's video ID as parameters.
	// Displays and automatically displays video in answer-media section.
});