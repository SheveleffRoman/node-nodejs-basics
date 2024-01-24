import fs from "fs/promises";
import path from "path";
import crypto from "node:crypto";
import { getDirnameFromUrl } from "../utils/utils.js";

const __dirname = getDirnameFromUrl(import.meta.url);
const pathToFile = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  try {
    const fileToCalculate = await fs.readFile(pathToFile);
    const hashSum = crypto
      .createHash("sha256")
      .update(fileToCalculate)
      .digest("hex");
    console.log(hashSum);
  } catch {
    throw new Error("Hash operation failed");
  }
};

await calculateHash();
