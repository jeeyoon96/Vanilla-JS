const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date()
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //창 뜨자마자 보여주기 위해서, 일단 바로 한번 실행.
setInterval(getClock, 1000);    //1초마다 실행.
//setTimeout(getClock, 1000);   //1초 후에 한번 실행.

