document.addEventListener("DOMContentLoaded", () => {
  initTextMarquee2();
});

function initTextMarquee2() {
  const marquees = document.querySelectorAll(".text");

  marquees.forEach((container) => {
    for (let i = 0; i < 500; i++) {
      const item = document.createElement("div");
      item.classList.add("item");
      item.classList.add("text");
      item.innerHTML = `<img src="img/slide.png" alt="" />`;
      container.appendChild(item);
    }
  });
}
