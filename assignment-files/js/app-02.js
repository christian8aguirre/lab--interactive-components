/* 02 - FORM VALIDATION :: YOUR CODE BELOW */

var formulario = document.forms.formulario;
console.log(formulario);

 formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    var usernameTexBox = e.target.elements.username;
    if (usernameTexBox.value !== '') {
      document.querySelector('.validation--username').textContent = 'Success!!!';
    } else{
        document.querySelector('.validation--username').textContent = 'User cannot be blank';  
    }
    
    var passwordTextBox = e.target.elements.userpassword;
    var confirmTextBox = e.target.elements.confirmpassword;
    if (passwordTextBox.value.length >= 8) {
        document.querySelector('.validation--user-password').textContent = 'Success!!!';
        if (confirmTextBox.value === passwordTextBox.value) {
            document.querySelector('.validation--confirm-password').textContent = 'Success!!!';
        } else{
            document.querySelector('.validation--confirm-password').textContent = 'Password must match original password';
        }
    } else {
        document.querySelector('.validation--user-password').textContent = 'Password must be longer than 8 characters';
        document.querySelector('.validation--confirm-password').textContent = 'Password must be longer than 8 characters & match original password';
    }

    
    
    
});