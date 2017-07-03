const electron = require("electron");
const {BrowserWindow} = electron;

function oauth(url, redirect_uri, callback) {
  let win = new BrowserWindow({width: 250, height: 500, autoHideMenuBar: true});
  // handles the event when the user clicked on grant application
  win.webContents.on("will-navigate", (event, url) => {
    handleOauth(url);
  });
  // handles the stuff when the user already logged in
  win.webContents.on("did-get-redirect-request", (event, oldUrl, newUrl) => {
    handleOauth(newUrl);
  });

  function handleOauth(url) {
    if (url.indexOf(redirect_uri) === -1) {
      return
    }
    win.close();
    callback(url, getParams(url));
  }

  // win.openDevTools();
  win.loadURL(url);
}

function getParams(url) {
  var params = url.substring(url.indexOf("?")+1);
  if (params == "") {
    console.log("nothing found!");
    return
  } else {
    var arg = {};
    while (params.indexOf("=") > -1) {
      var value;
      if (params.indexOf("&") > -1) {
        value = params.substring(params.indexOf("=")+1, params.indexOf("&"));
        arg[params.substring(0, params.indexOf("="))] = value;
        params = params.substring(params.indexOf("=")+value.length+2, params.length);
      } else {
        arg[params.substring(0, params.indexOf("="))] = params.substring(params.indexOf("=")+1, params.length);
        params = params.substring(params.indexOf("=")+1, params.length);
      }
    }
  }
  return arg;
}

module.exports = oauth;
