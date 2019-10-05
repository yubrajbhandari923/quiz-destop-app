const electron = require("electron")
const { ipcRenderer } = electron
let opts = document.getElementsByClassName("opts")
let value
document.addEventListener("DOMContentLoaded",() => {
    console.log(opts)
    alert("works")
    
    Array.from(opts).forEach(element => {
        element.onclick = () =>{
            value= element.getAttribute('data');
            ipcRenderer.sendSync("choosed",value);
        }
        
    });
    // for(i=0;i<opts.length;i++){
    //     alert("works");
    //     opts[i].addEventListener("click",() =>{
    //         alert("works");
    //     })
    // }
})
