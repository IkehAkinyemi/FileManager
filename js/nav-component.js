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
     searchModalDropBtn = document.querySelector("#search-modal-drop-arrow"),
     toggleBtn = document.querySelector(".nav__toggle-view"),
     viewOptionsBtn = document.querySelector(".nav__view-options"),
     viewOptionsModal = document.querySelector(".modal--view-options"),
     otherOptionsBtn = document.querySelector(".nav__other-actions"),
     otherOptionsModal = document.querySelector(".modal--secondary-actions"),
     cancelBtn = document.querySelector("[alt='cancel']");

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

// eventlistener to open other sections of the search modal.
searchModal.addEventListener("click", (e) => {
  if (e.target.className == "select-when-p") {
    searchModal.style.marginTop = "31.5rem";
    searchModal.style.marginLeft = "-26rem";
    searchModalDropBtn.style.right = "-4%";
    searchModalDropBtn.style.top = "0.5%";
    searchModalDropBtn.style.transform = "rotate(90deg)";
    document.querySelector(".select-when-p").style.display = "none";
    document.querySelector(".date-input").style.display = "flex";
    document.querySelector(".anything-input-container").style.display = "";
    document.querySelector(".date-input-container").style.display = "block";
  };

  if (e.target.closest(".anything-input")) {
    searchModal.style.marginTop = "32.5rem";
    searchModal.style.marginLeft = "1.3rem";
    searchModalDropBtn.style.right = "50%";
    searchModalDropBtn.style.top = "-15px";
    searchModalDropBtn.style.transform = "rotate(0deg)";
    document.querySelector(".select-when-p").style.display = "block";
    document.querySelector(".date-input").style.display = "none";
    document.querySelector(".date-input-container").style.display = "";
    document.querySelector(".anything-input-container").style.display = "block";
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

// control the toggle between the grid and list display of folders.
let toggleBtnFlag = true;

toggleBtn.addEventListener("click", (e) => {
  if (e.target.closest(".nav__toggle-view")) {
    toggleBtn.animate([
      { backgroundColor: '#8c97a0' }
    ], {
      duration: 250,
    });

    if(toggleBtnFlag) {
      document.querySelector("#list-view").style.display = "none";
      document.querySelector('#grid-view').style.display = "block";

      console.log(document.querySelector("#list-view"), document.querySelector('#grid-view'));
      toggleBtnFlag = false;
    } else {
      if (!toggleBtnFlag) {
        document.querySelector("#list-view").style.display = "block";
      document.querySelector('#grid-view').style.display = "none";

      console.log(document.querySelector("#list-view"), document.querySelector('#grid-view'));
      toggleBtnFlag = true;
      }
    }

    document.querySelector("#folder-section").classList.toggle("folder--list-view");
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

// the resize btn eventlistener for resizing the file manager window.
cancelBtn.addEventListener("click", (e) => {
 if (e.target.alt == "cancel") {
   body.remove();
 }
});

// EventListener on the body of the file manager to close any opened modal.
body.addEventListener('click', (e) => {
  if (e.target.alt != "down-arrow") {
    if(!e.target.closest(".down-arrow-btn") && !e.target.classList.contains("down-arrow-btn")) {
      BtnBackgroundColorAnimate(searchFieldDropDown, false);
      searchModal.style.display = "";
      searchModal.style.marginTop = "19.2rem";
      searchModal.style.marginLeft = "1.3rem";
      searchModalDropBtn.style.right = "50%";
      searchModalDropBtn.style.top = "-15px";
      searchModalDropBtn.style.transform = "rotate(0deg)";
      document.querySelector(".select-when-p").style.display = "block";
      document.querySelector(".date-input").style.display = "none";
      document.querySelector(".date-input-container").style.display = "";
      document.querySelector(".anything-input-container").style.display = "";

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
