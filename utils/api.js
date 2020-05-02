const inquirer = require("inquirer");
const axios = require("axios");

// grabs the github avatar image 
const api = {
  getUser(username) {
    inquirer
    .prompt({
      message: "What is your user GitHub username?",
      name: "username"
    })
    .then(function({ username }) {
      const queryUrl = `https://api.github.com/users/${username}/avatar_url;`;
    })
  }
};

// Export data in 'const api' to the index.js page 
module.exports = api;

//https://api.github.com/users/tiffanycasey


