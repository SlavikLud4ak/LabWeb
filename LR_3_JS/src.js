document.writeln("<h1>PR 1<h1>")

// ------------------------- TASK 1 -------------------------
document.writeln("<h2> Завданння 1 <h2>")

let arr_One = ['a', 'b', 'c']
let arr_Two = [1, 2, 3]
document.writeln("Старий масив під номером один -> " + arr_One + "<br>")
document.writeln("Старий масив під номером два -> " + arr_Two + "<br>")

arr_One = arr_One.concat(arr_Two)
document.writeln("Об'єднаний масив -> " + arr_One + "<br>")

// ------------------------- TASK 2 -------------------------
document.writeln("<h2> Завданння 2 <h2>")

let arr = ['a', 'b', 'c']
document.writeln("Старий масив -> " + arr + "<br>")
arr.push(1, 2, 3)
document.writeln("Об'єднаний масив -> " + arr + "<br>")

// ------------------------- TASK 3 -------------------------
document.writeln("<h2> Завданння 3 <h2>")

let arr_Of_Num = [1, 2, 3]

document.writeln("Старий масив -> " + arr_Of_Num + "<br>")
document.writeln("Новий масив -> " + arr_Of_Num.reverse() + "<br>")

// ------------------------- TASK 4 -------------------------
document.writeln("<h2> Завданння 4 <h2>")

let arr_Of_Word = ['js', 'css', 'jq']
document.writeln("Масив -> " + arr_Of_Word + "<br>")
document.writeln("Останій елемент масиву -> " + arr_Of_Word[arr_Of_Word.length - 1] + "<br>")

// ------------------------- TASK 5 -------------------------
document.writeln("<h2> Завданння 5 <h2>")

let arr_Of_Num_Task_5 = [1, 2, 3, 4, 5]
let arr_Of_Num_Task_5_New = arr_Of_Num_Task_5.slice(3, 5)

document.writeln("Старий масив -> " + arr_Of_Num_Task_5 + "<br>")
document.writeln("Новий масив -> " + arr_Of_Num_Task_5_New + "<br>")

// ------------------------- TASK 6 -------------------------
document.writeln("<h2> Завданння 6 <h2>")

let arr_Of_Num_Task_6 = [1, 2, 3, 4, 5]
document.writeln("Старий масив -> " + arr_Of_Num_Task_6 + "<br>")
arr_Of_Num_Task_6.splice(1, 2);
document.writeln("Новий масив -> " + arr_Of_Num_Task_6 + "<br>")

// ------------------------- TASK 7 -------------------------
document.writeln("<h2> Завданння 7 <h2>")

let arr_Of_Num_Task_7 = [1, 2, 3, 4, 5]
document.writeln("Старий масив -> " + arr_Of_Num_Task_7 + "<br>")
document.writeln("Новий масив -> " + arr_Of_Num_Task_7.splice(1, 3) + "<br>")

// ------------------------- TASK 8 -------------------------
document.writeln("<h2> Завданння 8 <h2>")

let arr_Of_Num_Task_8 = [1, 2, 3, 4, 5]
document.writeln("Старий масив -> " + arr_Of_Num_Task_8 + "<br>")
arr_Of_Num_Task_8.splice(3, 0, "a", "b", "c")
document.writeln("Новий масив -> " + arr_Of_Num_Task_8 + "<br>")

// ------------------------- TASK 9 -------------------------
document.writeln("<h2> Завданння 9 <h2>")

arr = [1, 2, 3, 4, 5]
document.writeln("Старий масив -> " + arr + "<br>")

arr.splice(1, 0, "a", "b", )
arr.splice(6, 0, "c", )
arr.splice(8, 0, "e", )

document.writeln("Новий масив -> " + arr + "<br>")

// ------------------------- TASK 10 -------------------------
document.writeln("<h2> Завданння 10 <h2>")

arr = [3, 4, 1, 2, 7]
document.writeln("Старий масив -> " + arr + "<br>")

