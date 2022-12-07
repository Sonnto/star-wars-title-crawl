const stars = 400;

for (let i = 0; i < stars; i++) {
  let star = document.createElement("div");
  star.className = "stars";
  let xy = randomize();
  star.style.top = xy[0] + "px";
  star.style.left = xy[1] + "px";
  document.body.append(star);
}

function randomize() {
  let y = window.innerWidth;
  let x = window.innerHeight;
  let randomX = Math.floor(Math.random() * x);
  let randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}
