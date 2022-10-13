// ------------------------- TASK 1 -------------------------
let str = +prompt("Введіть суму ставки: ")
let num = parseInt(Math.random() * 10) - 5
console.log(num)

function printWin() {
    num <= 0 ? alert("Програш") : alert("Ви вгадали ваш виграш ->" + str * num)
}
setTimeout('printWin()', 1000);