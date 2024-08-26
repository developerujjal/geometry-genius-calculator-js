function getValue(elementId){
    let element = document.getElementById(elementId);
    let valueElementText = element.value;
    let value = parseFloat(valueElementText);
    return value;
}



function setResult( elementId, value){
    let resultRlement = document.getElementById(elementId);
    resultRlement.innerText = value;
}