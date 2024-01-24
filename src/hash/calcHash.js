import fs from "fs";
import path from "path";
import crypto from "node:crypto";
import { getDirnameFromUrl } from "../utils/utils.js";

const __dirname = getDirnameFromUrl(import.meta.url);
const pathToFile = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  try {
    const readStream = fs.createReadStream(pathToFile);
    const hash = crypto.createHash("sha256").setEncoding("hex");
    readStream.pipe(hash);
    hash.on("finish", () => console.log(hash.read()));
  } catch {
    throw new Error("Hash operation failed");
  }
};

await calculateHash();
