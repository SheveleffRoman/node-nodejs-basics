const parseArgs = () => {
  const parsedArgs = process.argv.slice(2);
  const perChunk = 2;
  const result = parsedArgs.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);
  const args = Object.fromEntries(result);
  const formattedArgs = Object.entries(args)
    .map(([key, value]) => `${key.slice(2)} is ${value}`)
    .join(", ");
  console.log(formattedArgs);
};

parseArgs();
