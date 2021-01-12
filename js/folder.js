// UI variable

let folderContainer = document.querySelector("#folder-section"),
    folders = document.querySelectorAll(".folder__folder-container"),
    bodyUI = document.querySelector(".main");

body.addEventListener("click", (e) => {
  if (folderContainer.className === "folder") {
    folders.forEach(folder => {
      folder.id = "grid-list-view";
    });
  };
  
  if (folderContainer.className.includes("folder--list-view")) {
    folders.forEach(folder => {
      folder.id = "";
    });
  }
})