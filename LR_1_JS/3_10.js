let n = prompt("Кількість студентів:", 5);
let res = document.getElementById("result");

let students = {
    s1: {
        name: "Yaroslav",
        surname: "Ludchak"
    },
    s2: {
        name: "Olexandr",
        surname: "Yatskiv"
    },
    s3: {
        name: "Denis",
        surname: "Vodiny"
    },
    s4: {
        name: "Ivan",
        surname: "Kilishtof"
    },
    s5: {
        name: "Max",
        surname: "Vivcharenko"
    }
}

function show(n, i) {
    res.innerHTML += "<div class='result__item'>" + students['s' + i].name + " " + students['s' + i].surname + "</div>";
}

function check(n) {
    if (n >= 0 && n <= 5) { //&& Number.isInteger(n)
        for (let i = 1; i <= n; i++) {
            show(n, i);
        };

    } else {
        for (let i = 1; i <= n; i++) {
            show(n, i);
        };
        n = prompt("Кількість студентів:", 5);
        check(n);
    }
}

check(n);