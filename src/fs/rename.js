import fs from "fs/promises";
import path from "path";
import { getDirnameFromUrl } from "../utils/utils.js";

const __dirname = getDirnameFromUrl(import.meta.url);
const pathToOld = path.join(__dirname, "files", "wrongFilename.txt");
const pathToNew = path.join(__dirname, "files", "properFilename.md");

const rename = async () => {
  try {
    await fs.rename(pathToOld, pathToNew);
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();
