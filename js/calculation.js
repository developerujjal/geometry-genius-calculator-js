document.getElementById("btn-calculate").addEventListener("click", function(){
    let basic = getValue("base");
    let height = getValue("height");
    let areaResult = 0.5 * basic * height;
   
    setResult("result-count", areaResult)
   
})

document.getElementById("rectangle-calculate").addEventListener("click", function(){
    let width = getValue("width");
    let length = getValue("length");

    let areaResult = width * length;

    setResult("result-count2", areaResult);
})

document.getElementById("parallelogram-calculate").addEventListener("click", function(){
    let parallelogramBasicElement = document.getElementById("parallelogram-basic");
    let parallelogramBasicElementText = parallelogramBasicElement.value;
    let parallelogramBasicValue = parseFloat(parallelogramBasicElementText);

    let parallelogramHeightElement = document.getElementById("parallelogram-height");
    let parallelogramHeightElementText = parallelogramHeightElement.value;
    let parallelogramHeightValue = parseFloat(parallelogramHeightElementText);

    let areaTotal = parallelogramBasicValue * parallelogramHeightValue;
    
    let resultRlementCount = document.getElementById("result-count3");
    resultRlementCount.innerText = areaTotal;
})