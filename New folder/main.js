const name = document.getElementById('name');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const form = document.getElementById('terms');
const form = document.getElementById('form');


form.addEventListener('submit', function(event){
    let messages =[];
    if(name.value === '' || name.value == null) {
        messages.push(' Name is required')
    }
    if(password.value === '' || password.value == null) {
        messages.push('password is required')
    }
    if(cpassword.value === '' || cpassword.value == null || cpassword.value == password.value) {
        messages.push(' Passwords must match')
    }
    if(terms.value = false || terms.value == null) {
        messages.push('You must read terms loser')
    }
    if(messages.length > 0) {
        event.preventDefault();
    }
});