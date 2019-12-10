document.getElementById('submit').addEventListener('click', validateEmail)

function validateEmail(e) {
    
    var emailInput = document.getElementById('email');
    var errorIcon = document.getElementsByClassName('error-icon')
    console.log(emailInput);
    // requirment for valid email
    var filter = /^([a-z\d\.-]+)@([a-z\d\-]+).([a-z]+)$/i;

    if(filter.test(emailInput.value)) {
        console.log('You\'ve put valid email. Congratulations!');
        emailInput.classList.remove("invalid");
    } else {
        e.preventDefault();
        console.log('Please provide a valid email address');
        emailInput.className = "invalid";
        errorIcon[0].setAttribute('style', 'visibility: visible;')
    }
}




