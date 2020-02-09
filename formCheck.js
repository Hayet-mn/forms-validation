
document.getElementById("form").addEventListener('submit', function (e) {

    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var address = document.getElementById('address');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var comment = document.getElementById('comment');

    var re = /[A-Z0-9._%+-]+@[a-zA-Z_]+?\.[A-Z]{2,4}/igm;
    // var re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var rp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");


    if (fname.value === "") {
        alert("please enter your first name");

    }

    if (lname.value === "") {
        alert("please enter your last name");

    }

    if (address.value === "") {
        alert("please enter your address");

    }

    if ((email.value === "") || !re.test(email.value)) {
        alert(" E-mail Invalid");

    }

    if ((password.value === "") || !rp.test(password.value)) {
        alert(" Password Invalid");

    }
    if (comment.value === "") {
        alert("please enter your comment");

    }
    



})