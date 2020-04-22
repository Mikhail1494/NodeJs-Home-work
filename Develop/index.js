const inquirer = require("inquirer")
const fs = require("fs");

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
        message:"Your GitHub username?",
        name:"username",
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
    },
    {
        type:"input",
        message:"Your  GitHub profile picture?",
        name:"profilePicture",
    },
    {
        type:"input",
        message:"Your GitHub email?",
        name:"email",
    },

];


// Expected output from GitHub API:
//email and profile image 
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data,(err) => console.log(err));
    //generate a fiel 
    //connect with data

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
}
function init() {
    //user inquirer
    inquirer.prompt(quesyions).then(response => { 
        var image
        var userEnail
        axios.get("https://api.github.com/users/" + response.username)
    .then(response => {
        image = response.data.avatar_url;
        userEmail = response.data.email;
        console.log(image);
        console.log(email);

    })

})
.catch(function (err) {
    console.log(err)
});

init();
