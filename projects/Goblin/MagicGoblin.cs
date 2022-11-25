namespace Goblin
{
    class MagicGoblin : Goblin
    {
        private readonly List<string> spells;
        private readonly Random random;

        // -1 = use default value
        public MagicGoblin() : base(-1, 100, -1)
        {
            this.spells = new List<string>();
            this.spells.Add("freeze");
            this.spells.Add("fire ball");
            this.random = new Random();
        }

        public void attack(Goblin attackee)
        {
            if (attackee.Health == 0)
            {
                Console.WriteLine("This Goblin is already dead");
                return;
            }
            string spell = this.getRandomSpell();
            attackee.takeDamage(this.Damage);
            Console.WriteLine($"Delt {this.Damage} to enemy using {spell} spell.");
        }

        private string getRandomSpell()
        {
            return this.spells[this.random.Next(0, this.spells.Count)];
        }
    }
}
