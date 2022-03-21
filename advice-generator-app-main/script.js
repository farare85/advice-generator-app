const adviceNumber = document.querySelector(".number");
const adviceText = document.querySelector(".text");
const iconBox = document.querySelector(".icon-box");

const adviceFunction = async function (dat) {
  const advice = await fetch("https://api.adviceslip.com/advice");
  return (adviceData = await advice.json());
};

const displayAdvice = async function () {
  const advice = await adviceFunction();
  adviceNumber.textContent = advice.slip.id;
  adviceText.textContent = advice.slip.advice;
};

displayAdvice();
iconBox.addEventListener("click", displayAdvice);
