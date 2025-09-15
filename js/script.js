$(() => {
  const wrapper = document.querySelector(".main_logo_wrapper");

  // Проверяем, был ли показ анимации ранее
  const animationShown = localStorage.getItem("logoAnimationShown");
  const navigationType = performance.getEntriesByType("navigation")[0]?.type;

  // Если пользователь сделал F5 или Ctrl+R — сбрасываем флаг
  if (navigationType === "reload") {
    localStorage.removeItem("logoAnimationShown");
  }

  // Если анимация не показывалась — запускаем
  if (!localStorage.getItem("logoAnimationShown")) {
    if (wrapper) {
      wrapper.classList.add("animate");
      wrapper.addEventListener("animationend", () => {
        wrapper.style.display = "none";
      });
    }
    localStorage.setItem("logoAnimationShown", "true");
  } else {
    // Если уже была — скрываем сразу
    if (wrapper) wrapper.style.display = "none";
  }
});
