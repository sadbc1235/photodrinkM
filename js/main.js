// switch booth effect
const boothBtn = document.querySelector(".boothBtn");
const boothBoxWrapp = document.querySelector(".boothBoxWrapp");
const boothBoxs = boothBoxWrapp.querySelectorAll(".boothBox");
const boothLen = boothBoxs.length;
// booth names effect
const boothNames = document.querySelector(".boothNames");
const itemNames = boothNames.querySelectorAll(".itemName");
// booth name, conceptBtn, explain fade out effect
const boothNameBoxs = document.querySelectorAll(".boothNameBox");
const conceptBtns = document.querySelectorAll(".conceptBtn");
const boothExplains = document.querySelectorAll(".boothExplain");

boothBtn.addEventListener("click", () => {

  let currentBooth = boothBoxWrapp.querySelector(".active");
  let currentName = boothNames.querySelector(".active");
  let currentIndex = parseInt(currentBooth.getAttribute("data-index"));
  let nextIndex = null;

  for(let i=0; i<boothLen; i++) {
    boothBoxs[i].style.display = "block";
    boothNameBoxs[i].style.opacity = 0;
    conceptBtns[i].style.opacity = 0;
    boothExplains[i].style.opacity = 0;
  }

  currentIndex !== boothLen-1
    ? (nextIndex = currentIndex+1)
    : (nextIndex = 0);

    setTimeout(() => {
      currentBooth.classList.add("left");
      currentBooth.classList.remove("active");
      currentName.classList.remove("active");
      boothBoxs[nextIndex].classList.add("right");

      setTimeout(() => {
        boothBoxs[nextIndex].classList.add("active");
        itemNames[nextIndex].classList.add("active");
        boothBoxs[nextIndex].classList.remove("right");
        currentBooth.classList.remove("left");

        for(let i=0; i<boothLen; i++) {
          if (i !== nextIndex) {
            boothBoxs[i].style.display = "none";
          }
        }

        setTimeout(() => {
          for(let i=0; i<boothLen; i++) {
            boothNameBoxs[i].style.opacity = 1;
            conceptBtns[i].style.opacity = 1;
            boothExplains[i].style.opacity = 1;
          }
        }, 600)

      }, 500)

    }, 500);

})