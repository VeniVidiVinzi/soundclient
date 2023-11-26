# ./

## Folderstructure
/
    package.json
    soundClient.desktop
    package-lock.json
    .gitignore
    .soundClient.desktop.swp
    LICENSE
    debian.json
    main.js
    Readme.md
    postpackage.js
    summary.md
    icon2.png

## Filecontent
### ./package.json
```
{
  "name": "soundClient",
  "version": "1.0.1",
  "description": "A simple electron based client for Soundcloud.",
  "main": "main.js",
  "scripts": {
    "clean": "rimraf dist",
    "start": "electron .",
    "bundle:x64": "electron-packager . soundClient --platform=linux --arch=x64 --out dist/ && node postpackage.js ",
    "deb:x64": "electron-installer-debian --src dist/soundClient-linux-x64/ --arch amd64 --config debian.json",
    "build": "npm run clean && npm run bundle:x64 && npm run deb:x64"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "electron": "^26.0.0",
    "electron-installer-debian": "^3.2.0",
    "electron-packager": "^17.1.2",
    "fs-extra": "^11.1.1",
    "rimraf": "^2.6.2"
  },
  "dependencies": {
    "electron-packager": "^17.1.2",
    "electron-installer-debian": "*"
  }
}
```
### ./debian.json
```
{
  "dest": "./dist",
  "icon": "./icon2.png",
  "categories": ["Audio", "Music"],
  "lintianOverrides": ["changelog-file-missing-in-native-package"],
  "maintainer": "Vinzent Maier <vinzent-j.maier@t–online.de>"
}
```
### ./main.js
```
const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false, // Disable Node.js in renderer for security
        }
    });

    win.loadURL('https://soundcloud.com/');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
```
### ./postpackage.js
```
const fs = require('fs-extra');

const appPath = '/opt/soundClient'; // This is a common location for custom apps; you can adjust as needed
const desktopTemplatePath = 'soundClient.desktop';
const desktopOutputPath = 'dist/soundClient-linux-x64/soundClient.desktop';

async function updateDesktopFile() {
    const content = await fs.readFile(desktopTemplatePath, 'utf8');
    const updatedContent = content.replace(/SCLIENT_PATH/g, appPath);
    await fs.writeFile(desktopOutputPath, updatedContent);
}

updateDesktopFile();
```
