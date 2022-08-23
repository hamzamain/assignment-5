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
    return inputValue;
}
function steValueById(elementId, newValue){
    const elementField = document.getElementById(elementId);
    elementField.innerText = newValue;
}
const liArray = document.getElementsByClassName('li-class');
console.log(liArray.length);
let totalPlayer = liArray.length;