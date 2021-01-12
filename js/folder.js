// UI variable

let folderContainer = document.querySelector("#folder-section"),
    folder = document.querySelector(".folder__folder-container"),
    bodyUI = document.querySelector(".main");

body.addEventListener("click", (e) => {
  if (folderContainer.className === "folder") {
    folder.id = "grid-list-view";
    console.log("here man");
    console.log(folderContainer.className.includes("folder--list-view"));
  };
  
  if (folderContainer.className.includes("folder--list-view")) {
    folder.id = "";
    console.log("here young man");
  }
})