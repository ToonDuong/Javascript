document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').onclick = count;
});
let counter = 0;
function count() {
    counter++;
    document.querySelector('#counter').innerHTML = counter;
    if (counter % 3 == 0) {
        alert(Nguyễn Tôn Dương. Counter is at ${counter}!`)
    }
}