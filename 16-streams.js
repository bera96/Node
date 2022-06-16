const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('./content/big.txt', { encoding: 'utf8' })
var chunkCount = 0;
stream.on("data", (chunk) => {
  console.log(chunk);
  console.log("data came");
  chunkCount++;
});

stream.on("end", () => {
  console.log("Data transfer ended.");
  console.log(chunkCount);
});
