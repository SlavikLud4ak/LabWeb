// ------------------------- TASK 1 -------------------------
let str = prompt("Текс з коментарем")

function testPhoneNumber(str) {

    if (!str.length)
        alert("Немає коментарів");
    var phoneTemplate = RegExp("<!--(.*?)-->", "g")
    str = str.replace(phoneTemplate, "");
    if (str != "")
        alert("Немає коментарів");
}

testPhoneNumber(str)
alert("Номер телефону ->" + str);