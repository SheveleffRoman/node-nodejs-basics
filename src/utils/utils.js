import { fileURLToPath } from "url";
import { dirname } from "path";

export const getDirnameFromUrl = (url) => dirname(fileURLToPath(url));
