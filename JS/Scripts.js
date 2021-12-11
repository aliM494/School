{
  (function () {
    let div = document.querySelector(".state");

    for (var i in Provinces) {
      let provinces = document.createElement("option");

      provinces.value = i + 1;

      provinces.innerHTML = Provinces[i];

      div.appendChild(provinces);
    }
  })();
}

{
  function GetStates() {
    let e = document.querySelector(".state");
    let state = e.options[e.selectedIndex].text;

    localStorage.removeItem("state");
    localStorage.setItem("state", state);
  }
}

function AddCities() {
  let state = localStorage.getItem("state");

  let List = document.querySelector(".C-list");

  List.innerHTML = "";

  let cities = [];

  for (let item in Cities) {
    if (Cities[item].province === state) {
      if (cities.indexOf(Cities[item].state) == -1) {
        cities.push(Cities[item].state);
      }
    }
  }

  cities
    .filter((c) => c != undefined)
    .map((c) => {
      let City = document.createElement("li");

      City.innerHTML = c;
      List.appendChild(City);
    });
}

const colors = ["#2196f3", "#e91e63", "#ffeb3b", "#74ff1d"];
function createSquare() {
  const section = document.querySelector(".BKEffect");
  const square = document.createElement("span");

  var size = Math.random() * 50;

  square.style.width = 20 + size + "px";
  square.style.height = 20 + size + "px";

  square.style.top = Math.random() * innerHeight + "px";
  square.style.left = Math.random() * innerWidth + "px";

  const bg = colors[Math.floor(Math.random() * colors.length)];

  square.style.backgroundColor = bg;

  section.appendChild(square);

  setTimeout(() => {
    square.remove();
  }, 5000);
}

setInterval(createSquare, 150);

VanillaTilt.init(document.querySelector(".Main"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".Main"));
