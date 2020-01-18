const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
    // no type specified so uses defalut of open ended test
  })
  // asyncronis so wait for a response
  .then(function({ username }) {
    //deconstructed username here from the object we get from inquiere, all we are about is user name
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    // make axios request
    axios
      .get(queryUrl)
      // wait for response
      // destructure data from the response and re name it repos
      .then(({ data: repos }) => {
        // console.log(data[0].name);
        // takes an original array and give you a new array of the same length as original but altered in some way
        // specify name of individual array member
        // speify what we want to do with each individual repo object in order to generate the new array
        // inside the parans repo could and often is just called item
        //map through the repo and just output the repo names
        // this needs to be a string to write to the file use .join
        const repoNames = repos.map(repo => repo.name).join("\n");
        // console.log(repoNames); //console.log in the then
        // fs.write takes in 3 params , name of file, what is going into it and callback to handle error or output what happend to user
        fs.writeFile(`${username}.txt`, repoNames, err => {
          if (err) throw err; //
          console.log(
            `Wrote list of ${repos.length} repos to ${username}.txt `
          );
        });
      });
  });
// get data using axios seperate the data in to a string of line seprated repository names and write to file based on user name
//mahume- a TA

//scwebd -saras

// use map to generate an array of the same length as the previous one with some modificaiton of the first
// filter gives an array that is a sub set of the previous array
// for each is supper generic just loops through an array
