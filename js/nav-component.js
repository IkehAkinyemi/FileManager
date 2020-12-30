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
     searchModal = document.querySelector(".modal--search-actions");


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
})


//Eventlistener to control the display of the search field or hide the search field.
searchContainer.addEventListener("click", (e) => {
  if (searchModal.style.display == "" && (e.target.classList.contains("down-arrow-btn") || e.target.alt == "down-arrow")) {
    searchModal.style.display = "block";
  } else {
    if(searchModal.style.display == "block" && (e.target.classList.contains("down-arrow-btn") || e.target.alt == "down-arrow")) {
      searchModal.style.display = "";
    }
  }
});

// toggle the display of the search container and the search input
let searchContFlag = false
searchBtn.addEventListener("click", (e) => {
  if (!searchContFlag && (e.target.closest(".nav__search-container") || e.target.className == "nav__search-container")) {
    dirContainer.style.display = "none";
    searchContainer.style.display = "flex";
    searchContFlag = true;
  } else {
    if (searchContFlag && (e.target.closest(".nav__search-container") || e.target.className == "nav__search-container")) {
      dirContainer.style.display = "flex";
      searchContainer.style.display = "none";
      searchContFlag = false;
    }
  }
})

body.addEventListener('click', (e) => {
  if (e.target.alt != "down-arrow") {
    if(!e.target.closest(".down-arrow-btn") && !e.target.classList.contains("down-arrow-btn")) {
      searchModal.style.display = "";
      isSearchModal = false;
    }

    if (!e.target.closest(".pwd")) {
      primaryModal.style.display = "";
    }
  }
});