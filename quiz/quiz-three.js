const form = document.querySelector(".form");
const btnSubmit = document.querySelector(".btn-submit");
const outputDiv = document.querySelector(".output");

const answersArray = ["acute", "equilateral", "70"];

const checkAnswers = (e) => {
    e.preventDefault();
    
    let totalScore = 0;
    let i = 0;

    const formData = new FormData(form);
    for(let fromAns of formData.values()){
        if(fromAns === answersArray[i]){
            totalScore++;
        }
        i++;
    }
    showOutput(totalScore);
}

const showOutput = (score) => {
    outputDiv.style.display = "block";
    outputDiv.innerText = "Total score is: "+score;
}

btnSubmit.addEventListener('click', checkAnswers);