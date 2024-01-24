import fs from "fs";
import process from "process";
import path from "path";
import { getDirnameFromUrl } from "../utils/utils.js";

const __dirname = getDirnameFromUrl(import.meta.url);
const pathToFile = path.join(__dirname, "files", "fileToWrite.txt");
const writeStream = fs.createWriteStream(pathToFile);

const write = async () => {
  process.stdin.pipe(writeStream);
};

await write();
