const { app, BrowserWindow } = require('electron')
const path = require('path')

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 1280,
    height: 850,
    title: 'Claude',
    autoHideMenuBar: true,
    backgroundColor: '#262624',
    icon: path.join(__dirname, 'icon.svg'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  })
  win.loadURL('https://claude.ai')
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})


