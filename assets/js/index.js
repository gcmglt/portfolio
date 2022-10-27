// definite le const per l'animazione
const textAnim = document.querySelector(".text-animation").children,
  textAnimLen = textAnim.length;
let index = 0;
// timer facilmente modificabile
const textInTimer = 1400,
  textOutTimer = 1200;

function textAnimation() {
  for (let i = 0; i < textAnimLen; i++) {
    textAnim[i].classList.remove("text-in", "text-out");
  }
  textAnim[index].classList.add("text-in");

  setTimeout(function () {
    textAnim[index].classList.add("text-out");
  }, textOutTimer);

  setTimeout(function () {
    if (index == textAnimLen - 1) {
      index = 0;
    } else {
      index++;
    }
    textAnimation();
  }, textInTimer);
}

window.onload = textAnimation;

// animazione migliorabile ma devo ancora studiare bene js per capire come fare
