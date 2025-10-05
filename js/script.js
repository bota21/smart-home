$(() => {
  const logoWrapper = document.querySelector(".main_logo_wrapper");
  const contentWrapper = document.querySelector(".main_content");
  const navigationType = performance.getEntriesByType("navigation")[0]?.type;
  let animationShown = localStorage.getItem("logoAnimationShown");

  // 🔄 Если страница перезагружается — сбрасываем флаг
  if (navigationType === "reload") {
    localStorage.removeItem("logoAnimationShown");
    animationShown = null;
  }

  if (!animationShown) {
    // ✅ Первый визит — запускаем анимацию и СРАЗУ записываем флаг
    localStorage.setItem("logoAnimationShown", "true");

    if (logoWrapper) {
      logoWrapper.classList.add("animate");
      logoWrapper.addEventListener("animationend", () => {
        logoWrapper.style.display = "none";
      });
    }

    if (contentWrapper) {
      contentWrapper.classList.add("animate");
    }
  } else {
    // ✅ Если уже была — не запускаем анимацию вообще
    if (logoWrapper) logoWrapper.style.display = "none";
    if (contentWrapper) contentWrapper.classList.remove("animate");
  }
});
