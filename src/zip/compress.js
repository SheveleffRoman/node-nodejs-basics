import fs from "fs";
import path from "path";
import { getDirnameFromUrl } from "../utils/utils.js";
import { createGzip } from "node:zlib";

const __dirname = getDirnameFromUrl(import.meta.url);
const pathToSourceFile = path.join(__dirname, "files", "fileToCompress.txt");
const pathToDestinationFile = path.join(__dirname, "files", "archive.gz");

const readStream = fs.createReadStream(pathToSourceFile);
const gzip = createGzip();
const writeStream = fs.createWriteStream(pathToDestinationFile);

const compress = async () => {
  readStream.pipe(gzip).pipe(writeStream);
};

await compress();
