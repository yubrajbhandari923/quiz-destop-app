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
                loadData();
            }else{
                ipcRenderer.send('display-create-section',"value");
            }
        })
        win.show();
        
    }else{
        loadData();
    }
})
function loadData(){
    let app = new Vue({
        el : "#app",
        data:{
            title : projectData[0],
           UIdata :{ projectTab:true ,optionView: false, quesView:true, activeSet: -1} 
        },
        methods :{
            tabchange() {
                this.UIdata.projectTab = this.UIdata.projectTab ? false : true ;
            },
            toggOpts(){
                this.UIdata.optionView = this.UIdata.optionView ? false : true ;
            },
            toggQues(){
                this.UIdata.quesView = this.UIdata.quesView ? false : true ;
            },
            activateSet(n){
                this.UIdata.activeSet = n
            }
        },
        computed:{
            sets: function(){
                let temp = projectData
                temp.splice(0,5)
                console.log(temp)
                return temp
            }
        }
    })


}