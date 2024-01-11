document.querySelector(".menue").addEventListener("click", () => {
  document.querySelectorAll(".target").forEach((item) => {
    item.classList.toggle("change");
  });
});

const icons = document.querySelectorAll(".section-1-icons i");
let i = 1;
setInterval(() => {
  i++;
  const icon = document.querySelector(".section-1-icons .change");

  icon.classList.remove("change");
  if (i > icons.length) {
    i = 1;
    icons[0].classList.add("change");
  } else {
    icon.nextElementSibling.classList.add("change");
  }
}, 2000);
