import { sep } from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import "./files/c.js";
import { getDirnameFromUrl } from "../utils/utils.js";
import { fileURLToPath } from "url";
import { createRequire } from "node:module";

// also works but experimental warning in console
// import a from "./files/a.json" assert { type: "json" };
// import b from "./files/b.json" assert { type: "json" };

const random = Math.random();
const filename = fileURLToPath(import.meta.url);
const dirname = getDirnameFromUrl(import.meta.url);
const require = createRequire(import.meta.url);

let unknownObject =
  random > 0.5 ? require("./files/a.json") : require("./files/b.json");
// also works but experimental warning in console
//   random > 0.5 ? a : b;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${filename}`);
console.log(`Path to current directory is ${dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export default {
  unknownObject,
  myServer,
};
