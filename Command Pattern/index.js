const readline = require('readline');
const {Create, Exit} = require('./commands');



const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Commands : create <FileeName> <text>");
terminal.prompt();

terminal.on("line", (userInput) => {
    const [command, fileName, ...context] = userInput.split(" ");
    const fileContent = content.join(" ");

    switch(command){
        case "exit":
            receiver.run(new Exit());
            terminal.close();
            break;
        case "create":
            if(fileName){
                console.log("Please specify a file name")
            } else {
                console.log(`Creating file ${fileName}`);
                console.log(`File Contents: ${fileContent}`);
            }
            break;
        default:
            console.log(`command ${command} not recognized`)

    }

    terminal.prompt(); 
})