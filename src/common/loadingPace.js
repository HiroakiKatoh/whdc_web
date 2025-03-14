import { delay, animateEl } from "./customFunctions";

const loadingPace = () => {
  Pace.on("start", function () {
    //When Pace Start
    document.querySelector("#preloader").classList.remove("isdone");
  });
  Pace.on("done", function () {
    //When Pace End
    if (document.querySelector(".hamenu")) {
      delay(300, animateEl(document.querySelector(".hamenu"), "-100%"));
      const menuIcon = document.querySelector(".topnav .menu-icon");
      if (menuIcon) {
        menuIcon.classList.remove("open");
      }
    }
    const preloader = document.querySelector("#preloader");
    if (preloader) {
      preloader.classList.add("isdone");
    }
  });

  const body = document.querySelector("body");
  if (body && body.classList.contains("pace-done")) {
    document.querySelector("#preloader").classList.add("isdone");
  }

  document.addEventListener("load", () => {
    document.querySelector("#preloader").classList.add("isdone");
  });
};

export default loadingPace;
