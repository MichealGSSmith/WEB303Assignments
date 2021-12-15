$(function(){
    let usernameValid = false;
    let passwordValid = false;
    let dateOfBirthValid = false;

    $('form').on('submit', function(e){
        //validation code goes here
        function username() {
            let username= document.getElementById('username');
            let valid = username.value == !null;

            if(!valid) {
                setErrorMessage(username, 'Eneter a name you pumpkin')
            } else {
                return usernameValid = true
            }
        }

        function password() {
            let password= document.getElementById('password');
            let valid = password.value.length <= 12 ;

            if(!valid) {
                setErrorMessage(password, 'Weak password bro need at least 12 charecters...those are letters dummy')
            } else {
                return passwordValid = true
            }
        }

        function dateOfBirth() {
            let dateOfBirth= document.getElementById('DateOfBirth');
            let valid = dateOfBirth.value == !null;

            if(!valid) {
                setErrorMessage(dateOfBirth, 'Seriously you cant read or something? Enter a date')
            } else {
                return dateOfBirthvalid = true
            }
        }

        $birth = $('#dateOfBirth');
        $birth.prop('type', 'text').data('type', 'date').datepicker({
            dateformat:'yy-mm-dd'
        })

        if (usernameValid && passwordValid && dateOfBirthValid ){
            e.preventDefault();
            $('tbody').append(`<tr><td>${$('#username').val()}</td><td>${$('#password').val().length}</td><td>${$('#dateOfBirth').val()}</td></tr>`)
            $('th').removeClass('ascending descending'); //new row added, so the table isn't sorted anymore
        }
    });

});