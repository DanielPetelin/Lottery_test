document.getElementById('verify').onclick = function() {
    var num = document.getElementById('number').value;

    if (num == 1 || num == 8) {
        document.getElementById('out').innerHTML = 'Вы победили!';
    } else {
        document.getElementById('out').innerHTML = 'Вы проиграли';
    };
};