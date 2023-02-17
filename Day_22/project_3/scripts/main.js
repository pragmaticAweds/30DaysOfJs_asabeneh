const {
  author,
  challengeSubtitle,
  challengeTitle,
  challengeYear,
  challenges,
  description,
  keywords,
} = asabenehChallenges2020;

//Creating of variables
const body = document.body;
const wrapper = document.querySelector(".wrapper");
const challengeHeading = document.createElement("h1");
const challengeYearContainer = document.createElement("span");
const challengeSubtitleContainer = document.createElement("h2");
const dateContainer = document.createElement("p");

let colors;

//Functions
const colorChange = () => {
  let random1 = Math.floor(Math.random() * 255);
  let random2 = Math.floor(Math.random() * 255);
  let random3 = Math.floor(Math.random() * 255);
  colors = `rgb(${random1},${random2},${random3})`;
  challengeYearContainer.style.color = colors;
};
setInterval(colorChange, 1000);

const dateFunction = () => {
  const now = new Date();
  const years = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();
  const hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let mon = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  );
  let monn = mon[month];

  return `${monn} ${date}, ${years} ${hours}:${minutes}:${seconds}`;
};

//Creating of Functionality

challengeHeading.textContent = `${challengeTitle} in `;
challengeYearContainer.textContent = challengeYear;
challengeSubtitleContainer.textContent = challengeSubtitle;
dateContainer.textContent = dateFunction();

//Appending variables to parent
wrapper.appendChild(challengeHeading);
wrapper.appendChild(challengeSubtitleContainer);
wrapper.appendChild(dateContainer);

challengeHeading.appendChild(challengeYearContainer);

//Creating of Styles
challengeHeading.style.fontSize = "1.5rem";
challengeYearContainer.style.fontSize = "4rem";

challengeSubtitleContainer.style.fontSize = "1.2rem";
challengeSubtitleContainer.style.margin = 0;
challengeSubtitleContainer.style.fontWeight = 200;
challengeSubtitleContainer.style.textDecoration = "underline";

//body styles
body.style.margin = 0;
body.style.padding = 0;
body.style.height = "100vh";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.fontFamily = "sans-serif";
body.style.textAlign = "center";

// wrapper.style.backgroundColor = "";
