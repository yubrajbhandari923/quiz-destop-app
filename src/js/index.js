const electron = require("electron")
const { ipcRenderer } = electron
let opts = document.getElementsByClassName("opts")
let value
document.addEventListener("DOMContentLoaded",() => {
    
    Array.from(opts).forEach(element => {
        element.onclick = () =>{
            value= element.getAttribute('data');
            ipcRenderer.sendSync("choosed",value);
        }
        
    });
})
