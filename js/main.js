const btn = document.getElementById("scrollToTop");

window.onscroll = () => {
  btnDisplay();
}

function btnDisplay() {
  if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}
