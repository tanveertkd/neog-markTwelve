const form = document.querySelector(".form");
const angleInputs = document.querySelectorAll(".angle-input");
const btnCheck = document.querySelector(".btn-submit");
const outputDiv = document.querySelector('.output');
var errorMessage = "";

outputDiv.style.display = "none";

const calculateAngle = () => {
    
    const angleOne = angleInputs[0].value;
    const angleTwo = angleInputs[1].value;
    const angleThree = angleInputs[2].value;    

    const validation = validateInput(angleOne, angleTwo, angleThree);
    
    if(validation){
        const sumOfAngles = Number(angleOne) + Number(angleTwo) + Number(angleThree);
        if(sumOfAngles === 180){
            outputDiv.style.display = "block";
            outputDiv.innerText = "Is a triangle!";
        }else{
            outputDiv.style.display = "block";
            outputDiv.innerText = "Not a triangle.";
        }
    } else {
        outputDiv.style.display = "block";
        outputDiv.innerText = errorMessage;
    }

}

const validateInput = (angleA, angleB, angleC) => {
    if(angleA !== '' && angleB !== '' && angleC !== ''){
    
        if(Math.sign(angleA) > 0 && Math.sign(angleB) > 0 && Math.sign(angleC) > 0){
            return true;
        } else {
            errorMessage = "Inputs can't have a negative value.";
            return false;
        }
    }else{
        errorMessage = "All three inputs must be filled.";
        return false;
    }
}

btnCheck.addEventListener("click", calculateAngle);