var button = document.querySelector(".button");
var icon = document.querySelector(".icon");
var text = document.querySelector(".text");
var count = document.querySelector(".count");
var countValue = 147;

document.addEventListener("DOMContentLoaded", () => {
  count.innerHTML = countValue;
});
function addValue() {
  countValue++;
  count.innerHTML = countValue;
  console.log("added like");
}

function clickButton() {
  button.classList.toggle("is-active");
  icon.classList.toggle("is-active");
  text.classList.toggle("is-active");
  count.classList.toggle("is-active");

  addValue();

  setTimeout(function () {
    button.classList.remove("is-active");
  }, 2000);

  setTimeout(function () {
    icon.classList.remove("is-active");
  }, 2000);

  setTimeout(function () {
    text.classList.remove("is-active");
  }, 2000);

  setTimeout(function () {
    count.classList.remove("is-active");
  }, 2000);
}

button.addEventListener("click", clickButton);
