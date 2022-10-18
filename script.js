let desktop = [
    {   
        name: "Folder 1",
        folders: [
            {name: "Subfolder 1"},
            {name: "Subfolder 2"},
            {name: "Subfolder 3"},
        ]
    },
    {   
        name: "Folder 3",
        folders: [
            {name: "Subfolder 7"},
            {name: "Subfolder 8"},
            {name: "Subfolder 9"},
        ]
    }
]

function showParentFolderName(subfolderName){
    for(let i=0; i< desktop.length; i++){
        for(let k=0; k< desktop[i].folders.length; k++){
            if(subfolderName === desktop[i].folders[k].name){
                console.log(desktop[i].name)
                break
            }
        }
    }
}


showParentFolderName("Subfolder 5")