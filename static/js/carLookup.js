$(document).ready(function(){

    $.ajax({
        type : 'GET',
        url : '/getCars'
    })
    .done(function(data){
        if(data.error){
            console.log(data.error)
        }
        else{
            data = JSON.parse(data);
            console.log(data[0]);
            console.log(Object.keys(data).length);
            for(i = 0; i < Object.keys(data).length; i++){
                $('#myTable').append('<tr><td>'+data[i].year+'</td><td>'+data[i].make+'</td><td>'+data[i].model+'</td></tr>');
            }
        }
    });

});