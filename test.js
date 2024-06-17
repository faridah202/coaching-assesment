function validateform() {
    var name = document.forms['myForm']['name'].value;
    var email = document.forms['myForm']['email'].value;
    var password = document.forms['myForm']['password'].value;

    if (name == '') {
        alert('Name must be filled out');
        return false;
    }
    if (email == '') {
        alert('Email must be filled out');
        return false;
    }
    if (password.length < 8) {
        alert('Password must be at least 8 characters long');
        return false;
    }
}