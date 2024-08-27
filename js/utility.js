function getValue(elementId) {
    let element = document.getElementById(elementId);
    let valueElementText = element.value;
    let value = parseFloat(valueElementText);
    return value;
}



function setResult(elementId, value) {
    let resultRlement = document.getElementById(elementId);
    resultRlement.innerText = value;
}


let count = 0;
function createElement( elementId, elementId2, areaResult) {
    let title = document.getElementById(elementId).innerText;
    let appendElement = document.querySelector(elementId2)

        let newElement = document.createElement("div");
        newElement.innerHTML = `
        
                        <span>${count += 1}</span>
                        <span>${title}</span>
                        <span>${areaResult}</span>
                        <span>
                            <button>Conver to M<sup>2</sup></button>
                        </span>
        `
    
        newElement.classList.add("class", "one-div");
        appendElement.appendChild(newElement)




}