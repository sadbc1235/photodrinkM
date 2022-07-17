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

    }, 350);

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
  
      }, 350);
  
  })
}

// concept sample item click event
const conceptBoxWrapp = document.querySelector(".conceptBoxWrapp");
const conceptBoxs = conceptBoxWrapp.querySelectorAll(".conceptBox");

for(let i=0; i<conceptBoxs.length; i++) {
  const itemSamples = conceptBoxs[i].querySelectorAll(".itemSample");
  const imgSamples = conceptBoxs[i].querySelectorAll("img");
  const itemNames = conceptBoxs[i].querySelectorAll(".sampleName");

  for (let i=0; i<itemSamples.length; i++) {
    itemSamples[i].addEventListener("click", () => {
      
      for(let i=0; i<imgSamples.length; i++) {
        imgSamples[i].classList.remove("active");
        itemNames[i].classList.remove("active");
      }
      imgSamples[i].classList.add("active");
      itemNames[i].classList.add("active");
    })
  }
}

// switch concepts effect
const upBtn = document.querySelector(".upArrow");
let upText = upBtn.querySelector(".arrowName");
const downBtn = document.querySelector(".downArrow");
let downText = downBtn.querySelector(".arrowName");
let conceptBoxLength = 3;

upBtn.addEventListener("click", () => {
  let currentConcept = conceptBoxWrapp.querySelector(".conceptBox.active");
  let currentIndexConcept = parseInt(currentConcept.getAttribute("data-index"));
  let nextIndexConcept = null;

  let currentSampleBox = currentConcept.querySelector(".sampleBox");


  currentIndexConcept !== conceptBoxLength-1
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
      upText.querySelector("h3").innerText = conceptBoxs[(nextIndexConcept === conceptBoxLength-1) ? 0 : nextIndexConcept + 1].querySelector("h2").innerText;
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
    : (nextIndexConcept = conceptBoxLength-1);

  let nextSampleBox = conceptBoxs[nextIndexConcept].querySelector(".sampleBox");

  currentSampleBox.classList.remove("active");

  setTimeout(() => {
    currentConcept.classList.add("down");
    currentConcept.classList.remove("active");
    conceptBoxs[nextIndexConcept].classList.add("up");

    setTimeout(() => {
      conceptBoxs[nextIndexConcept].classList.add("active");
      conceptBoxs[nextIndexConcept].classList.remove("up");
      downText.querySelector("h3").innerText = conceptBoxs[(nextIndexConcept === 0) ? conceptBoxLength-1 : nextIndexConcept - 1].querySelector("h2").innerText;
      upText.querySelector("h3").innerText = conceptBoxs[currentIndexConcept].querySelector("h2").innerText;
      currentConcept.classList.remove("down")

      setTimeout(() => {
        nextSampleBox.classList.add("active");
      }, 480)

    }, 400);

  }, 300)
})

// Move to concept page from booth page
const boothBtnBox = document.querySelector(".boothBtnBox");
const footer = document.querySelector("footer");

for(let i=0; i<conceptBtns.length; i++) {
  conceptBtns[i].addEventListener("click", () => {

    if(i === 0 || i === 1) {
      conceptBoxLength = 3;
    } else if (i === 2) {
      conceptBoxLength = 4;
    }


    boothBoxWrapp.classList.add("active");
    boothBtnBox.classList.add("active");
    boothBtnBox.style.display = "none";
    footer.classList.add("active");

    setTimeout(() => {
      conceptBoxWrapp.classList.remove("active");
      conceptBoxs[0].classList.add("active");
      conceptBoxs[0].querySelectorAll("img")[0].classList.add("active");
      conceptBoxs[0].querySelectorAll(".sampleName")[0].classList.add("active");

      setTimeout(() => {
        conceptBoxs[0].querySelector(".sampleBox").classList.add("active");
      }, 300)

    }, 200)
    
  })
}

// Move to booth page from concept page
const backBtns = document.querySelectorAll(".backBtn");

for(let i=0; i<backBtns.length; i++) {
  backBtns[i].addEventListener("click", () => {

    for(let i=0; i<conceptBoxs.length; i++) {
      conceptBoxs[i].classList.remove("active");
      conceptBoxs[i].querySelector(".sampleBox").classList.remove("active");
    }

    setTimeout(() => {
      boothBtnBox.style.display = "flex";
      conceptBoxWrapp.classList.add("active");

      setTimeout(() => {
        boothBoxWrapp.classList.remove("active");
        boothBtnBox.classList.remove("active");
        footer.classList.remove("active");

        for(let i=0; i<conceptBoxs.length; i++) {
          for(let j=0; j<conceptBoxs[i].querySelectorAll("img").length; j++) {
            conceptBoxs[i].querySelectorAll("img")[j].classList.remove("active");
            conceptBoxs[i].querySelectorAll(".sampleName")[j].classList.remove("active");  
          }
          conceptBoxs[i].querySelectorAll("img")[0].classList.add("active");
          conceptBoxs[i].querySelectorAll(".sampleName")[0].classList.add("active");  
        }

      }, 300)

    }, 200)
    

    
  })
}

