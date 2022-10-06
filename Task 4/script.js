/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;

-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const brElem = document.createElement('br')

function showDataInDivs() {
    let flexBoxForCards = document.createElement('div')
    flexBoxForCards.style = 'display: flex; justify-content: space-around; flex-wrap: wrap'
    document.getElementById('output').appendChild(flexBoxForCards)
    fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            for (let i = 0; i < data.length; i++) {
                let brand = data[i].brand;
                
                const carCard = document.createElement('div')
                carCard.style = 'height: fit-content; width: 170px; padding: 10px 10px; border: 2px solid black; margin: 4px; background-color: lightblue'
                
                const carCardBrandName = document.createElement('h3')
                carCardBrandName.style = 'text-align: center'
                carCardBrandName.innerText = brand

                carCard.appendChild(carCardBrandName)

                for (let model of data[i].models){
                    const carBrandModel = document.createElement('p')
                    carBrandModel.innerText = model
                    carCard.appendChild(carBrandModel)
                }
                
                flexBoxForCards.appendChild(carCard)
            }
        })
}

showDataInDivs ()