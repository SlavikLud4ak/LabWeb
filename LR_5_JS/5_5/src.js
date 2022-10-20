// ------------------------- TASK 1 -------------------------
let str = prompt("Введіть текст з тегами")

function testPhoneNumber(str) {

    if (!str.length)
        alert("Немає таких тегів");
    var phoneTemplate = new RegExp("<p>|<br>|<font>|<hr>", "g");
    str = str.replace(phoneTemplate, "");
    if (str != "")
        alert("Немає таких тегів");
}

testPhoneNumber(str)
alert("Номер телефону ->" + str);