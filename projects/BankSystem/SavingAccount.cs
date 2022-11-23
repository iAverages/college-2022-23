namespace BankSystem
{
    class SavingAccount : Account
    {
        public SavingAccount(int accountNumber) : base(accountNumber)
        {

        }

        public override void widthdraw(double amount)
        {

            double removeAMount = this.getBalance() * 0.05;
            this.Value = this.Value - amount - removeAMount;
            Console.WriteLine($"You took out money: new amount {this.Value}");
        }

        public override void deposit(double amount)
        {
            this.Value = amount * 1.025;
            
        }

    }
}
