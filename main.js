const {app, BrowserWindow} = require("electron");

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({width: 800, height: 800, autoHideMenuBar: true, title: "tplay"});

  mainWindow.loadURL(`file://${__dirname}/dist/index.html`);
  mainWindow.openDevTools();
});
