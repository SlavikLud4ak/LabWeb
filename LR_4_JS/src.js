document.writeln("<h1>LR 4<h1>")

// ------------------------- TASK 1 -------------------------
document.writeln("<h2> Завданння 1 <h2>")
let d1 = new Date(2021, 1, 20, 3, 12)
document.writeln("Дата -> " + d1 + "<br>")

// ------------------------- TASK 2 -------------------------
document.writeln("<h2> Завданння 2 <h2>")

function getWeekDay(date) {
    let days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
    return days[date.getDay()]
}

let date = new Date(2021, 5, 3)
document.writeln("Скорочений тип дня тижня -> " + getWeekDay(date) + "<br>")


// ------------------------- TASK 3 -------------------------
document.writeln("<h2> Завданння 3 <h2>")

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0)
    return date.getDate()
}

document.writeln("Номер останього дня місяця -> " + getLastDayOfMonth(2021, 3) + "<br>")

// ------------------------- TASK 4 -------------------------
document.writeln("<h2> Завданння 4 <h2>")

function getSecondsToTomorrow() {
    let now = new Date()
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
    let diff = tomorrow - now;
    return Math.round(diff / 1000);
}

document.writeln("Кількість секунд до завтра -> " + getSecondsToTomorrow() + "<br>")

// ------------------------- TASK 5 -------------------------
document.writeln("<h2> Завданння 5 <h2>")

function formatDate(date) {
    let diff = new Date() - date

    if (diff < 1000) {
        return 'прямо зараз'
    }

    let sec = Math.floor(diff / 1000)
    if (sec < 60) {
        return sec + ' сек. назад'
    }

    let min = Math.floor(diff / 60000)
    if (min < 60) {
        return min + ' хв. назад'
    }
    let d = date
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2))


    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':')
}

document.writeln(formatDate(new Date(new Date - 1)) + "<br>")