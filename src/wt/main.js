import { Worker } from "worker_threads";
import path from "path";
import { getDirnameFromUrl } from "../utils/utils.js";
import { availableParallelism } from "os";

const __dirname = getDirnameFromUrl(import.meta.url);
const pathToWorker = path.join(__dirname, "worker.js");

const startNumber = 10;
const availableProcessors = availableParallelism();

const workerService = (num) =>
  new Promise((resolve, _reject) => {
    const worker = new Worker(pathToWorker, { workerData: num });
    worker.on("message", (data) =>
      resolve({
        status: "resolved",
        data,
      })
    );
    worker.on("error", () =>
      resolve({
        status: "error",
        data: null,
      })
    );
  });

const makeArrayFromWorkers = async () => {
  let arrayFromWorkers = [];

  for (let index = 0; index < availableProcessors; index++) {
    const worker = await workerService(startNumber + index);
    arrayFromWorkers.push(worker);
  }

  return arrayFromWorkers;
};

const performCalculations = async () => {
  const results = await makeArrayFromWorkers();
  console.log(results);
};

await performCalculations();
