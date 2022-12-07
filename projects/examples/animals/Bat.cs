namespace animals {
    public class Bat : Mammal {
        public Bat() : base() {
            this.skinType = "fur";
            this.tail = true;
            this.legs = 2;
            this.arms = 0;
            this.wings = 2;
            this.hibernates = true;
        }

        public override void move() {
            Console.WriteLine("This animal flies");
        }

        public override void eat() {
            Console.WriteLine("This animal is an omnivore");
        }

        public override void birth() {
            Console.WriteLine("This animal gives birth to live young");
        }
    }
}