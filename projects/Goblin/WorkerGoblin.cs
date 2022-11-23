namespace Goblin
{
    class WorkerGoblin : Goblin
    {
        private string[] tools;

        public WorkerGoblin()
        {
            this.tools = new string[0];
            this.tools.Append("pickaxe");
        }

        public void buildWall()
        {
            Console.WriteLine("Worker Goblin build a wall");
        }

        public void buildHouse()
        {
            Console.WriteLine("Worker Goblin build a house");
        }

        public void mineGold()
        {
            Console.WriteLine("Worker Goblin is mining for gold");
        }
    }
}
