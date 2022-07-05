function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM";

  if (h == 0) {
      h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? `0${h}`: h;
  h = m < 10 ?  `0${h}`: h;
  h = s < 10? `0${h}`: h;

  let time = h + ":" + m + ":" + s + " " + session;
  document.querySelector('.clock').innerText = time;
  document.querySelector(".clock").innerHTML = time;
  
  setTimeout(showTime, 1000);

}

showTime();