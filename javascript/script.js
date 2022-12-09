/* ====================== STARRY BACKGROUND ====================== */
//variable for amount of stars
const starAmount = 800;

//loop to create 800 stars based off randomized "co-ordinates" from randomize function
for (let i = 0; i < starAmount; i++) {
  let star = document.createElement("div");

  star.className = "stars";

  let xy = randomize();

  star.style.top = `${xy[0]}px`;
  star.style.left = `${xy[1]}px`;

  document.body.append(star);
}

//randomize function to randomize co-ordinates x,y
function randomize() {
  let x = window.innerHeight;
  let y = window.innerWidth;
  let ranX = Math.floor(Math.random() * x);
  let ranY = Math.floor(Math.random() * y);
  return [ranX, ranY];
}

/* ====================== PLAY ANIMATION AND MUSIC ====================== */

let btnElement = document.getElementById("btn");

btnElement.addEventListener("click", function () {
  setTimeout(function () {
    document.getElementById("background-music").play();
    console.log("Audio played now, when the Star Wars logo flies in");
  }, 8600);
  btnElement.classList.toggle("hideButton");
  playAll();
  // console.log("test");
});

function playAll() {
  let introElement = document.getElementsByClassName("intro");
  introElement.classList.toggle("playShow");

  let logoElement = document.getElementsByClassName("logo");
  logoElement.classList.toggle("playShow");

  let crawlTextElement = document.getElementsByClassName("crawl-text");
  crawlTextElement.classList.toggle("playShow");
}

// playAll();

// btnElement.addEventListener("click", function () {
//   let introElement = document.getElementsByClassName("intro");
//   let logoElement = document.getElementsByClassName("logo");
//   let crawlTextElement = document.getElementsByClassName("crawl-text");

//   function playAll() {
//     introElement.classList.toggle("playShow");
//     logoElement.classList.toggle("playShow");
//     crawlTextElement.classList.toggle("playShow");
//   }

//   if (
//     introElement.style.animationPlayState === "running" &&
//     introElement.style.display === "block" &&
//     logoElement.style.animationPlayState === "running" &&
//     logoElement.style.display === "block" &&
//     crawlTextElement.style.animationPlayState === "running" &&
//     crawlTextElement.style.display === "block"
//   ) {
//     introElement.style.animationPlayState = "paused";
//     introElement.style.display = "none";
//     logoElement.style.animationPlayState = "paused";
//     logoElement.style.display = "none";
//     crawlTextElement.style.animationPlayState = "paused";
//     crawlTextElement.style.display = "none";
//   } else {
//     introElement.style.animationPlayState = "running";
//     introElement.style.display = "block";
//     logoElement.style.animationPlayState = "running";
//     logoElement.style.display = "block";
//     crawlTextElement.style.animationPlayState = "running";
//     crawlTextElement.style.display = "block";
//   }
// });
