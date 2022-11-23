// shitty thing at the top
using BankSystem;

Console.WriteLine("Hello, World!");
SavingAccount a = new SavingAccount(1);

Console.WriteLine((float)a.getBalance());

a.deposit(100);
Console.WriteLine((float) a.getBalance());

/**a.widthdraw(10);
Console.WriteLine(a.getBalance());
*/