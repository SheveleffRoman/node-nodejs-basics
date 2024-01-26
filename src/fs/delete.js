import fs from "fs/promises";
import path from "path";
import { getDirnameFromUrl } from "../utils/utils.js";

const __dirname = getDirnameFromUrl(import.meta.url);
const pathToFile = path.join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
  try {
    await fs.rm(pathToFile);
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
