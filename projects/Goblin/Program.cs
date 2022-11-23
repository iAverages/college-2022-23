namespace Goblin
{
    class GoblinProgram
    {
        static void Main(string[] args)
        {
            MagicGoblin player = new MagicGoblin();
            
            Console.WriteLine("Hello Player, you are a goblin.");
            Console.WriteLine("There is another goblin in front of you");
            Console.WriteLine("What do you do?");
            Console.WriteLine("1. Attack");
            Console.WriteLine("2. Nothing");
            Console.WriteLine("2. Walk away");

            string option = Console.ReadLine();
            if (option == "1")
            {
                Goblin goblin = new Goblin();
                player.attack(goblin);
            }
}
    }
}
