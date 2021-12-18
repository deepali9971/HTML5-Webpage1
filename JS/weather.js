document.getElementById("weather_data").addEventListener('click',function(){
 var cityName = document.getElementById("cityName").value;
 var url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=e24b72ea8d90c4dcd9315841b15f4911";{
  fetch(url).then(function(response){
      if(response.ok){
          return response.json();
      }else{
          throw new Error(Error);
      }
  }).then(function(data){
    var temp = Math.round(parseFloat(data.main.temp)-273.15);
    var feels_like = Math.round(parseFloat(data.main.feels_like)-273.15);
    var visibility = eval(parseFloat(data.visibility)/1000);

      document.getElementById('temprature').innerHTML = temp+"°C";
      document.getElementById('humidity').innerHTML = data.main.humidity+"%";
      document.getElementById('feelslike').innerHTML = feels_like+"°C";
      document.getElementById('pressure').innerHTML = data.main.pressure+"hPa";
      document.getElementById('visibility').innerHTML = visibility+"km";
      document.getElementById('clouds').innerHTML = data.clouds.all; 
  }).catch(function(error){
      console.log(error);
  });
  }
  
});


