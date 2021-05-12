const cityname =document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp_real_val = document.querySelector(".temp_real_val");
const temp_status = document.getElementById("temp_status");
const data_hide = document.querySelector('.middle_layer');

const getInfo = async(event) =>{
    event.preventDefault();
    let cityval = cityname.value;
    if(cityval === ""){
        city_name.innerText = "Plz write the name before search";
        data_hide.classList.add("data_hide");
    }
    else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=b4fa059938ddbe3da35082a2f583f12d`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            console.log(arrData);
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;
            if(tempMood == "Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }else if(tempMood == "Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }else if(tempMood == "Rain"){
                temp_status.innerHTML = "<i class='fas fa-rain' style='color: #a4b0be;'></i>";
            }else{
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }
            data_hide.classList.remove("data_hide");
        }
        catch{
            city_name.innerText = "Plz write name before search";
            data_hide.classList.add("data_hide");
            cityval="";
        }

    }
}

submitBtn.addEventListener('click',getInfo);
let day = document.getElementById("day");
let month = document.getElementById("today_date")
const getCurrentDay=()=>{
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursady";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    let cuurentTime = new Date();
    let days = weekday[cuurentTime.getDay()];
    day.innerText = days;
};
const getCurrentMonth=()=>{
    let month_of = new Array(12);
    month_of[0] = "January";
    month_of[1] = "February";
    month_of[2] = "March";
    month_of[3] = "April";
    month_of[4] = "May";
    month_of[5] = "June";
    month_of[6] = "July";
    month_of[7] = "August";
    month_of[8] = "September";
    month_of[9] = "October";
    month_of[10] = "November";
    month_of[11] = "December";
    let currentTime = new Date();
    let date = currentTime.getDate();
    let months = month_of[currentTime.getMonth()];
    month.innerText = `${date} ${months}`;
}
getCurrentDay();
getCurrentMonth();