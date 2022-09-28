let res = document.getElementById("result");
let flag = 1;

function show(n) {
    res.innerHTML += "<div class='result__item'>" + n + "</div>";
}

function check(n) {
    if (n == null) {
        flag = 0;
    } else {
        show(n);
    }
}

while (flag) {
    let n = prompt("Прізвище і ім'я студента:");
    check(n);
}