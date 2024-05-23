const mainContainer = document.querySelector(".main-container");
const thankContainer = document.querySelector(".thank-you");
const submitButton = document.querySelector("#submit");
const rateAgain = document.querySelector("#rate-again");
const rating = document.querySelector("#rating");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
  thankContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
});

rateAgain.addEventListener("click", () => {
  thankContainer.classList.add("hidden");
  mainContainer.style.display = "block";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
