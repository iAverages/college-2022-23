namespace animals {
    abstract public class Animal {
        protected bool coldBlooded;
        protected string skinType;
        protected bool tail;
        protected int legs;
        protected int arms;
        protected int wings;
        protected bool hibernates;

        public bool ColdBlooded { get => coldBlooded; }
        public string SkinType { get => skinType; }
        public bool Tail { get => tail; }
        public int Legs { get => legs; }
        public int Arms { get => arms; }
        public int Wings { get => wings; }
        public bool Hibernates { get => hibernates; }

        public Animal() {
            this.coldBlooded = false;
            this.skinType = "";
            this.tail = false;
            this.legs = 0;
            this.arms = 0;
            this.wings = 0;
            this.hibernates = false;
        }

        public abstract void move();

        public abstract void eat();

        public abstract void birth();

        public virtual void hibernate() {
            Console.WriteLine("This animal hibernates");
        }

        public virtual void getInfo() {
            Console.WriteLine(this.GetType().Name + ":");
            if (this.ColdBlooded)
                Console.WriteLine("This animal is cold-blooded");
            else
                Console.WriteLine("This animal is warm-blooded");
            if (this.SkinType != null)
                Console.WriteLine("This animal is covered in " + this.SkinType);
            if (this.Tail)
                Console.WriteLine("This animal has a tail");
            if (this.Legs > 0)
                Console.WriteLine("This animal has " + this.Legs + " legs");
            if (this.Arms > 0)
                Console.WriteLine("This animal has " + this.Arms + " arms");
            if (this.Wings > 0)
                Console.WriteLine("This animal has " + this.Wings + " wings");
            this.move();
            this.eat();
            this.birth();
            if (this.Hibernates)
                this.hibernate();
            Console.WriteLine();
        }

    }
}
