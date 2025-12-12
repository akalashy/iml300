document.addEventListener("DOMContentLoaded", () => {
  const nameWrapper = document.querySelector(".name-wrapper");
  if (!nameWrapper) return;

  nameWrapper.addEventListener("mouseenter", () => {
    nameWrapper.classList.add("is-hovered");
  });

  nameWrapper.addEventListener("mouseleave", () => {
    nameWrapper.classList.remove("is-hovered");
  });
});
