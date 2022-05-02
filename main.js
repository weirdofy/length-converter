console.log("Hemlo");

let length = document.querySelector("#length"),
  cm = document.querySelector("#cm"),
  mm = document.querySelector("#mm"),
  km = document.querySelector("#km"),
  mil = document.querySelector("#miles"),
  inch = document.querySelector("#inch"),
  ft = document.querySelector("#foot"),
  yd = document.querySelector("#yards"),
  convert = document.querySelector("#convert");

convert.addEventListener("click", () => {
  let m = length.value;
  console.log(m);

  if (m === "") {
    alert("Please enter a value");
  } else {
    cm.innerHTML = `${m * 100} cm`;
    mm.innerHTML = `${m * 1000} mm`;
    km.innerHTML = `${m / 1000} km`;
    mil.innerHTML = `${m * 0.000621371} miles`;
    inch.innerHTML = `${m * 39.3701} in`;
    ft.innerHTML = `${m * 3.28084} ft`;
    yd.innerHTML = `${m * 1.09361} yards`;
  }
});
