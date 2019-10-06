const electron = require('electron')
const remote = electron.remote;

function closethiswin(){
    var win = remote.getCurrentWindow();
    win.close();
}