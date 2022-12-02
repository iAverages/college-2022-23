namespace Program {
    class Account {
        private int accountNumber;
        private string accountPassword;
        private double accountBalance;

        public Account(int number, string password, double balance) {
            //set accountNumber to number
            accountNumber = number;
            //set accountPassword to password
            accountPassword = password;
            //set accountBalance to balance
            accountBalance = balance;

        }

        public int getNumber() {
            //return the accountNumber
            return this.accountNumber;
        }

        public bool checkPassword(string password) {
            //Use an if..else statement
            //return true if password equals accountPassword else return false
            return accountPassword.Equals(password);
        }

        public double getBalance() {
            //return accountBalance
            return this.accountBalance;
        }

        public void setBalance(double newBalance) {
            //set accountBalance to newBalance
            this.accountBalance = newBalance;
        }
    }
}

