// login
let login = document.getElementById('login');
login.addEventListener('submit', (e) => {
    let users = JSON.parse(localStorage.users);

    let email = document.getElementById('email');
    let pw = document.getElementById('password');

    let check = users.map(index => index.email == email.value.trim() && index.pw == pw.value.trim())
    var flag = false;
    for (var i = 0; i < check.length; i++) {
        if (check[i] == false) {
            continue;
        }

        alert('Successful');
        flag = true;
    }

    if (!flag) {
        alert('Please input again');
        e.preventDefault();
    }
});

let exit = document.getElementById('exit');
exit.addEventListener('click', (event) => {
    window.location.href = '/index.html';
});
