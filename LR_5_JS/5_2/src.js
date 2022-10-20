// ------------------------- TASK 1 -------------------------
let str = prompt("Введіть номер телефону")

function testPhoneNumber(str) {

    if (!str.length)
        alert("Поштовий індекс було введено не коректно");
    var phoneTemplate = new RegExp("790?[0-9]{2}");
    str = str.replace(phoneTemplate, "");

    if (str != "")
        alert("Поштовий індекс було введено не коректно");
}

testPhoneNumber(str)
alert("Поштовий індекс ->" + str);