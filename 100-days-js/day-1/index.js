(function () {
  const title = document.querySelector(".animatable");
  const subtitle = document.querySelector(".animate-slide");

  const titleText = title.textContent.trim();
  const subtitleText = subtitle.textContent.trim();

  const subtitleSplit = subtitleText.split("");

  let subtitlehtml = "";
  for (const elem of subtitleSplit) {
    subtitlehtml += `<span>${elem}</span>`;
  }

  subtitle.innerHTML = subtitlehtml;

  setTimeout(() => slideIn(subtitle.querySelectorAll("span")), 1000);
})();

function slideIn(elems) {
  time = 100;
  for (const elem of elems) {
    setTimeout(() => {
      elem.classList.add("slide-in");
    }, time);
    time += 100;
  }
}
