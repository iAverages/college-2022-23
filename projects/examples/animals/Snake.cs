namespace animals {
    public class Snake : Reptile {

        public Snake() : base() {
            this.skinType = "scales";
            this.tail = true;
            this.legs = 0;
            this.arms = 0;
            this.wings = 0;
        }

        public override void move() {
            Console.WriteLine("This animal slithers");
        }

        public override void eat() {
            Console.WriteLine("This animal is a carnivore");
        }

        public override void birth() {
            Console.WriteLine("This animal lays eggs");
        }
    }
}