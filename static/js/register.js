$(document).ready(function(){

    $('form').on('submit', function(event){

        $.ajax({
            data : {
                username : $('#Username').val(),
                email : $('#Email').val(),
                password : $('#Password').val(),
                passwordConfirmation : $('#PasswordConfirmation').val()
            },
            type : 'POST',
            url : '/register'
        })
        .done(function(data){
            if(data.error){
                console.log(data.error)
            }
            else{
                console.log(data);
            }
        });

        event.preventDefault();

    });
});