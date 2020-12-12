$(document).ready(function(){
    $("#click").on('click' ,async function(){
        const city = $('input[name="city"]:checked').val();
        const myApi = '';

        const rawData = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&lang=ja&appid=" + myApi);
        const data = await rawData.json();
        console.log(data);
        console.log(data.weather[0].description);
        console.log(data.main.temp);
        console.log(data.main.feels_like);
        console.log(data.main.humidity);

        switch(data.weather[0].icon){
            case '01d':
                $("#weatherMark").html("<img src='http://openweathermap.org/img/wn/01d@2x.png'>");
                break;

            case '02d':
                $("#weatherMark").html("<img src='http://openweathermap.org/img/wn/02d@2x.png'>");
                break;

            case '03d':
                $("#weatherMark").html("<img src='http://openweathermap.org/img/wn/03d@2x.png'>");
                break;

            case '04d':
                $("#weatherMark").html("<img src='http://openweathermap.org/img/wn/04d@2x.png'>");
                break;

            case '09d':
                $("#weatherMark").html("<img src='http://openweathermap.org/img/wn/09d@2x.png'>");
                break;

            case '10d':
                $("#weatherMark").html("<img src='http://openweathermap.org/img/wn/10d@2x.png'>");
                break;

            case '11d':
                $("#weatherMark").html("<img src='http://openweathermap.org/img/wn/11d@2x.png'>");
                break;

            case '13d':
                $("#weatherMark").html("<img src='http://openweathermap.org/img/wn/13d@2x.png'>");
                break;

            case '50d':
                $("#weatherMark").html("<img src='http://openweathermap.org/img/wn/50d@2x.png'>");
                break;


            case '01n':
                $("#weatherMark").html("<img src='http://openweathermap.org/img/wn/01n@2x.png'>");
                break;

            case '02n':
                $("#weatherMark").html("<img src='http://openweathermap.org/img/wn/02n@2x.png'>");
                break;

            case '03n':
                $("#weatherMark").html("<img src='http://openweathermap.org/img/wn/03n@2x.png'>");
                break;

            case '04n':
                $("#weatherMark").html("<img src='http://openweathermap.org/img/wn/04n@2x.png'>");
                break;

            case '09n':
                $("#weatherMark").html("<img src='http://openweathermap.org/img/wn/09n@2x.png'>");
                break;

            case '10n':
                $("#weatherMark").html("<img src='http://openweathermap.org/img/wn/10n@2x.png'>");
                break;

            case '11n':
                $("#weatherMark").html("<img src='http://openweathermap.org/img/wn/11n@2x.png'>");
                break;

            case '13n':
                $("#weatherMark").html("<img src='http://openweathermap.org/img/wn/13n@2x.png'>");
                break;

            case '50n':
                $("#weatherMark").html("<img src='http://openweathermap.org/img/wn/50n@2x.png'>");
                break;

        }


        $("#weather").html(data.weather[0].description);
        $("#temp").html(data.main.temp);
        $("#humidity").html(data.main.humidity);

    })

    $("#reset").on('click' ,function(){

        $('#weather').empty();
        $('#temp').empty();
        $('#humidity').empty();
        $('#weatherMark').empty();


    })
        
    
    
    
})
