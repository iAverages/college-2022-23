namespace Goblin
{
    class Goblin
    {
        private int _health = 100;
        private int _damage = 0;
        private int _speed = 100;
        private readonly string _color = "green";


        public Goblin()
        {

        }
        public Goblin(string color)
        {
            this._color = color;
        }

        public Goblin(int health, int damage, int speed)
        {
            this.Health = health;
            this.Damage = damage;
            this.Speed = speed;
        }

        public Goblin(string color, int health, int damage, int speed)
        {
            this._color = color;
            this.Health = health;
            this.Damage = damage;
            this.Speed = speed;
        }

        // ensure values can only be set to a positive number;
        public int Health
        {
            get => this._health;
            set => this._health = value < 0 ? 0 : value;
        }

        public int Damage
        {
            get => this._damage;
            set => this._damage = value < 0 ? 0 : value;
        }

        public int Speed
        {
            get => this._speed;
            set => this._speed = value < 0 ? 0 : value;
        }

        public string Color => this._color;

        public bool walk()
        {
            Console.WriteLine("Walked");
            return true;
        }

        public bool climb()
        {
            Console.WriteLine("Climbed up");
            return true;
        }

        public void takeDamage(int damage)
        { 
            this.Health = this.Health - damage; 

        }


    }
}
