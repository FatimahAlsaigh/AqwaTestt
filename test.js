$(document).ready(function(){


    $().on('submit')
 
    $("form").submit(function (event) {
        event.preventDefault();
        var RESTARANTNAME = $('input').val();
 
        console.log(data);
        for (let i = 0; i < 1; i++) {
        $.ajax({
            method: 'GET',
            url: 'https://wainnakel.com/api/v1/GenerateFS.php?uid=26.2716025,50.2017993&g et_param=value',
           
           
            success: function (result) {
                console.log(result);
                $('#name').text(result.name);
                $('#id').text(result.id);
                $('#rate').text(result.rate);
                $('#crtName').text(result.createName);
                $('#isFav').text(result.isFav);
                $('#latitude').text(result.lat);
                $('#longitude').text(result.lon);
                $('#Imgs').text(result.images);
                $('#price').text(result.price);
                $('#link').text(result.link);
                $('#phN').text(result.phoneNumber);
                $('#isOp').text(result.isOpen);

 
 
            },
            error: function (error) {
             alert('wrong order')
                console.log(error);
            }
        })
    }
 
    });
 });