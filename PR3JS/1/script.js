let text = document.querySelectorAll('.biography');

for (let bio of text) {
    bio.insertAdjacentHTML("afterbegin", '<button class="red_button">Х</button>');
    bio.firstChild.onclick = () => bio.remove();
}