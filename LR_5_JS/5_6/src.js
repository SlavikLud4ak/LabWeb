// ------------------------- TASK 1 -------------------------
let str = prompt("Введіть текст ")

function testPhoneNumber(str) {

    if (!str.length)
        alert("Не точний текст");
    var phoneTemplate = new RegExp("^ +| +$", "g");
    str = str.replace(phoneTemplate, "");
    if (str != "")
        alert("Не точний текст");
}

testPhoneNumber(str)
alert("Текст ->" + str);