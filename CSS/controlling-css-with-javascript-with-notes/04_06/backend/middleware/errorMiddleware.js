// overriding what is build into express
const errorHandler = (err, req, res, next) => {
  //if the codes is what was set in controller use that if not use 500
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  // respond with JSON
  res.json({
    message: err.message,
    // if in dev show the stack
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = {
  errorHandler,
};
// using this in server js
