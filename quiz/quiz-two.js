const userInputs = document.querySelectorAll(".user-input");
const btnSubmit = document.querySelector(".btn-submit");
const outputDiv = document.querySelector(".output");

outputDiv.style.display = "none";

const calculateHypotenuse = () => {
    const sideA = Number(userInputs[0].value);
    const sideB = Number(userInputs[1].value);

    const valid = validate(sideA, sideB);

    if(valid){
        const sumOfSqSides = Math.pow(sideA, 2) + Math.pow(sideB, 2);
        const hypotenuse = Math.sqrt(sumOfSqSides).toFixed(3);
        showOutput(hypotenuse, valid);
    }else{
        showOutput(null, valid);
    }
}

const validate = (sideOne, sideTwo) => {
    if(sideOne<0 || sideTwo<0){
        return false;
    }
    return true;
}

const showOutput = (hypotenuse, valid) => {
    if(valid){
        outputDiv.style.display = "block";
        outputDiv.innerText =  "Hypotenuse is: "+hypotenuse;
    }else{
        outputDiv.style.display = "block";
        outputDiv.innerText = "Invalid input.";
    }
}

btnSubmit.addEventListener('click', calculateHypotenuse);