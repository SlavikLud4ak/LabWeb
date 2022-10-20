// ------------------------- TASK 1 -------------------------
let str = prompt("Введіть рік")

function testPhoneNumber(str) {

    if (!str.length)
        alert("Не точний рік");
    var phoneTemplate = new RegExp("(([1]{1}[9]{1}[0-9]{2})){1}|(([2]{1}[0]{1}[0-9]{2})){1}$");
    str = str.replace(phoneTemplate, "");
    if (str != "")
        alert("Не точний рік");
}

testPhoneNumber(str)
alert("Рік ->" + str);