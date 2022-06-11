function getInput() {
    let binValor = document.querySelector('input').value
    detectInputError(binValor)
}

function detectInputError(valor) {

    let typeValor = valor
    
    binToDec(typeValor)
    
}

function binToDec(binary){
    var binaryValor = binary; 
    var digit = parseInt(binaryValor, 2);
    var digitResult = String(digit)
    var br = document.createElement('br')
    let result = document.createTextNode('The conversion result is:' + digitResult);
    document.body.appendChild(result);
    document.body.appendChild(br)
    console.log(digit);

}
