const program = require('commander');
const { argv } = require('process');
const{
    addUser,
    findUser
} = require('./index');
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