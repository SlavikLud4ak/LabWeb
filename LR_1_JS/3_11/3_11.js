let res = document.getElementById("result");
let flag = 1;

function show(countStudent) {
    res.innerHTML += "<div class='result__item'>" + countStudent + "</div>";
}

function check(countStudent) {
    if (n == null) {
        flag = 0;
    } else {
        show(countStudent);
    }
}

while (flag) {
    let student = prompt("Прізвище і ім'я студента:");
    check(student);
}