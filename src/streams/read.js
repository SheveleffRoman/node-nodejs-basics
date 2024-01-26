import fs from "fs";
import process from "process";
import path from "path";
import { getDirnameFromUrl } from "../utils/utils.js";

const __dirname = getDirnameFromUrl(import.meta.url);
const pathToFile = path.join(__dirname, "files", "fileToRead.txt");

const readStream = fs.createReadStream(pathToFile);

const read = async () => {
  readStream.pipe(process.stdout);
};

await read();
