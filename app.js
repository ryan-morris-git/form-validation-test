function validate() {
    var fname = document.testForm.fname.value;
    var lname = document.testForm.lname.value;
    var phone = document.testForm.phone.value;
    var email = document.testForm.email.value;
    var password = document.testForm.password.value;
    var status = false;

    if(fname == "" || fname == null) {
        document.getElementById("fnameER").innerHTML = "First name is required";
        status = false;
    } else {
        document.getElementById("fnameER").innerHTML = "";
        status = true;
    }
    if(lname == "" || lname == null) {
        document.getElementById("lnameER").innerHTML = "Last name is required";
        status = false;
    } else {
        document.getElementById("lnameER").innerHTML = "";
        status = true;
    }
    if(phone == "" || phone == null || phone.length != 10) {
        document.getElementById("phoneER").innerHTML = "Phone number is invalid, must be 10 digits";
        status = false;
    } else {
        document.getElementById("phoneER").innerHTML = "";
        status = true;
    }
    if(email == "" || email == null || !email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        document.getElementById("emailER").innerHTML = "Email address is invalid";
        status = false;
    } else {
        document.getElementById("emailER").innerHTML = "";
        status = true;
    }
    if(password == "" || password == null || password.length < 6) {
        document.getElementById("passwordER").innerHTML = "Password must contain more than 6 characters";
        status = false;
    } else {
        document.getElementById("passwordER").innerHTML = "";
    }
    return status;
}