let btn = document.querySelector(".back-to-top");
btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
window.onscroll = () => {
  if (window.scrollY > 150) {
    btn.style.cssText = "display:flex";
  } else {
    btn.style.cssText = "display:none";
  }
};
