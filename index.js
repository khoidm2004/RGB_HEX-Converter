function hexConverter(){
    const rgbInput = document.getElementById("rgbInput").value;
    const rgbArray = rgbInput.split(",").map(value=>parseInt(value.trim()));
    const hexValue = rgbArray.map(value => value.toString(16).padStart(2,"0")).join("");
    document.getElementById("output").innerText =  `Hex Value: #${hexValue.toUpperCase()}`;
}

function colorConverter(){
    const hexInput = document.getElementById("hexInput").value;
    const hexValue = hexInput.replace("#","");
    const Red = parseInt(hexValue.substring(0,2),16);
    const Green = parseInt(hexValue.substring(0,2),16);
    const Blue = parseInt(hexValue.substring(0,2),16);
    document.getElementById("output").innerText = `Red: ${Red}  Green: ${Green} Blue:  ${Blue}`;
}