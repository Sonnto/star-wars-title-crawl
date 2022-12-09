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
let introElement = document.getElementById("intro");
let logoElement = document.getElementById("logo");
let crawlTextElement = document.getElementById("crawl-text");

btnElement.addEventListener("click", function () {
  console.log(introElement.style.animationPlayState);
  function playAll() {
    introElement.style.animationPlayState = "running";
    introElement.style.display = "block";
    logoElement.style.animationPlayState = "running";
    logoElement.style.display = "block";
    crawlTextElement.style.animationPlayState = "running";
    crawlTextElement.style.display = "block";
    btnElement.style.display = "none";
    console.log(introElement.style.animationPlayState);
  }
  playAll();
  setTimeout(function () {
    document.getElementById("background-music").play();
    console.log("Audio played now, when the Star Wars logo flies in");
  }, 8600);
  console.log("hi");
});
