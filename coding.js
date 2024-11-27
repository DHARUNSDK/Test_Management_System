document.getElementById("coding-form").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const question = document.getElementById("question").value;
    const inputFormat = document.getElementById("input-format").value;
    const outputFormat = document.getElementById("output-format").value;
    const testCases = document.getElementById("test-cases").value;
    const answerCode = document.getElementById("answer-code").value;
  
    console.log({ question, inputFormat, outputFormat, testCases, answerCode });
    alert("Coding Challenge Saved Successfully!");
  });
  