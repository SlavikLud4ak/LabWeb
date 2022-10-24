// ------------------------- TASK 1 -------------------------
// 2. За допомогою javascript помістити 1-й абзац в елемент таблиці No4; другий - в комірку
// таблиці No5; третій - в клітинку таблиці No6. Заголовки помістити відповідно в 1,2 і 3 комірки.
// Малюнок перемістити над таблицею.
function start() {
    let elementsH = document.getElementsByTagName('h3')
    let elementsP = document.getElementsByTagName('p')
    let tabel = document.getElementById('mytbl')
    for (let i = 0; i < 1; i++) {
        for (let j = 0; j < 3; j++) {
            tabel.rows[i].cells[j].textContent = elementsH[j].textContent
            tabel.rows[i + 1].cells[j].textContent = elementsP[j].textContent
        }
    }

    let list = document.getElementById("top");
    for (let i = 0; list.hasChildNodes(); i++) {
        if (i == 12) { break }
        list.removeChild(list.firstChild)
    }
    let img = document.createElement('img')
    img.src = "tumblr_opsismTLqh1vghf22o1_400.gif"
    img.style = "height: 200px; display: block; margin: 0 auto;"
    document.body.prepend(img);
    let elementsI = document.getElementsByTagName('img')
    elementsI[1].remove()



}