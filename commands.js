const program = require('commander');
const { argv } = require('process');
const{
    addUser,
    findUser
} = require('./index');

// Customer Questions
const questions = [
    {
        input: 'input',
        name: 'firstname',
        message: 'User first name'
    },
    {
        input: 'input',
        name: 'lastname',
        message: 'User last name'
    },
    {
        input: 'input',
        name: 'phone',
        message: 'User phone number',
    },
    {
        input: 'input',
        name: 'email',
        message: 'User Email Address'
    }
];

program
    .command('add')
    .alias('a')
    .description('Add a customer')
    .action (() => {
        prompt (questions).then(answers => addCustomer(answers));
  });


program
    .version('1.0.0')
    .description('Master Control Program')

program
    .command('add <firstname> <lastname> <phone> <email>')
    .alias('a')
    .description('Add an user')
    .action((firstname, lastname, phone, email) => {
        addUser({firstname, lastname, phone, email});
    })

program
    .command('find <name>')
    .alias('f')
    .description('Find a Username')
    .action(name => findUser(name));
    
program.parse(process.argv);