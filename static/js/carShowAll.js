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
            console.log(Object.keys(data).length);//print length of db
			
			$("#carSearchBtn").click(function() {
				console.log("Searching Car");
				console.log('Info entered: ' + $('#exampleCarInfo').val());
				
				var searchTxt = $('#exampleCarInfo').val();
				var year = searchTxt.split(' ')[0];
				var make = searchTxt.split(' ')[1];
				var model = searchTxt.split(' ')[2];
				var found = 0;
				
				$('.results').empty();
				
				for (i = 0; i < Object.keys(data).length; i++){
					if(year == data[i].year && make == data[i].make && model == data[i].model){
						$('.results').append(searchTxt + ' is in database and we have '+data[i].quantity);
						found = 1;
						console.log('CAR FOUND');
					}
				}
				if(found == 0){
					$('.results').append(searchTxt + ' is not in database');
					console.log('NOT FOUND');
				}
			});
			$("#availCarsBtn").click(function() {
				console.log("Showing all cars in inventory");
				
				$('.results').empty();
				for (i = 0; i < Object.keys(data).length; i++){
					if(0 < data[i].quantity){
						$('.results').append((data[i].year +' '+ data[i].make + ' ' + data[i].model + '<br />'));

					}
				}
			});
        }
    });
});