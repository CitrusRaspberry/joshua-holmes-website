const cursorColor = "#f6511d";
const cursorSpeed = 500;
const typeSpeed = [15, 200];

const cursorAll = document.querySelectorAll('span.cursor');

const textLanding = "software developer";
const pLanding = document.querySelector("#intro .type");
const cursorLanding = document.querySelector("#landing-page span.cursor");

const scrollPrompt = document.querySelector(".scroll-prompt");

let cursorIsSolid = true;
let i = 0;

function setCursors() {
  for (let element of cursorAll) {
    element.style.borderColor = cursorColor;

    cursorSolid(element, cursorColor);
  }
}

function cursorBlink(cursor, color) {
  setInterval(() => {
    if (cursorIsSolid) {
      cursorWhite(cursor);
      cursorIsSolid = false;
    } else {
      cursorSolid(cursor, color);
      cursorIsSolid = true;
    }
  }, cursorSpeed);
}

function cursorWhite(cursor) {
  cursor.style.backgroundColor = "white";
  cursor.style.color = "white";
}

function cursorSolid(cursor, color) {
  cursor.style.backgroundColor = color;
  cursor.style.color = color;
}

function typeWriter(element, text, cursor) {
  if (i < text.length) {
    element.append(text[i]);
    element.append(cursor);
    const waitTime = randInt(typeSpeed[0], typeSpeed[1]);
    setTimeout(() => {typeWriter(element, text, cursor)}, waitTime);
    i++;
  } else {
    cursorBlink(cursor, cursorColor);
  }
}

function randInt(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}

setCursors()
setTimeout(() => {typeWriter(pLanding, textLanding, cursorLanding)}, 500);
