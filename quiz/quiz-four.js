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

    const formattedOne = Number(angleOne);
    const formattedTwo = Number(angleTwo);
    const formattedThree = Number(angleThree);

    if(validation){
        if((formattedOne+formattedTwo)>formattedThree && (formattedTwo+formattedThree)>formattedOne && (formattedOne+formattedThree)>formattedTwo){
            var s = (Number(formattedOne) + Number(formattedTwo) + Number(formattedThree)) / 2;
            const area = Math.sqrt(s * (s - formattedOne) * (s - formattedTwo) * (s - formattedThree));

            outputDiv.style.display = "block";
            outputDiv.innerText = "The area is: "+area.toFixed(2);
        }else{
            outputDiv.style.display = "block";
            outputDiv.innerText = "Invalid lengths entered. The length of a side should be smaller than the sum of two sides.";
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