// front End 
var app = new Vue({
    el:"#app",
    data:{
         projects: [], 
        // [{
        //         Name : "Project-no-Name",
        //         Description : "Short-Description-dont-goes-here!.",
        //         Date: '200000',
        //         Author : "yubraj Bhandry",
        //         noOfSets : 5 ,
        //         Protected: false 

        //     },
        //     {
        //         Name : "Project-Name",
        //         Description : "Short-Description-goes-here!.",
        //         Date: Date.now(),
        //         Author : "Barsha Bhandry",
        //         noOfSets : 10 ,
        //         Protected: true 

        //     }
        //  ],
         questions : [{
             Que: "Who is the father of Science?",
             Type: "text"
         }],
        projectTab : true 
    },
    methods : {
        tabchange() {
            this.projectTab = this.projectTab ? false : true ;
        },
        addclicked(){
            let key = this.projectTab ? "project" : "question";
            let win = new BrowserWindow({ 
                width:500,
                height:500 ,
                frame: false,
                webPreferences:{nodeIntegration: true},
                resizable:false ,

            })
            
            win.on('close', function(){ 
                win = null ;
                electron.remote.getCurrentWindow().reload()
            })
            win.loadFile('src/html/add-'+key+'.html');
            win.show();

        },
        projectclicked(Name){

            ipcRenderer.send("project-Name",Name)
        }

    }
})


// Back end 
const electron = require('electron')
const { BrowserWindow, ipcMain } = electron.remote
const { ipcRenderer } = electron

const sequelize = require("sequelize")

const errHandler = err => {
    //Catch and log any error.
    console.error("Error: ", err);
  };

let projs ={};
  
// Querying for projects from DB
const db = require("../../Database/connection")
// const Project = require("../../Database/models/project")
const models = require( '../../Database/models/index');

models.Project.findAll().then(projects => {
    // projects will be an array of all Project instances
    console.log(projects)
    app.projects = projects
  })

db.close()