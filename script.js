function checkEmail(email) {
    //regular expression
    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(validRegex.test(email)) {
        return true;
    }
    return false;
}

function checkMobile(mobile) {
    //regular expression
    var validRegex = /^\d{10}$/;
    if(validRegex.test(mobile)) {
        return true;
    }
    return false;
}

// function checkPassword{
//     const pword = document.getElementById(password).value
//     const containsLowercase = /[a-z]/.test(password);
//     const containsUppercase = /[A-Z]/.test(password);
//     if (containsLowercase&&containsUppercase){
//         document.getElementById('result').innerHTML = 'password is valid' 
//     }
//     else{
//         document.getElementById('result').innerHTML ='password must contains uppercase and lowercase';

//     }

function checkForm()
{
    let bValid = true;
    //FIRSTNAME
    var fName = document.getElementById('firstName').value;
    var fNameError = document.getElementById('fNameError');
    if(fName === "") {
    //alert('Please enter first name');
        fNameError.innerHTML = 'Please enter first name';
        bValid = false;
    } else {
        fNameError.innerText = '';
    }
    // LASTNAME
    var lName = document.getElementById('lastName').value;
    var fLastError = document.getElementById('fLastError');
    if(lName == '') {
    //alert('Please enter last name');
        fLastError.innerText = 'Please enter last name';
        bValid = false;
    } else {
        fLastError.innerText = '';
    }
  //EMAIL
    var email = document.getElementById('email').value;
    var emailError = document.getElementById('emailError');
    if(email == '') {
        //alert('Please enter email');
        emailError.innerText = 'Please enter email';
        bValid = false;
    } else {
        var checkEmailBool = checkEmail(email);
        if(!checkEmailBool) {
        //alert('Please enter valid email');
            emailError.innerText = 'Please enter valid email @';
            bValid = false;
        }
    }
    // check date of birth to confirm an above 18-year-old person 
    var dob = document.getElementById('birth').value;
    var yob = new Date(dob).getFullYear();
    const d = new Date();
    let year = d.getFullYear();
    if((year - yob) < 18) {
        var dobError = document.getElementById('dobError');
        dobError.innerText = 'User must be > 18';
        bValid = false;
    }
    
    let a = 10;

    
    alert(`day la ${a}`);
    // check mobile contains 10 digits 
    // var mobile = document.getElementById('mobile').value;
    // var mobileError = document.getElementById('mobileError');
    // var checkMobileBool = checkMobile(mobile);
    // if(!checkMobileBool) {
    //     mobileError.innerText = 'Please enter mobile with 10 digits';
    //     bValid = false;
    // } else {
    //     mobileError.innerText = '';
    // }
    return bValid;
    // USERNAME
    var uname = document.getElementById('username').value;
    var unameError = document.getElementById('unameError');
    if(uname == '') {
    //alert('Please enter last name');
        unameError.innerText = 'Please enter an username';
        bValid = false;
    } else {
        unameError.innerText = '';
    }
}



