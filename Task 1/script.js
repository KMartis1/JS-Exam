/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.getElementById('submit-btn').addEventListener('click', calculate)
document.getElementById('submit-btn').parentElement.addEventListener('submit', event => event.preventDefault())


function calculate () {
    let kg = parseFloat(document.getElementById('search').value)
    let lb = kg * 2.2046
    let g = kg / 0.001
    let oz = kg * 35.274

    showUnitConversions([
        {name: 'lb', result: lb},
        {name: 'g', result: g},
        {name: 'oz', result: oz},
    ])
}

function showUnitConversions(units) {
    let weightResultsDiv = document.createElement('div')
    weightResultsDiv.style = 'background-color: LightYellow; border: 2px solid black; width: 300px; text-align: center; margin: auto'
    for (let unit of units){
        let weightResultP = document.createElement('p')
        weightResultP.innerText = `${unit.name}: ${unit.result}`
        weightResultsDiv.appendChild(weightResultP)
    }
    document.getElementById('output').appendChild(weightResultsDiv)
}