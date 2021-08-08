const form = document.querySelector(".form");
const angleInputs = document.querySelectorAll(".angle-input");
const btnCheck = document.querySelector(".btn-submit");
const outputDiv = document.querySelector('.output');

outputDiv.style.display = "none";
const calculateAngle = () => {
    
    const angleOne = angleInputs[0].value;
    const angleTwo = angleInputs[1].value;
    const angleThree = angleInputs[2].value;    

    if(angleOne !== '' && angleTwo !== '' && angleThree !== ''){
        
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
        outputDiv.innerText = "All three inputs must be filled.";
    }
}

btnCheck.addEventListener("click", calculateAngle);