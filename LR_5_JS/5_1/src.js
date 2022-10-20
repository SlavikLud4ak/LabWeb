// ------------------------- TASK 1 -------------------------
let str = prompt("Введіть номер телефону")

function testPhoneNumber(str) {

    if (!str.length)
        alert("Номер телефону задано некоректно");
    var phoneTemplate = new RegExp("/(\+38)?\(?0(39|67|68|96|50|66|95|99|63|93|91|92|94)\)?\-?(\d{3})\-?(\d{2})\-?(\d{2})/g");
    str = str.replace(phoneTemplate, "");
    if (str != "")
        alert("Номер телефону задано некоректно");
}

testPhoneNumber(str)