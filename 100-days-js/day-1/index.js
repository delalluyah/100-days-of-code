(function () {
  const title = document.querySelector(".animatable");
  const subtitle = document.querySelector(".animate-slide");

  title.innerHTML = transformToSpans(splitUpContent(title));
  subtitle.innerHTML = transformToSpans(splitUpContent(subtitle));

  let colorIndex = 0;
  let forward = true;

  let x = setInterval(() => {
    colorize(title.querySelectorAll("span"), colorIndex++, forward);
    forward = !forward;
    if (colorIndex === 2) clearInterval(x);
    colorIndex = colorIndex % 2;
  }, 2000);

  setTimeout(() => slideIn(subtitle.querySelectorAll("span")), 1000);
})();

function splitUpContent(domElement) {
  let textContent = domElement.textContent.trim();
  return textContent.split("");
}

function fadeIn(spans) {
  let interval = 100;
  let time = interval;
  for (const span of spans) {
    setTimeout(() => {
      span.classList.add("fade-in");
    }, time);
    time += interval;
  }
}

function slideIn(spans) {
  let interval = 200;
  let time = interval;
  let drop = 20;
  // spans.reverse();
  for (const span of spans) {
    if (time < 0) time = 5;
    if (span.textContent === " ") span.style.width = "0.5rem";
    setTimeout(() => {
      span.classList.add("move-right");
    }, time);
    time += interval - drop++;
  }
}

function transformToSpans(stringArray) {
  let htmlstring = "";
  for (const str of stringArray) {
    htmlstring += `<span>${str}</span>`;
  }
  return htmlstring;
}

function colorize(spans, colorIndex, forward) {
  const colors = [
    "green",
    "#fff",
    "red",
    "blue",
    "orange",
    "yellow",
    "purple",
    "brown",
    "violet",
    "white",
    "pink",
  ];
  spans = Array.from(spans);

  if (!forward) spans.reverse();

  let timer = 100;
  for (let span of spans) {
    setTimeout(() => (span.style.color = colors[colorIndex]), timer);
    timer += 100;
  }
}
