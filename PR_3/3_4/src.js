// ------------------------- TASK 1 -------------------------
let str, num = parseInt(Math.random() * 10) - 5
while (true) {
    str = +prompt("Введіть суму ставки: ")
    console.log(str)
    if (isNaN(str) == true || str <= 0) continue
    else break
}
console.log(num)

function printWin() {
    num <= 0 ? alert("Програш") : alert("Ви вгадали ваш виграш ->" + str * num)
}
setTimeout('printWin()', 1000);