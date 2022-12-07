namespace animals {

    public class Tortoise : Reptile {

        public Tortoise() : base() {
            this.skinType = "scales";
            this.tail = true;
            this.legs = 4;
            this.arms = 0;
            this.wings = 0;
        }

        public override void move() {
            Console.WriteLine("This animal walks");
        }

        public override void eat() {
            Console.WriteLine("This animal is a herbivore");
        }

        public override void birth() {
            Console.WriteLine("This animal lays eggs");
        }
    }
}