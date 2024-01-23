import fs from "fs/promises";
import path from "path";
import { getDirnameFromUrl } from "../utils/utils.js";

const __dirname = getDirnameFromUrl(import.meta.url);
const pathToFile = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  try {
    const content = await fs.readFile(pathToFile, { encoding: "utf8" });
    console.log(content);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
