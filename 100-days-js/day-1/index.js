(function () {
  const title = document.querySelector(".animatable");
  const subtitle = document.querySelector(".animate-slide");

  title.innerHTML = transformToSpans(splitUpContent(title));
  subtitle.innerHTML = transformToSpans(splitUpContent(subtitle));

  let colorIndex = 0;

  setInterval(() => {
    colorize(title.querySelectorAll("span"), colorIndex);
    colorIndex = (colorIndex + 1) % 10;
  }, 2500);

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

function colorize(spans, colorIndex) {
  const colors = [
    "green",
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

  console.log(colorIndex);
  let timer = 100;
  for (let span of spans) {
    setTimeout(() => (span.style.color = colors[colorIndex]), timer);
    timer += 100;
  }
}
