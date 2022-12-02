namespace animals {
    public class Gorilla : Mammal {
        public Gorilla() {
            this.skinType = "fur";
            this.tail = false;
            this.legs = 2;
            this.arms = 2;
            this.wings = 0;
        }

        public override void move() {
            Console.WriteLine("This animal walks and climbs");
        }

        public override void eat() {
            Console.WriteLine("This animal is a herbivore");
        }

        public override void birth() {
            Console.WriteLine("This animal gives birth to live young");
        }
    }
}