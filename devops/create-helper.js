const _ = require('lodash');
const chalk = require('chalk');
const clear = require('clear');
const inquirer = require('inquirer');
const figlet = require('figlet');
const fs = require('fs');
const shell = require('shelljs');

clear();

console.log(
  chalk.yellow(
    figlet.textSync('FILE-GENERATOR', { horizontalLayout: 'full' })
  )
);

const questionList = [
  {
    name: 'createOptions',
    type: 'list',
    message: "What file do you want to generate: ",
    choices: ['API (Application programming interface)'],
  },
  {
      name: 'fileName',
      type: 'input',
      message: function(value){
          return "Please write down file name for the " + value.createOptions + ": ";
      },
      validate: function(value){
          let patt = new RegExp(/^[a-z0-9]+$/i);
          let retValue = true;
          const name = value.fileName;
          const folderPath = __dirname + '\\..\\src\\api\\' + name;
          
          if(value.length == 0) retValue = 'Please write down the name first !';
          if(!patt.test(value)){
              retValue = 'Alphanumeric only allowed (no space)!';
          }
          if(fs.existsSync(folderPath)) retValue = "file/folder already exists in the project !";
          return retValue;
      }
  }
];

inquirer.prompt(questionList)
    .then(answers => {
        const name = answers.fileName.toLowerCase().trim().replace(/ /g, '');
        const folderPath = __dirname + '\\..\\src\\api\\' + name;
        generator(folderPath, answers, name);        
}).catch(error => {
  if(error.isTtyError) console.log(chalk.red('CLI PROMPT ERROR !'))
  else console.log(chalk.red('Theres something else that made this cli error'))
});

function generator(folderPath, answers, name){
  if(fs.existsSync(folderPath)){

  }else{
    let dirPath = __dirname + '\\..\\src\\api';
    shell.cd(dirPath);
    shell.mkdir(name);

    generator(folderPath, answers, name);
  }
}
