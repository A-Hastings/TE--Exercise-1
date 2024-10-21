// Questions Array
const questions = [
  "I allocate a portion of my schedule for planning and preparation.",
  "I delegate everything that can be delegated or doesn’t fall under my remit.",
  "I organize tasks and deadlines using a schedule or calendar.",
  "I arrange my documents/information so they are easy to locate.",
  "In a meeting, I raise it when others do not comply or deviate from the topic.",
  "When I go to a meeting, I have reviewed the related documents.",
  "Every day, I do as much as I can handle.",
  "I have reserved time slots in my calendar for urgent issues.",
  "I systematically manage performance-related issues on the goal/task as needed.",
  "I can decline others' requests if I have my own tasks to complete."
];

// Points for each option
const options = [
  {text: "Almost never", points: 0},
  {text: "Sometimes", points: 1},
  {text: "Often", points: 2},
  {text: "Almost always", points: 3}
];

// Render questions with options
const quizForm = document.getElementById("quiz-form");

questions.forEach((question, index) => {
  const questionDiv = document.createElement("div");
  questionDiv.className = "question";
  
  const questionTitle = document.createElement("p");
  questionTitle.innerText = question;
  questionDiv.appendChild(questionTitle);
  
  options.forEach(option => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `q${index}`;
    input.value = option.points;
    label.appendChild(input);
    label.appendChild(document.createTextNode(option.text));
    questionDiv.appendChild(label);
    questionDiv.appendChild(document.createElement("br"));
  });
  
  quizForm.appendChild(questionDiv);
});

// Result Calculation and Display
document.getElementById("submit-btn").addEventListener("click", () => {
  let totalScore = 0;
  let answeredAll = true;
  
  // Loop through questions and calculate score
  questions.forEach((_, index) => {
    const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
    if (selectedOption) {
      totalScore += parseInt(selectedOption.value);
    } else {
      answeredAll = false;
    }
  });

  if (answeredAll) {
    // Hide the quiz and show results
    document.getElementById("quiz-container").style.display = "none";
    showResults(totalScore);
  } else {
    alert("Please answer all the questions.");
  }
});

// Show results based on score
function showResults(score) {
  let feedback;
  if (score >= 25) {
    feedback = "Doing a Great Job!";
  } else if (score >= 15) {
    feedback = "Can Improve!";
  } else {
    feedback = "Needs Significant Improvement.";
  }

  // Show the result container and display feedback
  const resultContainer = document.getElementById("result-container");
  resultContainer.style.display = "block";
  document.getElementById("feedback").innerText = `Your Score: ${score}/30. ${feedback}`;
}