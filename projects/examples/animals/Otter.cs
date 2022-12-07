namespace animals {

    public class Otter : Mammal {

        public Otter() {
            this.skinType = "fur";
            this.tail = true;
            this.legs = 4;
            this.arms = 0;
            this.wings = 0;
        }

        public override void move() {
            Console.WriteLine("This animal walks and swims");
        }

        public override void eat() {
            Console.WriteLine("This animal is an omnivore");
        }

        public override void birth() {
            Console.WriteLine("This animal gives birth to live young");
        }
    }
}