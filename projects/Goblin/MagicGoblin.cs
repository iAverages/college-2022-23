namespace Goblin
{
    class MagicGoblin : Goblin
    {
        private string[] spells;

        // -1 = use default value
        public MagicGoblin() : base(-1, 100, -1)
        {
            this.spells = new string[0];
        }

        public void attack(Goblin attackee)
        {
            if (attackee.Health == 0)
            {
                Console.WriteLine("This Goblin is already dead");
                return;
            }
            attackee.takeDamage(this.Damage);
            Console.WriteLine($"Delt {this.Damage} to enimy");
        }
    }
}
