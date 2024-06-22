function difficultQuestion() {
  // Retrieve the participants data from localStorage and parse it
  let participants = JSON.parse(localStorage.getItem('participants'));

  // Objects to count wrong answers for level 1 and level 2 questions
  let questionWrongCountsLevel1 = {};
  let questionWrongCountsLevel2 = {};

  // Iterate over each participant
  for (let participantId in participants) {
    let participant = participants[participantId];

    // Only consider participants at level 1 or 2
    if (participant.level == 1 || participant.level == 2) {
      let questions = participant.questions;

      // Iterate over each question answered by the participant
      for (let questionId in questions) {
        let questionData = questions[questionId];

        // Count wrong answers for level 1 participants
        if (participant.level == 1 && questionData.correct == false) {
          if (!questionWrongCountsLevel1[questionId]) {
            questionWrongCountsLevel1[questionId] = 0;
          }
          questionWrongCountsLevel1[questionId]++;
        }

        // Count wrong answers for level 2 participants
        if (participant.level == 2 && questionData.correct == false) {
          if (!questionWrongCountsLevel2[questionId]) {
            questionWrongCountsLevel2[questionId] = 0;
          }
          questionWrongCountsLevel2[questionId]++;
        }
      }
    }
  }

  // Variables to track the most wrong question ID and count for level 1
  let mostWrongQuestionIdLevel1 = null;
  let maxWrongCountLevel1 = 0;

  // Determine the most wrong question for level 1
  for (let questionId in questionWrongCountsLevel1) {
    if (questionWrongCountsLevel1[questionId] > maxWrongCountLevel1) {
      maxWrongCountLevel1 = questionWrongCountsLevel1[questionId];
      mostWrongQuestionIdLevel1 = questionId;
    }
  }

  // Variables to track the most wrong question ID and count for level 2
  let mostWrongQuestionIdLevel2 = null;
  let maxWrongCountLevel2 = 0;

  // Determine the most wrong question for level 2
  for (let questionId in questionWrongCountsLevel2) {
    if (questionWrongCountsLevel2[questionId] > maxWrongCountLevel2) {
      maxWrongCountLevel2 = questionWrongCountsLevel2[questionId];
      mostWrongQuestionIdLevel2 = questionId;
    }
  }

  // Log the results
  console.log(
    'This function returns the %cmost frequently wrong question%c for both level 1 and 2\n',
    'font-weight: bold; color:green'
  );
  console.log(
    `Most wrong question ID for Level 1: ${mostWrongQuestionIdLevel1} with ${maxWrongCountLevel1} wrong answers`
  );
  console.log(
    `Most wrong question ID for Level 2: ${mostWrongQuestionIdLevel2} with ${maxWrongCountLevel2} wrong answers`
  );
  console.log(
    '\nYou might see %c null',
    'font-weight: bold; color: red',
    'which means either all questions have been solved correctly or there are no questions'
  );
}

// Call the function
difficultQuestion();

function numberOfCorrectAnswerForEachQuestion(level) {
  // Determine the level key based on the input level
  let localStorageLevel = level == 1 ? 'level-one' : 'level-two';

  // Initialize the result object
  let questionsAndNumberOfCorrectAnswers = {};

  // Retrieve questions and participants data from localStorage
  let questions = JSON.parse(localStorage.getItem(localStorageLevel));
  let participants = JSON.parse(localStorage.getItem('participants'));

  // Make sure that we have questions and participants data before calculating
  if (questions && participants && Object.keys(questions).length > 2) {
    // Initialize each question in the result object
    for (const question in questions) {
      if (question != 'levleID' && question != 'started') {
        questionsAndNumberOfCorrectAnswers[question] = {
          correct: 0,
          wrong: 0,
        };
      }
    }

    // Iterate through each participant to count the correct and wrong answers
    for (const participantId in participants) {
      let participantAnswers = participants[participantId].questions;
      for (const question in participantAnswers) {
        if (participants[participantId].level == level) {
          // Ensure the question exists in the questionsAndNumberOfCorrectAnswers object
          if (questionsAndNumberOfCorrectAnswers.hasOwnProperty(question)) {
            if (participantAnswers[question].correct) {
              questionsAndNumberOfCorrectAnswers[question].correct++;
            } else {
              questionsAndNumberOfCorrectAnswers[question].wrong++;
            }
          }
        }
      }
    }
  }

  return questionsAndNumberOfCorrectAnswers;
}
