/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document.getElementById('btn').addEventListener('click', showData)

function showData() {
    document.getElementById('message').innerText = ' '

    document.getElementById('btn').style.display = 'none'

    fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            for (let i = 0; i < data.length; i++) {
                let login = data[i].login;
                let avatarURL = data[i].avatar_url;

                let userCard = document.createElement('div')
                userCard.style = 'display: flex; justify-content: space-between; background-color: lightgrey; padding: 5px; border-radius: 7px'

                let userLogin = document.createElement('p')
                userLogin.innerText = `Login: ${login}`
                userLogin.style = 'display: inline'

                let userAvatarURL = document.createElement('a')
                userAvatarURL.innerText = avatarURL
                userAvatarURL.href = avatarURL
                // userAvatarURL.style = 'right: 0'

                const brElem = document.createElement('br');
                
                userCard.appendChild(userLogin)
                userCard.appendChild(userAvatarURL)
                document.getElementById('output').appendChild(userCard)
                document.getElementById('output').appendChild(brElem)
            }
        })
}