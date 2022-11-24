namespace BankSystem
{
    class Account
    {

        private readonly int _accountNumber;
        private double _value = 1000;

        public int AccountNumber => _accountNumber;

        public double Value { get => _value; set => _value = value; }

        public Account(int accountNumber)
        {
            this._accountNumber = accountNumber; 
        }

        public virtual void deposit(double amount)
        {
            this.Value += amount;
            Console.WriteLine($"You put money: {amount}");
        }

        public virtual void widthdraw(double amount)
        {
            this.Value -= amount;
            Console.WriteLine($"You took money: {amount}");
        }

        public double getBalance ()
        {
            if (this._value == 0)
            {
                // call bank lolxd
                // reutnr
            }

            return this._value;
        }
    }
}
