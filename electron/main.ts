import { app, BrowserWindow } from "electron";
import * as path from "path";
import installExtension, {
    REACT_DEVELOPER_TOOLS,
} from "electron-devtools-installer";

function createWindow() {
    const win = new BrowserWindow({
        width: 1250,
        height: 1250,

        minWidth: 1250,
        minHeight: 1250,

        maxWidth: 1250,
        maxHeight: 1250,

        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            devTools: false
        },
    });

    if (app.isPackaged) {
        win.loadURL(`file://${__dirname}/../index.html`);
    } else {
        win.loadURL("http://localhost:2022/index.html");
        win.webContents.openDevTools();

        require("electron-reload")(__dirname, {
            electron: path.join(
                __dirname,
                "..",
                "..",
                "node_modules",
                ".bin",
                "electron" + (process.platform === "win32" ? ".cmd" : "")
            ),
            forceHardReset: true,
            hardResetMethod: "exit",
        });
    }
}

app.whenReady().then(() => {
    installExtension(REACT_DEVELOPER_TOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log("An error occurred: ", err));

    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
    app.on("window-all-closed", () => {
        if (process.platform !== "darwin") {
            app.quit();
        }
    });
});
