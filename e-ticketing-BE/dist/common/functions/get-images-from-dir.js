"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDirListFromDir = exports.GetImageFromDir = void 0;
const fs = require("fs");
async function GetImageFromDir(path) {
    try {
        if (fs.existsSync(path)) {
            const images = await fs.readdirSync(path).filter(function (file) {
                return fs.statSync(`${path}/${file}`).isFile();
            });
            return images;
        }
        else
            return [];
    }
    catch (err) {
        console.error(err);
        return [];
    }
}
exports.GetImageFromDir = GetImageFromDir;
async function GetDirListFromDir(path) {
    try {
        if (fs.existsSync(path)) {
            const images = await fs.readdirSync(path);
            return images;
        }
        else
            return [];
    }
    catch (err) {
        console.error(err);
        return [];
    }
}
exports.GetDirListFromDir = GetDirListFromDir;
//# sourceMappingURL=get-images-from-dir.js.map