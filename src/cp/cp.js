import path from "path";
import { getDirnameFromUrl } from "../utils/utils.js";
import { spawn, fork } from "child_process";

const __dirname = getDirnameFromUrl(import.meta.url);
const pathToChild = path.join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  fork(pathToChild, [...args]);
};

spawnChildProcess(["arg1", "arg2", "arg3"]);
