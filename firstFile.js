const path = require("path");

console.log(`The file name is ${path.basename(__filename)}`)
//argument values
console.log(process.argv)

//allows you to grab data from the argv array
const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1
    return process.argv[indexAfterFlag];
}
const greeting = grab("--greeting");
const user = grab("--user")