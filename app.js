let hr, mn, sc, day, hh, mm, ss;

hr = document.querySelector("#hr");
mn = document.querySelector("#mn");
sc = document.querySelector("#sc");

function clock() {
  day = new Date();
  hh = day.getHours() * 30;
  mm = day.getMinutes() * 6;
  ss = day.getSeconds() * 6;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
}

setInterval(() => {
  clock();
});
