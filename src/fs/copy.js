import fs from "fs/promises";
import path from "path";
import { getDirnameFromUrl } from "../utils/utils.js";

const __dirname = getDirnameFromUrl(import.meta.url);
const source = path.join(__dirname, "files");
const target = path.join(__dirname, "files_copy");

const copy = async () => {
  try {
    await fs.cp(source, target, {
      force: false,
      errorOnExist: true,
      recursive: true,
    });
  } catch {
    throw new Error("FS operation failed");
  }
};

await copy();
