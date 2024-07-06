addEventListener("DOMContentLoaded", (event) => {
  const shareBtn = document.querySelector(".share");
  const showComponent = document.querySelector(".show-component");
  const c1 = document.querySelector(".change-footer");
  const c2 = document.querySelector(".mobile-footer-change");

  c2.classList.add("hidden");
  if (window.matchMedia("(max-width: 660px)").matches) {
    shareBtn.addEventListener("click", () => {
      c1.classList.add("hidden");
      c2.classList.remove("hidden");
      c2.classList.add("visible");
    });
  }

  showComponent.style.display = " ";
  showComponent.style.display = "none";

  shareBtn.onmouseover = function () {
    showComponent.style.display = "block";
  };

  shareBtn.onmouseout = function () {
    showComponent.style.display = "none";
  };
});
