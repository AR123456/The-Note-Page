const fs = require("fs");

const numberOfRecords = 1000; // Adjust the number of records as needed

const generateRandomRecord = () => {
  return `Record ${Math.floor(Math.random() * 10000)}\n`;
};

const generateLargeDataFile = (filename, numberOfRecords) => {
  let data = "";
  for (let i = 0; i < numberOfRecords; i++) {
    data += generateRandomRecord();
  }
  fs.writeFileSync(filename, data);
};

const filename = "large_data.txt";
generateLargeDataFile(filename, numberOfRecords);
console.log(
  `Successfully generated ${filename} with ${numberOfRecords} records.`
);
