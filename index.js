/// take this call back function and make it a promised based function
/// call back based
// function waitFor(seconds, cb) {
//   if (isNaN(seconds) || seconds < 1) {
//     return cb(Error("Paramater 'seconds' must be a positive number"));
//   }
//   setTimeout(function() {
//     cb(null, "Success");
//   }, seconds * 1000);
// }

// waitFor(2, function(err, msg) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(msg);
// });

//// promise based /////////
// function waitFor(seconds) {
//   // resolve gets passed into .then, reject gets passed into a catch
//   return new Promise((resolve, reject) => {
//     if (isNaN(seconds) || seconds < 1) {
//       // the reject callback function has access to the error pass into .catch will have acccess
//       return reject(Error("Paramater 'seconds' must be a positive number"));
//     }
//     setTimeout(function() {
//       // this takes resolve now not cb resomve takes in just success
//       // the callback function passedinto .then will have access to the mesg passed into parens of resovle
//       resolve("Success");
//     }, seconds * 1000);
//   });
// }

// //
// waitFor(3)
//   //this is what is in the resolve, could be text or an object of data
//   // takes in data from resolve , this console.log is the success message above (what gets sent to callback)
//   .then(data => console.log(data))
//   // thisis if things go poorly
//   // captures the error from the return
//   // break out with return and call reject function
//   // reject function  trigers the call back in the .catch and passes data in the reject paren s , in this case error object
//   .catch(err => console.log(err));

///////////// could also provide more than one error message ////////////

function waitFor(seconds) {
  return new Promise((resolve, reject) => {
    if (isNaN(seconds)) {
      return reject(Error("Paramater 'seconds' must number"));
    }
    if (seconds < 1) {
      return reject(Error("Paramater 'seconds' must be a positive number"));
    }
    setTimeout(function() {
      resolve("Success");
    }, seconds * 1000);
  });
}
waitFor(3)
  .then(data => console.log(data))
  .catch(err => console.log(err));
