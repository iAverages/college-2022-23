namespace animals {
    abstract public class Reptile : Animal {
        public Reptile() : base() {
            this.hibernates = true;
            this.coldBlooded = true;
        }
    }
}