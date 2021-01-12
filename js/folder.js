// UI variable

let folderContainer = document.querySelector("#folder-section"),
    folders = document.querySelectorAll(".folder__folder-container"),
    folderNames = document.querySelectorAll(".folderName");
    bodyUI = document.querySelector(".main");

body.addEventListener("click", (e) => {
  if (folderContainer.className === "folder") {
    folders.forEach( folder => {
      folder.id = "grid-list-view";
    });
  };
  
  if (folderContainer.className.includes("folder--list-view")) {
    folders.forEach(folder => {
      folder.id = "";
    });
  }
});

folders.forEach( folder => {
  folder.addEventListener("click", (e) => {
    if ( !folderContainer.className.includes("folder--list-view") && 
    (e.target.className == "folder-name-span" || e.target.className == "folderIcon" ||e.target.className.includes("fa-folder"))) {
      folderNames.forEach( folderName => {
        folderName.style.backgroundColor = "unset";
        folderName.style.color = "unset";
        folderName.firstElementChild.style.wordBreak = "unset";
      });

      e.target.closest(".folder__folder-container").lastElementChild.style.backgroundColor = "#e05134";
      e.target.closest(".folder__folder-container").lastElementChild.firstElementChild.style.wordBreak = "break-all";
      e.target.closest(".folder__folder-container").lastElementChild.style.borderRadius = "3px";
      e.target.closest(".folder__folder-container").lastElementChild.style.color = "#ffffff";
    }
  })
});

