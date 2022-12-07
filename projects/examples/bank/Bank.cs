namespace Program {
    class Bank {
        List<Account> accounts;
        private static int latestAccount;

        public Bank() {
            this.accounts = new List<Account>();
            //set latestAccount to -1
            Bank.latestAccount = -1;
        }


        public int login() {
            //Display a message to ask for the account number
            Console.WriteLine("What is your account number?: ");

            //Assign the input to a new String variable called accountNoString
            string accountNoString = Console.ReadLine() ?? "";

            //Display a message to ask for the password for the specified accountNoString
            Console.WriteLine("What is your password?: ");

            //Assign the input to a new String variable called password
            string password = Console.ReadLine() ?? "";
            try {
                //Convert accountNoString to a new integer called accountNo
                int accountNo = Int32.Parse(accountNoString);
                for (int i = 0; i <= latestAccount; i++) {
                    Account account = null;
                    if (Bank.latestAccount >= 0)
                        account = this.getAccountById(i);
                    if (account.getNumber() == accountNo && account.checkPassword(password))
                        return account.getNumber();
                }
            } catch {
            }
            //Display a message to say that the account number is incorrect and to try again
            Console.WriteLine("Incorrect account number, try again");
            return -1;
        }


        public void deposit(int number) {
            //declare a double variable called amount
            double amount;

            try {
                //Prompt user to enter the amount of money to deposit
                Console.WriteLine("Please enter an amount to depoist: ");
                //get user input and assign to amount
                amount = Double.Parse(Console.ReadLine());

                Console.WriteLine();
            } catch {
                //Display error message for invalid input
                Console.WriteLine("That is not a number");
                //set amount to 0
                amount = 0;
            }
            //set the balance for the account to getBalance + amount
            Account account = this.getAccountById(number);
            account.setBalance(amount);
        }

        public void withdraw(int number) {
            double amount;
            try {
                //Prompt user to enter the amount of money to withdraw
                Console.WriteLine("How much money do you want to widthdraw?: ");
                //get user input and assign to amount
                amount = Double.Parse(Console.ReadLine());
                Console.WriteLine();
            } catch {
                //Display error message for invalid input
                Console.WriteLine("That is not a number");
                //set amount to 0
                amount = 0;
            }

            Account account = this.getAccountById(number);

            //Use and iff/else statement
            //if there are sufficient funds, reduce account balance by amount else display message to say insufficient funds
            if (account.getBalance() > amount) {
                account.setBalance(account.getBalance() - amount);
            } else {
                Console.WriteLine("Insuffcient funds.");
            }
            Console.WriteLine();
        }

        public void checkBalance(int number) {
            //display the current balance
            Console.WriteLine(this.getAccountById(number).getBalance());
        }


        public void addAccount() {
            //increment variable Bank.latestAccount by 1
            int newNumber = Bank.latestAccount + 1;

            //assign Bank.Latest to newNumber
            Bank.latestAccount = newNumber;

            //Prompt user to enter a password for the new account
            Console.WriteLine("Enter a password for the new account: ");

            //Get user input and assign to newPassword
            string newPassword = Console.ReadLine() ?? "";

            Console.WriteLine();
            //initialise newBalance to 0
            int newBalance = 0;

            //Create a new account with arguments (newNumber, newPassword, newBalance)
            Account account = new Account(newNumber, newPassword, newBalance);

            this.accounts.Add(account);
            //Display message to user to sat that the account has been created, with the relevant account number

            Console.WriteLine();
        }

        private Account getAccountById(int number) {
            return this.accounts[number];
        }
    }
}

