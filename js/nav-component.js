/**
 * All document variables for the nav,
 * containing all of the nav's child elements.
 */

 let navUI = document.querySelector(".nav"),
     goBackUI = document.querySelector(".left-arrow-btn"),
     goForwardUI = document.querySelector(".right-arrow-btn"),
     dirContainer = document.querySelector(".nav__location--active"),
     directory = document.querySelector(".pwd"),
     firstDirContainer = document.querySelector(".pwd--first-path"),
     firstDirName  = document.querySelector(".pwd__path-name"),
     primaryModal = document.querySelector(".modal--primary-actions"),
     searchContainer = document.querySelector(".search-active"),
     searchBtn = document.querySelector(".nav__search-container"),
     navSearchField = document.querySelector("#search-input"),
     searchFieldDropDown = document.querySelector(".down-arrow-btn"),
     body = document.querySelector(".main"),
     searchModal = document.querySelector(".modal--search-actions"),
     viewOptionsBtn = document.querySelector(".nav__view-options"),
     viewOptionsModal = document.querySelector(".modal--view-options"),
     otherOptionsBtn = document.querySelector(".nav__other-actions"),
     otherOptionsModal = document.querySelector(".modal--secondary-actions");

/**
 * All document variables that will created 
 * and loaded in the DOM through js
 */

let secondDirContainer = `
  <div class="pwd pwd--second-path">
    <span class="pwd__path-name">Documents</span>
    
    <span class="down-arrow-btn">
      <img src="./assets/svg/down-arrow.svg" alt="down-arrow">
    </span>
  </div>
`;


//Eventlistener to control the display of the directory modal or hide it.
dirContainer.addEventListener('click', (e) => {
  if (e.target.closest(".pwd") && e.target.closest(".pwd").lastElementChild.className == "down-arrow-dir" && primaryModal.style.display == "") {
    e.target.closest(".pwd").style.backgroundColor = "#8c97a0";
    setTimeout(() => {
      e.target.closest(".pwd").style.backgroundColor = "#fcfbfa";
      primaryModal.style.display = "block";
    }, 200);
  } else {
    if (e.target.closest(".pwd") && e.target.closest(".pwd").lastElementChild.className == "down-arrow-dir" && primaryModal.style.display == "block") {
      primaryModal.style.display = "";
    }
  }
});


//Eventlistener to control the display of the search field or hide the search field.
searchContainer.addEventListener("click", (e) => {
  if (searchModal.style.display == "" && (e.target.classList.contains("down-arrow-btn") || e.target.alt == "down-arrow")) {
    BtnBackgroundColorAnimate(searchFieldDropDown, true);
    searchModal.style.display = "block";
  } else {
    if(searchModal.style.display == "block" && (e.target.classList.contains("down-arrow-btn") || e.target.alt == "down-arrow")) {
      BtnBackgroundColorAnimate(searchFieldDropDown, false);
      searchModal.style.display = "";
    }
  }
});

// toggle the display of the search container and the search input
let searchContFlag = false
searchBtn.addEventListener("click", (e) => {
  if (!searchContFlag && (e.target.closest(".nav__search-container"))) {
    BtnBackgroundColorAnimate(searchBtn, true);
    dirContainer.style.display = "none";
    searchContainer.style.display = "flex";
    searchContFlag = true;
  } else {
    if (searchContFlag && e.target.closest(".nav__search-container")) {
      BtnBackgroundColorAnimate(searchBtn, false);
      dirContainer.style.display = "flex";
      searchContainer.style.display = "none";
      searchContFlag = false;
    }
  }
});

// toggle the display of the view options modal
let viewOptionsFlag = false;

viewOptionsBtn.addEventListener("click", (e) => {
  if ((e.target.closest(".nav__view-options") && !viewOptionsFlag) || e.target.closest(".modal--view-options")) {
    BtnBackgroundColorAnimate(viewOptionsBtn, true);
    viewOptionsModal.style.display = "block";
    viewOptionsFlag = true;
  } else {
    if (viewOptionsFlag && e.target.closest(".nav__view-options")) {
      BtnBackgroundColorAnimate(viewOptionsBtn, false);
      viewOptionsModal.style.display = "";
      viewOptionsFlag = false;
    }
  }
});

//toggle the display of modal--others-options
let otherOptionsFlag = false;
otherOptionsBtn.addEventListener("click", (e) => {
  if ((e.target.closest(".nav__other-actions") && !otherOptionsFlag) || e.target.closest(".modal--secondary-actions")) {
    BtnBackgroundColorAnimate(otherOptionsBtn, true);
    otherOptionsModal.style.display = "block";
    otherOptionsFlag = true;
  } else {
    if (otherOptionsFlag && e.target.closest(".nav__other-actions")) {
      BtnBackgroundColorAnimate(otherOptionsBtn, false);
      otherOptionsModal.style.display = "";
      otherOptionsFlag = false;
    }
  }
});

body.addEventListener('click', (e) => {
  if (e.target.alt != "down-arrow") {
    if(!e.target.closest(".down-arrow-btn") && !e.target.classList.contains("down-arrow-btn")) {
      BtnBackgroundColorAnimate(searchFieldDropDown, false);
      searchModal.style.display = "";
    }

    if (!e.target.closest(".pwd")) {
      primaryModal.style.display = "";
    }

    if (!e.target.closest(".nav__view-options")) {
      BtnBackgroundColorAnimate(viewOptionsBtn, false);
      viewOptionsModal.style.display = "";
      viewOptionsFlag = false;
    }
    
    if (!e.target.closest(".nav__other-actions")) {
      BtnBackgroundColorAnimate(otherOptionsBtn, false);
      otherOptionsModal.style.display = "";
      otherOptionsFlag = false;
    }
  }
});

//custom functions for repeating features.

function BtnBackgroundColorAnimate(element, boolean) {
  if (boolean) {
    element.animate([
      { backgroundColor: '#8c97a0' }
    ], {
      duration: 200,
      fill: "forwards"
    });
  } else {
    element.animate([
      { backgroundColor: '#fcfbfa' }
    ], {
      duration: 200,
      fill: "forwards"
    });
  }
}