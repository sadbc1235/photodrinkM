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

// if click booth name effect

for(let i=0; i<itemNames.length; i++) {
  itemNames[i].addEventListener("click", () => {

    let currentBooth = boothBoxWrapp.querySelector(".active");
    let currentName = boothNames.querySelector(".active");
    let nextIndex = parseInt(itemNames[i].getAttribute("data-index"));;
  
    for(let i=0; i<boothLen; i++) {
      boothBoxs[i].style.display = "block";
      boothNameBoxs[i].style.opacity = 0;
      conceptBtns[i].style.opacity = 0;
      boothExplains[i].style.opacity = 0;
    }
  
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
}

// concept sample item click event
const conceptBoxWrapp = document.querySelector(".conceptBoxWrapp");
const conceptBoxs = conceptBoxWrapp.querySelectorAll(".conceptBox");

for(let i=0; i<conceptBoxs.length; i++) {
  const itemSamples = conceptBoxs[i].querySelectorAll(".itemSample");
  const imgSamples = conceptBoxs[i].querySelectorAll("img");

  for (let i=0; i<itemSamples.length; i++) {
    itemSamples[i].addEventListener("click", () => {
      for(let i=0; i<imgSamples.length; i++) {
        imgSamples[i].classList.remove("active");
      }
      imgSamples[i].classList.add("active");
    })
  }
}

// switch concepts effect
const upBtn = document.querySelector(".upArrow");
let upText = upBtn.querySelector(".arrowName");
const downBtn = document.querySelector(".downArrow");
let downText = downBtn.querySelector(".arrowName");

upBtn.addEventListener("click", () => {
  let currentConcept = conceptBoxWrapp.querySelector(".conceptBox.active");
  let currentIndexConcept = parseInt(currentConcept.getAttribute("data-index"));
  let nextIndexConcept = null;

  let currentSampleBox = currentConcept.querySelector(".sampleBox");


  currentIndexConcept !== conceptBoxs.length-1
    ? (nextIndexConcept = currentIndexConcept+1)
    : (nextIndexConcept = 0);

  let nextSampleBox = conceptBoxs[nextIndexConcept].querySelector(".sampleBox");

  currentSampleBox.classList.remove("active");

  setTimeout(() => {
    currentConcept.classList.add("up");
    currentConcept.classList.remove("active");
    conceptBoxs[nextIndexConcept].classList.add("down");

    setTimeout(() => {
      conceptBoxs[nextIndexConcept].classList.add("active");
      conceptBoxs[nextIndexConcept].classList.remove("down");
      upText.querySelector("h3").innerText = conceptBoxs[(nextIndexConcept === conceptBoxs.length-1) ? 0 : nextIndexConcept + 1].querySelector("h2").innerText;
      downText.querySelector("h3").innerText = conceptBoxs[currentIndexConcept].querySelector("h2").innerText;
      currentConcept.classList.remove("up")

      setTimeout(() => {
        nextSampleBox.classList.add("active");
      }, 480)

    }, 400);

  }, 300)
})

downBtn.addEventListener("click", () => {
  let currentConcept = conceptBoxWrapp.querySelector(".conceptBox.active");
  let currentIndexConcept = parseInt(currentConcept.getAttribute("data-index"));
  let nextIndexConcept = null;

  let currentSampleBox = currentConcept.querySelector(".sampleBox");


  currentIndexConcept !== 0
    ? (nextIndexConcept = currentIndexConcept-1)
    : (nextIndexConcept = conceptBoxs.length-1);

  let nextSampleBox = conceptBoxs[nextIndexConcept].querySelector(".sampleBox");

  currentSampleBox.classList.remove("active");

  setTimeout(() => {
    currentConcept.classList.add("down");
    currentConcept.classList.remove("active");
    conceptBoxs[nextIndexConcept].classList.add("up");

    setTimeout(() => {
      conceptBoxs[nextIndexConcept].classList.add("active");
      conceptBoxs[nextIndexConcept].classList.remove("up");
      downText.querySelector("h3").innerText = conceptBoxs[(nextIndexConcept === 0) ? conceptBoxs.length-1 : nextIndexConcept - 1].querySelector("h2").innerText;
      upText.querySelector("h3").innerText = conceptBoxs[currentIndexConcept].querySelector("h2").innerText;
      currentConcept.classList.remove("down")

      setTimeout(() => {
        nextSampleBox.classList.add("active");
      }, 480)

    }, 400);

  }, 300)
})