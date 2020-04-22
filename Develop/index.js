const inquirer = require("inquirer")
const fs = require("fs");
const axios = require("axios");
//Question??? 

//what is you GitHub name?
//Expected input: email addres/

const questions = [
    {
        type:"input",
        message:"Your GitHub username?",
        name:"username",
    },
    {
        type:"input",
        message:"Your Project title?",
        name:"title",
    },
    {
        type:"input",
        message:"Your description?",
        name:"Description",
    },
    {
        type:"input",
        message:"Your Table of Contents?",
        name:"contents",
    },
    {
        type:"input",
        message:"Your Installation?",
        name:"Installation",
    },
    {
        type:"input",
        message:"Your Usage?",
        name:"usage",
    },
    {
        type:"input",
        message:"Your License?",
        name:"license",
    },
    {
        type:"input",
        message:"Your Contributing?",
        name:"contributing",
    },
    {
        type:"input",
        message:"Your Tests?",
        name:"tests",
    },
    {
        type:"input",
        message:"Your Questions?",
        name:"questions",
    }
];


// Expected output from GitHub API:
//email and profile image 
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data,(err) => console.log("Success"));
    // return console.log("Success")
    //generate a fiel 
    //connect with data
}
// At least one badge
// Project title
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions
// User GitHub profile picture
// User GitHub email

// {
//     ...oldObject,
//     key:value,
//     key2: value2
// }
function init() {
    //user inquirer
    inquirer.prompt(questions).then(response => { 
        const oldReadMeData = {...response}
        axios.get("https://api.github.com/users/" + response.username)
    .then(response => {
        const newReadMeData = {...oldReadMeData, image:response.data.avatar_url, userEmail:response.data.email}

        writeToFile("README.md", JSON.stringify(newReadMeData, null, 2))

    });

})
.catch(function (err) {
    console.log(err)
});
}
init();
