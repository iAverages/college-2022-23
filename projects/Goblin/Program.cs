namespace Goblin
{
    class GoblinProgram
    {
        static void Main(string[] args)
        {
            MagicGoblin player = new MagicGoblin();

            Console.WriteLine("Hello Player, you are a magic goblin.");
            Console.WriteLine("There is another goblin in front of you");
            Console.WriteLine("What do you do?");
            Console.WriteLine("1. Attack");
            Console.WriteLine("2. Nothing");
            Console.WriteLine("3. Walk away");

            string option = Console.ReadLine();
            if (option == "1")
            {
                Goblin goblin = new Goblin();
                player.attack(goblin);
            }
            else if (option == "2")
            {
                Console.WriteLine("You sat there looking at the goblin");
            }
            else if (option == "3")
            {
                player.walk();
            }
        }
    }
}
