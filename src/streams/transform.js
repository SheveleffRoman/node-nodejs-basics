import { Transform } from "stream";
import process from "process";

const reverseString = new Transform({
  transform(chunk, _encoding, callback) {
    const input = chunk.toString().trim();
    const reversedString = input.split("").reverse().join("") + "\n";

    callback(null, reversedString);
  },
});

const transform = async () => {
  process.stdin.pipe(reverseString).pipe(process.stdout);
};

await transform();
