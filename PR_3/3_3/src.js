// ------------------------- TASK 3 -------------------------
let str = prompt("Введіть речення")

function printText(str) {
    let len = str.length,
        i = 0,
        tId = setInterval(function() {
            data.innerHTML += str[i++];
            if (i == len) clearInterval(tId);
        }, 400);
};

printText(str)

let line = 0;
let count = 0;
let result = '';

function typeLine() {
    let interval = setTimeout(
        function() {
            result += str[line][count];
            document.querySelector('pre').innerHTML = result + '|';


            count++;
            if (count >= str[line].length) {
                count = 0;
                line++;
                if (line == str.length) {
                    clearTimeout(interval);
                    document.querySelector('pre').innerHTML = result;
                    return true;
                }
            }
            typeLine();
        }, getRandomInt(getRandomInt(250 * 2.5)))
}
typeLine();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}