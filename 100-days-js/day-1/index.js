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

function slideIn(spans) {
  time = 100;
  for (const span of spans) {
    setTimeout(() => {
      span.classList.add("slide-in");
    }, time);
    time += 100;
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
