function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}
createDaysOfTheWeek();

// Escreva seu código abaixo.
const decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function createInjectNumber() {
  let getDivWeek = document.querySelector("#days");

  for (let index of decemberDaysList) {
    let createLi = document.createElement("li");
    if (index === 24 || index === 31) {
      createLi.className = "day holiday";
    } else if (index === 4 || index === 11 || index === 18) {
      createLi.className = "day friday";
    } else if (index === 25) {
      createLi.className = "day friday holiday";
    } else {
      createLi.className = "day";
    }
    createLi.innerText = index;
    getDivWeek.appendChild(createLi);
  }
}
createInjectNumber();

function button() {
  let getButton = document.querySelector(".buttons-container");
  let createButton = document.createElement("button");
  createButton.id = "btn-holiday";
  createButton.innerText = "Feriados";
  getButton.appendChild(createButton);
}
button();

let getHoliday = document.querySelector("#btn-holiday");
let clicks = false;
getHoliday.addEventListener("click", function () {
  let getClassHoliday = document.getElementsByClassName("holiday");
  if (clicks == false) {
    for (let index = 0; index < getClassHoliday.length; index += 1) {
      getClassHoliday[index].style.backgroundColor = "green";
      getClassHoliday[index].style.border = "1px solid white";
      getClassHoliday[index].style.color = "white";
    }
    clicks = true;
  } else {
    for (let index = 0; index < getClassHoliday.length; index += 1) {
      getClassHoliday[index].style.backgroundColor = "rgb(238,238,238)";
      getClassHoliday[index].style.border = "1px solid white";
      getClassHoliday[index].style.color = "rgb(119,119,119)";
    }
    clicks = false;
  }
});

function friButton() {
  let getButton = document.querySelector(".buttons-container");
  let createButton = document.createElement("button");
  createButton.id = "btn-friday";
  createButton.innerText = "Sexta-Feira";
  getButton.appendChild(createButton);
}
friButton();
let clicks2 = false;
let getFriday = document.querySelector("#btn-friday");

getFriday.addEventListener("click", function () {
  let getClassFriday = document.getElementsByClassName("friday");
  if (clicks2 == false) {
    for (let index = 0; index < getClassFriday.length; index += 1) {
      getClassFriday[index].style.backgroundColor = "green";
      getClassFriday[index].style.border = "1px solid white";
      getClassFriday[index].style.color = "white";
    }
    clicks2 = true;
  } else {
    for (let index = 0; index < getClassFriday.length; index += 1) {
      getClassFriday[index].style.backgroundColor = "rgb(238,238,238)";
      getClassFriday[index].style.border = "1px solid white";
      getClassFriday[index].style.color = "#777";
    }
    clicks2 = false;
  }
});
let auth = false;

function pintaLi() {
  let getUl = document.querySelector("#days");
  getUl.addEventListener("click", function (event) {
    if (auth == true) {
      let getColor = event.target.style.color;
      console.log(event);
      if (getColor == "") {
        event.target.style.color = "green";
      } else if (getColor == "green") {
        console.log(auth);
        event.target.style.color = "rgb(119,119,119)";
      }
    }
  });

  function dayMouseOver() {
    let days = document.querySelector('#days');
    days.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600'; 
    });
  }
  function dayMouseOut() {
    let days = document.querySelector('#days');
    days.addEventListener('mouseout', function(event) {
      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = '200'; 
    });
  }
  dayMouseOut()
  dayMouseOver()
}
pintaLi();

function myTask() {
  let getElement = document.querySelector(".my-tasks");
  let createElement = document.createElement("div");
  createElement.style.backgroundColor = "green";
  createElement.setAttribute("class", "task");
  getElement.appendChild(createElement);

  getElement = document.querySelector(".task");
  getElement.addEventListener("click", function (event) {
    console.log(event);
    if (auth == false) {
      auth = true;
    } else {
      auth = false;
    }
    console.log(auth);
  });
}
myTask();
