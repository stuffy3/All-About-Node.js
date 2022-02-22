// process.stdin
// process.stdout.write("hello") will log this in the console

// asking questions in the console
const questions = [
    "What is your name?",
    "What do you like to do",
    "What is your preferred programming language?"
];

const ask = (i = 0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
};

ask();

const answers = [];
process.stdin.on("data", data => {
    answers.push(`${data.toString().trim()}`);
    
    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
    process.exit()
    }
})

