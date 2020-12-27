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
     searchIcon = document.querySelector("[alt='search']"),
     navSearchField = document.querySelector("#search-input");


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

