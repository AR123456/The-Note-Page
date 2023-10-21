/* importing the necessary Node.js modules, fs (File System) and readline. These modules provide utilities for reading files and reading lines from a file, respectively. */
const fs = require("fs");
const readline = require("readline");

// Generator function to process records from a file
/* generator function processRecordsFromFile. It takes two parameters: filename (the name of the file to read records from) and chunkSize (the number of records to process in one chunk). */
async function* processRecordsFromFile(filename, chunkSize) {
  /* nside the generator function, we create a readable stream using fs.createReadStream to read data from the specified filename. Then, we create a readline interface (rl) using readline.createInterface, providing the fileStream as the input to the readline interface. This sets up an efficient way to read the file line by line. */
  const fileStream = fs.createReadStream(filename);
  const rl = readline.createInterface({ input: fileStream });

  let buffer = [];
  for await (const line of rl) {
    buffer.push(line);
    if (buffer.length >= chunkSize) {
      // Process the chunk of records
      for (const record of buffer) {
        /* The generator uses a loop with for await...of to iterate over each line read from the file through the rl interface. It pushes each line into the buffer array until the chunkSize is reached. When the buffer size becomes equal to or greater than the chunkSize, the generator yields each record in the buffer one by one, effectively sending them out one chunk at a time. */
        yield record;
      }
      buffer = [];
    }
  }

  // Process the remaining records in the buffer
  /* After the loop, the generator processes the remaining records in the buffer, ensuring no records are left behind. */
  for (const record of buffer) {
    yield record;
  }
}

// Example usage
const filename = "large_data.txt";
const chunkSize = 100; // Number of records to process in one go
/* create an instance of the generator processRecordsFromFile and store it in the recordProcessor variable. This will allow us to iterate over the records later. */
const recordProcessor = processRecordsFromFile(filename, chunkSize);
// Initialize a count variable to keep track of the number of records processed.
let count = 0;

async function processRecord(record) {
  /* The code defines an asynchronous function processRecord, which represents the logic to process an individual record. In this example, we simply log each record with a message and increment the count variable. You can replace this function with your specific processing logic, such as data parsing, calculations, or database operations. */
  // Your processing logic here
  // For example, you might parse the record, perform calculations, or save it to a database.
  console.log(`Processing record: ${record}`);
  count++;

  // Simulate some asynchronous processing (e.g., API call, database operation)
  return new Promise((resolve) => setTimeout(resolve, 100));
}

(async () => {
  // Finally, we have an immediately invoked asynchronous function expression (IIFE) that iterates over each record yielded by the generator (recordProcessor).
  for await (const record of recordProcessor) {
    // For each record, it calls the processRecord function asynchronously, and then waits for it to finish before moving to the next record.
    await processRecord(record);
  }
  // After all records are processed, it logs the total number of records processed to the console.
  console.log(`Total records processed: ${count}`);
})();
