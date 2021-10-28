const cursorColor = "#f6511d";
const cursorSpeed = 500;
const typeSpeed = [15, 210];
const address = "joshua.phillip.holmes";
const domain = "gmail.com";

const cursorAll = document.querySelectorAll('span.cursor');

const textLanding = "software developer";
const pLanding = document.querySelector("#intro .type");
const cursorLanding = document.querySelector("#landing-page span.cursor");

const scrollPrompt = document.querySelector(".scroll-prompt");

const github = document.querySelector("#github");
const linkedin = document.querySelector("#linkedin");
const email = document.querySelector("#email");


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

function insertEmailAddress() {
  const emailAddress = `${address}@${domain}`;
  email.setAttribute("href", `mailto:${emailAddress}`);
}

function openEnvelope() {
  const svg = email.querySelector("svg");
  const path = email.querySelector("path");
  svg.setAttribute("class", "bi bi-envelope-open-fill");
  path.setAttribute("d", "M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l6.709 3.933L8 8.928l1.291.717L16 5.715V5.4a2 2 0 0 0-1.059-1.765l-6-3.2zM16 6.873l-5.693 3.337L16 13.372v-6.5zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516zM0 13.373l5.693-3.163L0 6.873v6.5z");
}

function closeEnvelope() {
  const svg = email.querySelector("svg");
  const path = email.querySelector("path");
  svg.setAttribute("class", "bi bi-envelope-fill");
  path.setAttribute("d", "M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z");
}




setCursors()
setTimeout(() => {typeWriter(pLanding, textLanding, cursorLanding)}, 500);


email.addEventListener("click", insertEmailAddress);
email.addEventListener("mouseenter", openEnvelope);
email.addEventListener("mouseleave", closeEnvelope);
