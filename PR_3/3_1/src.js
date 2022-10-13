// ------------------------- TASK 1 -------------------------
function time() {
    let time = new Date();
    let myHours = String(time.getHours()).length == 1 ? ('0' + time.getHours()) : time.getHours()
    let myMinutes = String(time.getMinutes()).length == 1 ? ('0' + time.getMinutes()) : time.getMinutes()
    let mySeconds = String(time.getSeconds()).length == 1 ? ('0' + time.getSeconds()) : time.getSeconds()
    chas.value = myHours + ":" + myMinutes + ":" + mySeconds
    setTimeout('time()', 1000);
}
time()
document.writeln("Дата -> " + d1 + "<br>")