const form = document.querySelector(".form");
const numberOne = document.querySelector(".number-one");
const numberTwo = document.querySelector(".number-two");

form.addEventListener("submit", function (reload) {
  reload.preventDefault();

  if (numberTwo.value > numberOne.value) {
    const containerPositiveMessage =
      document.querySelector(".positive-message");
    containerPositiveMessage.style.display = "block";

    const containerNegativeMessage =
      document.querySelector(".negative-message");
    containerNegativeMessage.style.display = "none";
  } else {
    const containerNegativeMessage =
      document.querySelector(".negative-message");
    containerNegativeMessage.style.display = "block";

    const containerPositiveMessage =
      document.querySelector(".positive-message");
    containerPositiveMessage.style.display = "none";
  }
});
