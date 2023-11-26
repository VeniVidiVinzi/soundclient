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
