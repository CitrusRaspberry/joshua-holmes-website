const cursorColor = "red";
const cursorSpeed = 500;
const typeSpeed = [25, 250];

const cursorAll = document.querySelector('span.cursor');

const textLanding = "software engineer";
const pLanding = document.querySelector("#paint p");
const cursorLanding = document.querySelector("#landing-page span.cursor");

const scrollPrompt = document.querySelector(".scroll-prompt");

var cursorIsSolid = true;
var i = 0;

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

cursorAll.style.borderColor = cursorColor;
cursorSolid(cursorAll, cursorColor);
setTimeout(() => {typeWriter(pLanding, textLanding, cursorLanding)}, 500);
