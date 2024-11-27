document.getElementById("mcq-form").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const question = document.getElementById("question").value;
    const options = [
      document.getElementById("option1").value,
      document.getElementById("option2").value,
      document.getElementById("option3").value,
      document.getElementById("option4").value,
    ];
    const correctAnswer = document.getElementById("correct-answer").value;
  
    console.log({ question, options, correctAnswer });
    alert("MCQ Saved Successfully!");
  });
  