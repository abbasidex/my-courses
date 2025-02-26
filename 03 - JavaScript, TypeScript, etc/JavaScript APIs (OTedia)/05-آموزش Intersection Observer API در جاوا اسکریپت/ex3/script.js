const boxes = document.querySelectorAll(".box");

const observer = new IntersectionObserver(
  (entries) => {
    console.log(entries);
    for (let entry of entries) {
      const ratio = entry.intersectionRatio;
      entry.target.style.opacity = ratio;
      entry.target.style.marginLeft = 40 - ratio * 40 + "%";
    }
  },
  {
    threshold: [
      0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65,
      0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
    ],
  }
);

boxes.forEach((b) => {
  observer.observe(b);
});
