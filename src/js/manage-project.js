const electron = require('electron')
const { BrowserWindow } = electron.remote
const { ipcRenderer } = electron
let projectData, renderProject 

document.addEventListener("DOMContentLoaded",() => {
    projectData = ipcRenderer.sendSync('project-Name1','data')
    console.log(projectData)
    if(projectData[3]){
        let win = new BrowserWindow({
            height:280,
            width: 400,
            webPreferences:{
                nodeIntegration: true
            },
            frame:false,
            alwaysOnTop: true,
            resizable: false,
            
        })
        win.loadFile('src/html/askpassword.html')
        win.on('close', function(){ 
            win = null
            renderProject = ipcRenderer.sendSync('renderProject',"value");
            if(renderProject){
                loadData()
            }else{
                ipcRenderer.send('display-create-section',"value");
            }
        })
        win.show();

    }
})
function loadData(){
    alert("works")
}