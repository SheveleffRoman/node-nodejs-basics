import fs from "fs/promises";
import path from "path";
import { getDirnameFromUrl } from "../utils/utils.js";

const __dirname = getDirnameFromUrl(import.meta.url);
const pathToDir = path.join(__dirname, "files");

const list = async () => {
  try {
    const listOfFiles = await fs.readdir(pathToDir);
    console.log(listOfFiles);
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