function bubble(arr) {
    var len = arr.length;

    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - i - 1; j++) { // this was missing
            if (arr[j] > arr[j + 1]) { // swap
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
document.writeln("Відсортований масив -> " + bubble(arr) + "<br>")

// ------------------------- TASK 11 -------------------------
document.writeln("<h2> Завданння 11 <h2>")

var arrobj = { js: 'test', jq: 'hello', css: 'world' }
document.writeln("Старий масив -> " + arrobj + "<br>")
document.write("Новий масив -> " + Object.keys(arrobj) + "<br>")

// ------------------------- TASK 12 -------------------------
document.writeln("<h2> Завданння 12 <h2>")
arr = 'aaa@bbb@ccc'
document.writeln("Старий масив -> " + arr + "<br>")
document.write("Новий масив -> " + arr.replace(/@/g, '!') + "<br>")

// ------------------------- TASK 13 -------------------------
document.writeln("<h2> Завданння 13 <h2>")

arr = '2025-12-31'
document.writeln("Старий масив -> " + arr + "<br>")
let arrOne = arr.split("-")
arrOne.reverse()
document.writeln("Новий масив -> " + arrOne.join('/') + "<br>")

// ------------------------- TASK 14 -------------------------
document.writeln("<h2> Завданння 14 <h2>")

arr = 'я вчу javascript!'
document.writeln("Старий масив -> " + arr + "<br>")
document.writeln("Новий масив -> " + arr.split('') + "<br>")

// ------------------------- TASK 15 -------------------------
document.writeln("<h2> Завданння 15 <h2>")

arr = ['x']
arr.length = 6

for (var i = 1; i < arr.length; i++) {
    arr[i] = arr[i - 1] + 'x'
}
document.writeln("масив -> " + arr + "<br>")

// ------------------------- TASK 16 -------------------------
document.writeln("<h2> Завданння 16 <h2>")

function arrayFill(str, numEl) {
    let arr = []
    arr.length = numEl
    for (let index = 0; index < arr.length; index++) {
        arr[index] = str
    }
    return arr;
}
arr = arrayFill('s', 4)
document.writeln("масив -> " + arr + "<br>")

// ------------------------- TASK 17 -------------------------
document.writeln("<h2> Завданння 17 <h2>")

arr = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
]
document.writeln("масив -> " + arr + "<br>")
let sum = 0;

arr = arr.flat(Infinity)

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

document.writeln("Сума -> " + sum + "<br>")

// ------------------------- TASK 18 -------------------------
document.writeln("<h2> Завданння 18 <h2>")

let styles = ['Jazz', 'Blues']
document.writeln("Початковий масив -> " + styles + "<br>")
styles.push('Rock-n-Roll')
document.writeln("Масив з доданим занченням -> " + styles + "<br>")
styles[Math.round((styles.length - 1) / 2)] = 'Classics'
document.writeln("Повернуто перший елемент який було видалено -> " + styles.shift() + "<br>")
styles.unshift('Rap', 'Reggae')
document.writeln("Додано два елементи в початок -> " + styles + "<br>")

// ------------------------- TASK 19 -------------------------
document.writeln("<h2> Завданння 19 <h2>")

function camelize(str) {
    return str
        .split('-')
        .map(function(word, index) {
            return index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        })
        .join('');
}
document.writeln("Перетворено на -> " + camelize('list-style-image') + "<br>")

// ------------------------- TASK 20 -------------------------
document.writeln("<h2> Завданння 20 <h2>")

function filterRange(arr, a, b) {
    return arr.filter(function(item) {
        return a <= item && item <= b
    });
}
arr = [5, 3, 8, 1];
document.writeln("Масив -> " + arr + "<br>")
document.writeln("Перетворено на -> " + filterRange(arr, 1, 4) + "<br>")

// ------------------------- TASK 21 -------------------------
document.writeln("<h2> Завданння 21 <h2>")

function copySorted(arr) {
    return arr.slice().sort()
}

arr = ["HTML", "JavaScript", "CSS"]
document.writeln("Скопійовано і відсортовано ->" + copySorted(arr) + "<br>")

// ------------------------- TASK 22 -------------------------
document.writeln("<h2> Завданння 22 <h2>")

function sortByAge(arr) {
    arr.sort(function(a, b) { a.age - b.age });
}

let ivan = { name: "Іван", age: 25 };
let petro = { name: "Петро", age: 30 };
let mariya = { name: "Марія", age: 28 };

arr = [petro, ivan, mariya];
sortByAge(arr)

document.writeln("Відсортовано ->" + arr[0].name + arr[1].name + arr[2].name + "<br>")

// ------------------------- TASK 23 -------------------------
document.writeln("<h2> Завданння 23 <h2>")


function getAverageAge(users) {
    return users.reduce(function(prev, user) {
        return prev + user.age
    }, 0) / users.length;
}


ivan = { name: "Іван", age: 25 };
petro = { name: "Петро", age: 30 };
mariya = { name: "Марія", age: 29 };

arr = [ivan, petro, mariya];


document.writeln("Середнє ->" + getAverageAge(arr) + "<br>")

// ------------------------- TASK 24 -------------------------
document.writeln("<h2> Завданння 24 <h2>")

let users = [
    { id: 'іван', name: "Іван Іванко", age: 20 },
    { id: 'ганна', name: "Ганна Іванко", age: 24 },
    { id: 'петро', name: "Петро Петренко", age: 31 },
];
let index = 0

function groupById(array) {
    return array.reduce(function(obj, value) {
        obj[value.id] = value;
        return obj;
    }, {})
}

let usersById = groupById(users);
document.writeln("Вивів в консоль" + "<br>")
console.log(users)
console.log(usersById)

// ------------------------- TASK 25 -------------------------
document.writeln("<h2> Завданння 25 <h2>")

function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }
    return sum;
}


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

document.writeln("Сума ->" + sumSalaries(salaries) + "<br>")