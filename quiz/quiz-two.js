const userInputs = document.querySelectorAll(".user-input");
const btnSubmit = document.querySelector(".btn-submit");
const outputDiv = document.querySelector(".output");

outputDiv.style.display = "none";

const calculateHypotenuse = () => {
    const sideA = Number(userInputs[0].value);
    const sideB = Number(userInputs[1].value);
    const sumOfSqSides = Math.pow(sideA, 2) + Math.pow(sideB, 2);
    
    const hypotenuse = Math.sqrt(sumOfSqSides).toFixed(3);

    showOutput(hypotenuse);
}

const showOutput = (hypotenuse) => {
    outputDiv.style.display = "block";
    outputDiv.innerText =  "Hypotenuse is: "+hypotenuse;  
}

btnSubmit.addEventListener('click', calculateHypotenuse);