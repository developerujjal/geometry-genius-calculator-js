document.getElementById("btn-calculate").addEventListener("click", function(){
    let basic = getValue("base");
    let height = getValue("height");
    let areaResult = 0.5 * basic * height;

    if(isNaN(basic) || isNaN(height)){
        // document.getElementById("result-count").innerText = "00";
        return;
    }
   
    setResult("result-count", areaResult)

    createElement( "title-item1", ".calculate-result-output", areaResult)

})


document.getElementById("rectangle-calculate").addEventListener("click", function(){
    let width = getValue("width");
    let length = getValue("length");

    let areaResult = width * length;

    if(isNaN(width) || isNaN(length)){
        return;
    }

    setResult("result-count2", areaResult);

    createElement( "title-item2", ".calculate-result-output", areaResult)
})


document.getElementById("parallelogram-calculate").addEventListener("click", function(){
   let parallelogramBasic = getValue("parallelogram-basic");
   let parallelogramHeight = getValue("parallelogram-height");

   let areaResult = parallelogramBasic * parallelogramHeight;

   if(isNaN(parallelogramBasic) || isNaN(parallelogramHeight)){
    return;
}
   setResult("result-count3", areaResult)

   createElement( "title-item3", ".calculate-result-output", areaResult)
})



document.getElementById("rhombus-calculate").addEventListener("click", function(){
    let rhombusBasic = getValue("rhombus-basic");
    let rhombusHeight = getValue("rhombus-height");

    let areaResult = 0.5 * rhombusBasic * rhombusHeight;

    if(isNaN(rhombusBasic) || isNaN(rhombusHeight)){
        return;
    }

    setResult("result-count4", areaResult)

    createElement( "title-item4", ".calculate-result-output", areaResult)
})



document.getElementById("pentagon-calculate").addEventListener("click", function(){
    let pentagonSide = getValue("pentagon-side");
    let pentagonLength = getValue("pentagon-length");

    let areaResult = 0.5 * pentagonSide * pentagonLength;

    if(isNaN(pentagonSide) || isNaN(pentagonLength)){
        return;
    }

    setResult("result-count5", areaResult)

    createElement( "title-item5", ".calculate-result-output", areaResult)
})



document.getElementById("ellipse-calculate").addEventListener("click", function(){
    let ellipseSemiMajor = getValue("ellipse-semi-major");
    let ellipseSemiMinor = getValue("ellipse-semi-minor");

    let areaResult = Math.PI * ellipseSemiMajor * ellipseSemiMinor;
    let areaResultTwo = areaResult.toFixed(2);

    if(isNaN(ellipseSemiMajor) || isNaN(ellipseSemiMinor)){
        return;
    }

    setResult("result-count6", areaResultTwo);

    createElement( "title-item6", ".calculate-result-output", areaResultTwo)
})



