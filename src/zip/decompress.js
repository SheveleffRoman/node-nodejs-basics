import fs from "fs";
import path from "path";
import { getDirnameFromUrl } from "../utils/utils.js";
import { createUnzip } from "node:zlib";

const __dirname = getDirnameFromUrl(import.meta.url);
const pathToSourceFile = path.join(__dirname, "files", "archive.gz");
const pathToDestinationFile = path.join(
  __dirname,
  "files",
  "fileToCompress.txt"
);

const readStream = fs.createReadStream(pathToSourceFile);
const unzip = createUnzip();
const writeStream = fs.createWriteStream(pathToDestinationFile);

const decompress = async () => {
  readStream.pipe(unzip).pipe(writeStream);
};

await decompress();
