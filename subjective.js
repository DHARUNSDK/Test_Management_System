document.getElementById("subjective-form").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const question = document.getElementById("question").value;
  
    console.log({ question });
    alert("Subjective Question Saved Successfully!");
  });
  