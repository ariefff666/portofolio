var wavess = document.querySelectorAll(".waves");

function darkMode() {
  var element = document.body;
  element.dataset.bsTheme = "dark";

  wavess.forEach(function (waves) {
    waves.classList.remove("wavesL");
    waves.classList.add("wavesD");
  });
}
function lightMode() {
  var element = document.body;
  element.dataset.bsTheme = "light";

  wavess.forEach(function (waves) {
    waves.classList.remove("wavesD");
    waves.classList.add("wavesL");
  });
}
