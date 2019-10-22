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
			
			$("#carSearchBtn").click(function() {
				console.log($('#exampleCarInfo').val());
				var searchTxt = $('#exampleCarInfo').val();
				var year = searchTxt.split(' ')[0];
				var make = searchTxt.split(' ')[1];
				var model = searchTxt.split(' ')[2];
				var found = 0;
				
				$('.results').empty();
				
				for (i = 0; i < Object.keys(data).length; i++){
					if(year == data[i].year && make == data[i].make && model == data[i].model){
						console.log('found car');
						$('.results').append(searchTxt + ' is in database and we have '+data[i].quantity);
						found = 1;
					}
				}
				if(found == 0){
					$('.results').append(searchTxt + ' is not database');

				}
			});
        }
    });
});