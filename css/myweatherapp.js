function updateTemperature(response){
    console.log(response.data);
    


    let cityInput=document.querySelector(".text-input");
    let h1=document.querySelector("h1");
    let temperatureElement=document.querySelector(".temperature");
    let temperature=Math.round(response.data.current.temp_c);
    temperatureElement.innerHTML=`${temperature}`;

    let cityValue=cityInput.value;
    h1.innerHTML=`${cityValue}`;

    let now=new Date();
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day=days[now.getDay()];
    let hours=now.getHours();
    let formattedHour=hours.toString().padStart(2,"0");
    let minutes=now.getMinutes();
    let formattedMinutes=minutes.toString().padStart(2,"0");

    let dayTime=document.querySelector(".time");
    dayTime.innerHTML=`${day} ${formattedHour}:${formattedMinutes}`;
      

}


function changeCity(event){
    event.preventDefault();
    let cityValue=document.querySelector(".text-input").value;
    let apiKey="ccee108c068d4d38b8b202029252705";
    let apiUrl=`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityValue}`;
    

   
    axios.get(apiUrl).then(updateTemperature).catch(error=>{
        document.querySelector(".temperature").textContent="error";
        console.error(error);
    });
}



let button=document.querySelector(".submit-button");
button.addEventListener("click",changeCity);
