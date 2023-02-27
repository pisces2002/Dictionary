const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById('output');
const sound = document.getElementById('volume');
const btn = document.getElementById('btns');

btn.addEventListener("click", () => {
    let input = document.getElementById('imp-word').value;
    fetch(`${url}${input}`)
        .then((reponse) => reponse.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `<div class="word">
            <h3>${input}</h3>
            <i class="fa-solid fa-code"></i><i class="fa-brands fa-css3-alt"></i><i class="fa-brands fa-js"></i>
        </div>

        <div class="details">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>/${data[0].phonetics[1].text}</p>
        </div>
        <p class="meaning">${data[0].meanings[0].definitions[0].definition}</p>
        <p class="example">${data[0].meanings[0].definitions[1].definition}<p>`
                ;
            sound.setAttribute("src", `https:${data[0].phonetics[1].audio}`);
            console.log(sound);
        })
        .catch(() => {
            result.innerHTML = `<h3 class="error">Sorry! Couldn't find the word</h3>`
        })
});

function playSound() {
    sound.play();
}