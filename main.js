const { app, BrowserWindow, ipcMain } = require('electron')
let userdata = {
  projectName: "",
  password:"dont guess",
  renderproject: false
}
const sequelize = require('sequelize');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win
// l;ets  go
function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    x:0,
    y:0,
    webPreferences: {
      nodeIntegration: true
    },
     
  })

  // and load the index.html of the app.
  win.loadFile('src/html/index.html')

  // Open the DevTools.
//   win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})
// for taking to particular page after main-index page 
ipcMain.on("choosed", (e,a) => {
  win.loadFile("src/html/"+a+"-index.html")
  e.reply("done")
})
// for opening the choosed project datas
ipcMain.on("project-Name",(e,a) => {
    win.loadFile("src/html/manage-project.html")
    // store the project opened for management in userdata.projecctName
    userdata.projectName = a;
})
// to give project name to another render process
ipcMain.on("project-Name1",(e,a) => {
  // Send other data related to project by extrating form database here.!1
  userdata.password = "letmein" ;


  let projectdata = [userdata.projectName,"2005 sept 2","Yubraj Bhandari",false,3,{
    Name: 'set1',
    id:1,
    subSetId : [20,22],
    subSetName:['subSet1','subSet2']
  },{
    Name:'set2',
    id:3,
    subSetId : [],
    subSetName : []
  },{
    Name: 'set3',
    id:4,
    subSetId : [210,212,111],
    subSetName:['subSet1','subSet2','subSet3']
  }]

  
  e.returnValue = projectdata 
})
// Password Checking Process
ipcMain.on("check-password",(e,a) =>{
  if(a===userdata.password){
    e.returnValue = true;
    userdata.renderproject = true;
  }else{
    e.returnValue = false;
  }
})
// to permit to render the project or not 
ipcMain.on("renderProject",(e,a) => {
  e.returnValue = userdata.renderproject;
})
// display create section if cancled the password box
ipcMain.on('display-create-section',(e,a) => {
  win.loadFile('src/html/create-index.html')
})