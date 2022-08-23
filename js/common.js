function getTextValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textValue = textElement.innerText;
    return textValue;
}
function getfieldById(elementId){
    const field = document.getElementById(elementId);
    return field;
}
function getInputValueById(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    if(isNaN(inputValue)){
        return;
    }
    else{
        return inputValue;
    }
}
function steValueById(elementId, newValue){
    const elementField = document.getElementById(elementId);
    elementField.innerText = newValue;
}



const liArray = document.getElementsByClassName('li-class');
console.log(liArray.length);

function playerExpence(){
    const perPlayer = getInputValueById('per-player');
    if(isNaN(perPlayer)){
        document.getElementById('per-player').value = '';
        return;
    }
    else{
        // console.log(perPlayer);
    const totalPlayer = liArray.length;
    // console.log(totalPlayer);
    const playerExpence = perPlayer * totalPlayer;
    // console.log(playerExpence)
    return playerExpence;
    }
    
}