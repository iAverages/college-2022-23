import inquirer from "inquirer";

const MIN = 0;
const MAX = 60;

type Questions = {
    hours: string;
};

(async () => {
    const answers = await inquirer.prompt<Questions>([
        {
            message: `Please enter a time in minutes (between ${MIN} and ${MAX})`,
            name: "hours",
            validate(input) {
                const numb = +input;
                if (input === "" || isNaN(numb) || numb > MAX || numb < MIN) {
                    console.log(`\n\nPlease enter a number between ${MIN} and ${MAX}\n`);
                    return false;
                }
                return true;
            },
        },
    ]);

    // We can safely do this because we validate it before hand
    const converted = +answers.hours;
    console.log((converted / 60).toFixed(2));
})();
