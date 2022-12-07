namespace Program
{
    class Program
    {
        static void Main(string[] args)
        {
            Bank bank = new Bank();
            bool loggedIn = false;
            bool quitting = false;
            int accountNo = -1;

            while (!loggedIn && !quitting)
            {
                Console.WriteLine("Do you have an account? (y/n/quit)");
                string response = Console.ReadLine();
                Console.WriteLine();
                if (string.Equals(response, "y"))
                {
                    accountNo = bank.login();
                    if (accountNo != -1)
                        loggedIn = true;
                }
                else if (string.Equals(response, "n"))
                    bank.addAccount();
                else if (string.Equals(response, "quit"))
                    quitting = true;
            }

            while (!quitting)
            {
                Console.WriteLine(
                    "Press 1 to check your balance\nPress 2 to deposit money\nPress 3 to withdraw money\nPress 4 to exit:\n");
                string option = Console.ReadLine();
                Console.WriteLine();
                if (string.Equals(option, "1"))
                    bank.checkBalance(accountNo);
                else if (string.Equals(option, "2"))
                {
                    bank.deposit(accountNo);
                    bank.checkBalance(accountNo);
                }
                else if (string.Equals(option, "3"))
                {
                    bank.withdraw(accountNo);
                    bank.checkBalance(accountNo);
                }
                else if (string.Equals(option, "4"))
                    quitting = true;
                else
                    Console.WriteLine("Invalid option selected");
                Console.WriteLine();
            }
        }
    }
}
