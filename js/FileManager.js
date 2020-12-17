class FileManager {
  constructor(userName) {
    this[userName] = new Map;
    
    const initialFolders = [
      "Documents", "Downloads", "Music", 
      "Pictures", "Videos", "Trash"
    ];

    initialFolders.forEach((folderName) => {
      this[userName].set(folderName, new Map);
    })
  }


  customFunction(location) {
    location = location.split("/") || location.split();

    let evalString = ``;

    location.forEach( (singlePath, index) => {
      if(!index) {
        evalString += `this['${singlePath}']`;
      } else {
        evalString += `.get('${singlePath}')`;
      }
    });

    return eval(evalString);
  }


  createFolder(folderName, location) {
   this.customFunction(location).set(folderName, new Map);
  }

  deleteFolder(location) {
    location = location.split('/');
    let lastPath = location.pop();
    
    this.customFunction(location.join('/')).delete(lastPath);
  }

  changeFolderName(newName, location) {
    let tempDuplicate = this.customFunction(location);
    
    location = location.split('/');
    let lastPath = location.pop();

    this.customFunction(location.join('/')).set(newName, tempDuplicate);

    location.push(lastPath);
    this.deleteFolder(location.join('/'));
  }
};

let val;

const newUser = new FileManager("IkehAkinyemi");
newUser.createFolder("#MIL", "IkehAkinyemi/Music");
newUser.changeFolderName("#ABT", "IkehAkinyemi/Music/#MIL");
newUser.deleteFolder("IkehAkinyemi/Music/#ABT");

val = newUser;

console.log(val);