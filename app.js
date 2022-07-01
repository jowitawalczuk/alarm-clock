const currentTime = document.querySelector("h1");
setAlarmBtn = document.querySelector("button");
hour = document.getElementById("hour")
minute = document.getElementById("minute");
second = document.getElementById("second");

let alarmTime,isAlarmSet
ringtone = new Audio("./woofwoof.wav");

setInterval(() => {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds();
    
    //adding "0" for number less than 10
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    currentTime.innerText = `${h}:${m}:${s}`;

    //alarm activation
    if (alarmTime === `${h}:${m}:${s}`) {
        ringtone.play();
        ringtone.loop = true;
    }

});

function setHour() {
    SelectedHour=hour.value;
    console.log("selected hour:", SelectedHour);
    return SelectedHour;
}

function setMinute() {
    SelectedMinute=minute.value;
    console.log("selected minute:", SelectedMinute);
    return SelectedMinute;
}

function setSecond() {
    SelectedSecond=second.value;
    console.log("selected second:", SelectedSecond);
    return SelectedSecond;
}

function setAlarm() {

    //alarm reset
    if (isAlarmSet) {
        alarmTime = "";
        ringtone.pause();
        setAlarmBtn.innerText="Set Alarm"
        return isAlarmSet = false;
    }



    let time = `${SelectedHour}:${SelectedMinute}:${SelectedSecond}`;
    console.log("Selected Alarm time:", time);
    alarmTime = time;
    isAlarmSet = true;
    setAlarmBtn.innerText = "Stop";
}

hour.addEventListener("change", setHour);
minute.addEventListener("change", setMinute);
second.addEventListener("change", setSecond);
setAlarmBtn.addEventListener("click", setAlarm); 