namespace animals {

    public class Turtle : Reptile {

        public Turtle() : base() {
            this.skinType = "scales";
            this.tail = true;
            this.legs = 4;
            this.arms = 0;
            this.wings = 0;
        }

        public override void move() {
            Console.WriteLine("This animal crawls and swims");
        }

        public override void eat() {
            Console.WriteLine("This animal is an omnivore");
        }

        public override void birth() {
            Console.WriteLine("This animal lays eggs");
        }
    }
}