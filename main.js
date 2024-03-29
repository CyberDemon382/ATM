import inquirer from "inquirer";
async function main() {
    const passCode = await inquirer.prompt([{
            message: "Enter Your Passcode!",
            type: "number",
            name: "passCode"
        }]);
    const myPin = 123456;
    const myBalance = 10000;
    if (passCode.passCode === myPin) {
        console.log("Your Balance Is:", myBalance);
        const choice = await inquirer.prompt([{
                message: "Choose what you want to do?",
                name: "choices",
                type: "list",
                choices: ["Withdraw Your Money", "See Your Balance"]
            }]);
        if (choice.choices === "Withdraw Your Money") {
            const withdrawalAmount = await inquirer.prompt([{
                    message: "Enter Your Amount to Be Withdrawn!",
                    type: "number",
                    name: "amount"
                }]);
            let amount = myBalance - withdrawalAmount.amount;
            console.log("Your Payment Has been Successfully made, and Your remaining Balance is:", amount);
        }
        else if (choice.choices === "See Your Balance") {
            console.log("Your Current Balance Is:", myBalance);
        }
        else {
            console.log("Invalid choice. Please select a valid option.");
        }
    }
    else {
        console.log("You Have Entered an Invalid Password");
    }
}
main();
