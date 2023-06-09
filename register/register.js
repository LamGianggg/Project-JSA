// register
let register = document.querySelector("#register");
register.addEventListener('submit', (e) => {
    e.preventDefault()
    let email = document.getElementById('email');
    let pw = document.getElementById('password');

    let lowerCaseLetter = /[a-z]/g;
    let upperCaseLetter = /[A-Z]/g;
    let numbers = /[0-9]/g;

    if (email.value.trim().length == 0 && pw.value.trim().length == 0) {
        alert('Please input your email and password');
    } else if (email.value.trim().length == 0) {
        alert('Please input your email');
    } else if (pw.value.trim().length == 0) {
        alert('Please input your email');
    } else if (pw.value.trim().length < 8) {
        alert('Password must be at least 8 characters.');
    } else if (!pw.value.trim().match(lowerCaseLetter)) {
        alert('Password must contain a lowercase letter');
    } else if (!pw.value.trim().match(upperCaseLetter)) {
        alert('Password must contain a upper letter');
    } else if (!pw.value.trim().match(numbers)) {
        alert('Password must contain a number');
    } else {
        alert('Successful');
        window.location.href = '/index.html';
        if (localStorage.users) {
            let users = JSON.parse(localStorage.users);
            users.push({
                email: email.value.trim(),
                pw: pw.value.trim()
            })
            localStorage.setItem('users', JSON.stringify(users));
        } else {
            localStorage.setItem('users', JSON.stringify(
                [
                    {
                        email: email.value.trim(),
                        pw: pw.value.trim()
                    }
                ]
            ))
        }
    }
});

let exit = document.getElementById('exit');
exit.addEventListener('click', (event) => {
    window.location.href = '/index.html';
})

