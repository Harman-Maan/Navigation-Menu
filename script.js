let imgArea = document.querySelector(".imgArea");
console.log(imgArea.style.display);
console.log(window.innerWidth);

function changeimage(a) {
  if (window.innerWidth > 850) {
    document.getElementById("slider").src = a;
  }
}

function ToggleMenu() {
  let menuToggle = document.querySelector(".menuToggle");
  let navigation = document.querySelector(".navigation");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}
